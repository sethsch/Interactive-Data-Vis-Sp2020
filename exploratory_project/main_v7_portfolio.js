
// set the dimensions and margins of the graph
const width = window.innerWidth * 0.5,
  height = window.innerHeight * 1.3,
  margin = { top: 40, bottom: 40, left: 220, right: 10 },
  radius = 3.75,
  default_selection = "Global",
  default_year1 = 2016,
  default_year2 = 2019,
  default_sort = "high_low",
  labelSize = "14px",
  labelHover = "16px";


const plot2_width = window.innerWidth * 0.3,
plot2_height = window.innerHeight * 0.3,
plot2_margins = { top: 20, bottom: 20, left: 20, right: 20 };


let dot_plot;
let xScale;
let yScale;
let yConfig;

let stacked_plot;
let stacked_plot_area;
let xScale_stacked;
let yScale_stacked;
let circScale;


let tooltip;
let table;
let thead;
let tcolhead;
let tbody;


// a function to be used for rounding percentages in the 
var rd_perc = d3.format(".1%");

// a constant used for scaling which trends to show more boldly
let thresh = 0.0;

// a constant used for delayed transitions
let delayFactor = 1.9;

// a constant to be used for deciding how many terms to show in the table, maximum
const numberKwic = 20;

 /* APPLICATION STATE
 * */
let state = {
    queryData: [],
    kwicData: [],
    regTotals: [],
    mentTotals: [],
    sortStyle: "high_low",
    sorted_vals: [], //
    selectedRegion: "Global",
    selectedYear1: 2016,
    selectedYear2: 2019,
    prevYear1: null,
    prevYear2: null,
    prevRegion: null,
    hover: {
        term: "",
        year1_val: null,
        year2_val: null,
        toolXpos: null,
      },
  };

const color = {2016:"#cc2f56",
            2017: "#7dcc2e",
            2018: "#cc7d2e",
            2019:"#2fbccc"};


  
  /**
   * LOAD DATA
   * */
Promise.all([
    d3.csv("../data/filtered_querystats.csv", d3.autoType),
    d3.json("../data/kwic_keywords.json"),
    d3.csv("../data/regions_years_num_records.csv",d3.autoType),
    d3.csv("../data/regyear_termMents.csv",d3.autoType),
]).then(([queryStats,kwicStats,regTotals,mentTotals]) => {
    state.queryData = queryStats;
    state.kwicData = kwicStats;
    state.regTotals = regTotals;
    state.mentTotals = mentTotals;
    console.log("state:",state);
    init();
});





function init() {

// this should probaby be rewritten as several inits for plots/user elements


    /// need to figure out the tooltip functionality....
    // Define the div for the tooltip
    tooltip = d3.select("body").append("div")	
    .attr("class", "tooltip")				
    .style("opacity", 0);

    // threshold slider
    // Simple
    /*var thresh_opts = [0, 0.01, 0.02, 0.03, 0.04, 0.05,
                0.06,0.07,0.08,0.09,0.10,0.11,0.12,0.13,0.14,0.15];

    var sliderSimple = d3
        .sliderBottom()
        .min(d3.min(thresh_opts))
        .max(d3.max(thresh_opts))
        .width(350)
        .tickFormat(d3.format('.0%'))
        .ticks(7)
        .default(0.03)
        .on('onchange', val => {
            //d3.select('p#value-simple').text(d3.format('.%')(val));
            thresh = val;
            drawPlot();
        });

    var gSimple = d3
        .select('div#slider-simple')
        .append('svg')
        .attr('width', 350)
        .attr('height', 100)
        .append('g')
        .attr('transform', 'translate(30,30)');

    gSimple.call(sliderSimple);*/

    //d3.select('p#value-simple').text(d3.format('.%')(sliderSimple.value()));



////// dropdowns

    //create the reginos dropdown
    const selectReg = d3.select("#dropdown_reg").on("change",function() {
        console.log("new selected Region variable is",this.value);
        state.prevRegion = state.selectedRegion;
        state.selectedRegion = this.value;
      });
    
    let regions = new Set(d3.map(state.queryData,function(d){return d.obs_region;}).keys());
    
    selectReg
        .selectAll("option")
        .data(Array.from(regions)) 
        .join("option")
        .attr("value", d => d)
        .text(d => d.split("_").join(" ")); 

    selectReg.property("value",default_selection);  // this ensures that the selected value is the same as what we have in state when we initialize the options
    
    let sort_opts = {"high_low": "Max/min % change in frequency",
                    "AZ": "Alphabetical",
                    "ascending": "Ascending year 2 frequencies",
                    "descending": "Descending year 2 frequencies"
                    };

    //create the sort order dropdown
    const selectSort = d3.select("#dropdown_sort").on("change",function() {
        console.log("new selected sort",this.value);
        state.sortStyle = this.value;
        sortTrends(this.value);
    });

    selectSort
        .selectAll("option")
        .data(Object.keys(sort_opts)) 
        .join("option")
        .attr("value", d => d)
        .text(d=>sort_opts[d]); 

    //selectSort.property("value","Max/min % change in frequency");


    /// legend
    // a simple legend for years
    let legend = d3.select("#legend")
        .append("svg")
        .attr("height",60)
        .attr("width",200)
   
        // default dates legend dots
    legend.append("circle").attr("cx",16).attr("cy",15).attr("r", 8)
        .attr("id","dot_2016").attr("class","legend_dot").style("fill", color[2016])
        .attr("active","true").attr("stroke","black")
        .attr("stroke-width",2)

    legend.append("circle").attr("cx",112).attr("cy",15).attr("r", 8)
        .attr("id","dot_2019").attr("class","legend_dot").style("fill", color[2019])
        .attr("active","true").attr("stroke","black")
         .attr("stroke-width",2)

        // default inactive lgend dots
    legend.append("circle").attr("cx",48).attr("cy",15).attr("r", 8)
        .attr("id","dot_2017").attr("class","legend_dot")
        .style("fill", color[2017]).attr("active","false")

    legend.append("circle").attr("cx",80).attr("cy",15).attr("r", 8)
        .attr("id","dot_2018").attr("class","legend_dot")
        .style("fill", color[2018]).attr("active","false")
   
   // legend year text
    legend.append("text").attr("x",4).attr("y",35).style("font","10px sans-serif").text("2016")
    legend.append("text").attr("x",36).attr("y",35).style("font","10px sans-serif").text("2017")
    legend.append("text").attr("x",68).attr("y",35).style("font","10px sans-serif").text("2018")
    legend.append("text").attr("x",100).attr("y",35).style("font","10px sans-serif").text("2019")

      
    // create the Year 1 dropdown
    const selectYear1 = d3.select("#dropdown_y1").on("change",function() {
        console.log("new year 1 variable is: ",this.value);
        state.prevYear1 = state.selectedYear1;
        d3.select("#dot_"+String(state.selectedYear1)).attr("stroke","none");
        console.log("previous year 1 value was: ", state.prevYear1);
        state.selectedYear1 = this.value;
        d3.select("#dot_"+String(this.value)).attr("stroke","black").attr("stroke-width",2);      
    });

    selectYear1.property("value",default_year1);
    
    let year1_vals = [2016,2017,2018]
    
    selectYear1
    .selectAll("option")
    .data(year1_vals) // unique data values-- (hint: to do this programmatically take a look `Sets`)
    .join("option")
    .attr("value", d => d)
    .text(d => d);


    // the year 2 dropdown needs to exclude the year 1 value
    const selectYear2 = d3.select("#dropdown_y2").on("change",function() {
        console.log("new year 2 variable is: ",this.value);
        state.prevYear2 = state.selectedYear2;
        d3.select("#dot_"+String(state.selectedYear2)).attr("stroke","none");
        console.log("last year 2 value was: ",state.prevYear2);
        state.selectedYear2 = this.value;
        d3.select("#dot_"+String(this.value)).attr("stroke","black").attr("stroke-width",2);
      });
    
    let year2_vals = [2016,2017,2018,2019]
    year2_vals = year2_vals.filter( d=> d > state.selectedYear1)
    
    selectYear2
    .selectAll("option")
    .data(year2_vals) // unique data values-- (hint: to do this programmatically take a look `Sets`)
    .join("option")
    .attr("value", d => d)
    .text(d => d);

    selectYear2.property("value",default_year2);



//////// plots


  // intitialize the plot dot_plot
    dot_plot = d3
    .select("#plot_1")
    .append("svg")
    .attr("width", width)
    .attr("height", height);

  // Add X axis
    xScale = d3.scaleLinear()
        .domain([0, 0.7])
        .rangeRound([margin.left, width - margin.right]);
    // one axis at the top, 
    dot_plot.append("g")
        .attr("transform", `translate(0,${margin.top})`)
        .call(d3.axisTop(xScale).ticks(5, "%"))
        .call(g => g.selectAll(".tick line").clone().attr("stroke-opacity", 0.1).attr("y2", height - margin.bottom))
        .call(g => g.selectAll(".domain").remove())
    // with a label
    dot_plot.append("text")
      .attr("transform", `translate(${xScale(0.35)},${margin.top-20})`)
      .attr("text-anchor","middle")
      .style("font","12px sans-serif")
      .style("font-family","Arial")
      .style("font-weight","bold")
      .text("grants w. 1+ mention")

    // one at the bottom, for when you scroll there
    dot_plot.append("g")
        .attr("transform", `translate(0,${height-15})`)
        .call(d3.axisTop(xScale).ticks(5, "%"))
        .call(g => g.selectAll(".tick line").remove())
        .call(g => g.selectAll(".domain").remove());

    dot_plot.append("text")
      .attr("transform", `translate(${xScale(0.35)},${height-10})`)
      .attr("text-anchor","middle")
      .style("font","12px sans-serif")
      .style("font-family","Arial")
      .style("font-weight","bold")
      .text("grants w. 1+ mention")




    // set up the table and its header
    table = d3.select("#d3-table");
    thead = table.append("thead");
    thead
        .append("tr")
        .append("th")
        .attr("colspan", "4")
        .attr("class","term_header")
        .text(state.hover.term);

    thead
        .append("tr")
        .append("th")
        .attr("colspan","4")
        .attr("class","table_subtitle")
        .text("paragaph-level collocations");



    thead
        .append("tr")
        .selectAll("th")
        .data(["   "+String(state.selectedYear1)+"   ","%","   "+String(state.selectedYear2)+"   ","%"])    
        .join("td")
        .text(d => d)
        .attr("id","col-id")
        .attr("class","col_header");

    tbody  = table.append("tbody").attr("class","table-body");



/// init and scales for the stacked chart
 


    stacked_plot = d3
    .select("#plot_2")
    .append("svg")
    .attr("width", plot2_width)
    .attr("height", plot2_height);


    // Add X axis
    yScale_stacked = d3.scaleBand()
        .domain(state.mentTotals.map(d=> d.obs_region.split("_").join(" ").split("and").join("&")))
        .range([plot2_height-plot2_margins.bottom,plot2_margins.top+10])
        .paddingInner(0.2);

    xScale_stacked = d3.scaleBand()
        .domain(["",2016,2017,2018,2019,""])
        .range([ plot2_margins.left, plot2_width - plot2_margins.right])
        .paddingInner(0.2);


    stacked_plot.append("g")
        .attr("class", "stacked_plot_axis--x")
        .attr("transform", `translate(-35, ${plot2_height-plot2_margins.bottom})`)
        .call(d3.axisBottom(xScale_stacked))
        .call(g => g.select(".domain").remove())
        .call(g => g.selectAll(".tick").select("line").remove());
    

    const yAxis_stacked = d3.axisRight(yScale_stacked);   

    stacked_plot.append("g")
        .attr("class", "stacked_plot_axis--y")
        .attr("transform", `translate(${plot2_margins.left}, -10)`)
        .call(yAxis_stacked)
        .call(g => g.select(".domain").remove())
        .call(g => g.selectAll(".tick").select("line").remove());

    stacked_plot.append("text")
        .attr("transform",`translate(${plot2_width/2},${plot2_margins.top})`)
        .style("font","12px sans-serif")
        .style("font-family","Arial Black")
        .attr("text-anchor","middle")
        .style("font-variant","small-caps")
        .text("mentions across regions");


    circScale = d3.scaleSqrt()
        .domain([0,d3.max(state.mentTotals,d=>d.mentions)])
        .range([0,40]);
  




    drawPlot(); // call the draw function for the plot


    drawTable(); // call the draw function for the table



}

function drawPlot(){
    

     // filter the data for the selected categories
    let filteredData = state.queryData;
    filteredData = filteredData.filter(d => d.obs_region === state.selectedRegion);
    sortTrends(state.sortStyle);
    //sortTrends(state.sortStyle);
    
    // Y axis parameters
    yConfig = ({
        domain: state.sorted_vals.map(d=>d.term), // 👀 change me!
        paddingInner: 0.7, // 👀 me!
        paddingOuter: 0.1, // 👀 change me!
        round: false, // 👀 and me!
        align: 0, // 👀 !
        range: [margin.top+10, height - margin.bottom] // 👀 yes
    });
    console.log(yConfig);


    yScale = d3.scaleBand()
        .domain(yConfig.domain)
        .range(yConfig.range)
        .paddingInner(yConfig.paddingInner)
        .paddingOuter(yConfig.paddingOuter)
        .align(yConfig.align)
        .round(yConfig.round);



    dot_plot.attr("text-anchor","end").style("font","sans-serif");

    const bar = dot_plot
            .selectAll(".bar")
            .data(filteredData)
            .join(
                enter =>
                    enter
                    .append("line")
                    .attr("class","bar")
                    .attr("id",d=> d.term+String(state.selectedRegion)+String(state.selectedYear1)+String(state.selectedYear2))
                    .attr("term_id", d=>d.term)
                    .attr("y1_val", d=>d[state.selectedYear1])
                    .attr("y2_val", d=>d[state.selectedYear2])
                    .attr("stroke", d => {
                        if (d[state.selectedYear2] > d[state.selectedYear1]) {return color[state.selectedYear2];}
                        else {return color[state.selectedYear1];}
                    })
                    .attr("stroke-dasharray", d => {
                            const totalLength = Math.abs(xScale(d[state.selectedYear2]) - xScale(d[state.selectedYear1]));
                            return totalLength + " " + totalLength;
                    })
                    .attr("stroke-dashoffset", d => {
                        const totalLength = (xScale(d[state.selectedYear2]) - xScale(d[state.selectedYear1]));
                        return totalLength;
                    })
                    .attr("x1", d => {
                        if (d[state.selectedYear2] > d[state.selectedYear1]) return xScale(d[state.selectedYear1])+radius/2.75;
                        else return xScale(d[state.selectedYear2])+radius/2.75;
                    })
                    .attr("x2", d => {
                        if (d[state.selectedYear2] > d[state.selectedYear1]) return xScale(d[state.selectedYear2])-radius/2.75;
                        else return xScale(d[state.selectedYear1])-radius/2.75;
                    })
                    .attr("stroke-opacity", d => Math.abs(d[state.selectedYear2]-d[state.selectedYear1]) > thresh ? 1:0.2 )
                    //.attr("stroke-width", d => Math.abs(d[state.selectedYear2]-d[state.selectedYear1]) > thresh ? 2.5:1)
                    //.attr("stroke-opacity",1)
                    .attr("stroke-width", 1.5)
                    .attr("transform", (d, i) => `translate(0,${yScale(d.term)})`)
                    .call(enter =>
                        enter
                        .transition()
                        .delay(d=>yScale(d.term)*delayFactor)
                        .duration(1250)
                        .attr("stroke-dashoffset",0)
                    ),
                update => 
                    update
                    .attr("id",d=> d.term+String(state.selectedRegion)+String(state.selectedYear1)+String(state.selectedYear2))
                    .attr("term_id", d=>d.term)
                    .attr("y1_val", d=>d[state.selectedYear1])
                    .attr("y2_val", d=>d[state.selectedYear2])
                    //.attr("stroke-dashoffset",1)
                    .attr("stroke", d => {
                        if (d[state.selectedYear2] > d[state.selectedYear1]) {return color[state.selectedYear2];}
                        else {return color[state.selectedYear1];}
                    })
                    .attr("stroke-opacity", d => Math.abs(d[state.selectedYear2]-d[state.selectedYear1]) > thresh ? 1:0.2 )
                    //.attr("stroke-opacity",1)
                    .attr("stroke-width",1.5)
                    //.attr("stroke-width", d => Math.abs(d[state.selectedYear2]-d[state.selectedYear1]) > thresh ? 2.5:1)
                    .attr("stroke-dasharray", d => {
                            const totalLength = Math.abs(xScale(d[state.selectedYear2]) - xScale(d[state.selectedYear1]));
                            return totalLength + " " + totalLength;
                    })
                    .attr("stroke-dashoffset", d => {
                        const totalLength = (xScale(d[state.selectedYear2]) - xScale(d[state.selectedYear1]));
                        return totalLength;
                    })
                    .call(update =>
                        update
                        .transition()
                        .attr("stroke-dashoffset",1)
                        .delay(d=>yScale(d.term)*delayFactor)
                        .duration(1000)
                        .attr("transform", (d, i) => `translate(0,${yScale(d.term)})`)
                        .attr("x1", d => {
                            if (d[state.selectedYear2] > d[state.selectedYear1]) return xScale(d[state.selectedYear1])+radius/2.75;
                            else return xScale(d[state.selectedYear2])+radius/2.75;
                        })
                        .attr("x2", d => {
                            if (d[state.selectedYear2] > d[state.selectedYear1]) return xScale(d[state.selectedYear2])-radius/2.75;
                            else return xScale(d[state.selectedYear1])-radius/2.75;
                        })
                        .attr("stroke-dashoffset",0)
                        ),
                    exit => exit.remove()
            )
            .on('mouseover', synchronizedMouseOver)
            .on("mouseout", synchronizedMouseOut);


            

                        
    // in previous examples, there was a key between data element and dot html element
    // does there need to be an id/class attribute for each dot that's = "term+year"?
        const dot1 = dot_plot.selectAll(".dot1")
            .data(filteredData)
            //.data(d => d3.cross([state.selectedYear1,state.selectedYear2], [d]))
            .join(
                enter =>
                enter
                    .append("circle")
                    .attr("class","dot1")
                    .attr("id", d=> d.term+"_"+String(state.selectedRegion)+String(state.selectedYear1))
                    .attr("term_id", d=>d.term)
                    .attr("y1_val", d=>d[state.selectedYear1])
                    .attr("y2_val", d=>d[state.selectedYear2])
                    .attr("cx", d => xScale(d[state.selectedYear1]))
                    .attr("fill", color[state.selectedYear1])
                    .attr("opacity", d => Math.abs(d[state.selectedYear2]-d[state.selectedYear1]) > thresh ? 1 : 0.4 )
                    .attr("cy", d=> yScale(d.term))
                    .attr("r", 0)
                    .call(enter =>
                        enter
                        .transition()
                        .delay(d => yScale(d.term)*delayFactor)
                        .duration(1000)
                        .attr("r", radius)
                        ),
                update => 
                    update
                    .attr("id", d=> d.term+"_"+String(state.selectedRegion)+String(state.selectedYear1))
                    .attr("term_id", d=>d.term)
                    .attr("y1_val", d=>d[state.selectedYear1])
                    .attr("y2_val", d=>d[state.selectedYear2])
                    .attr("r", 0)
                    .call(update =>
                        update
                        .transition()
                        .delay(d => yScale(d.term)*delayFactor)
                        .duration(1000)
                        .attr("r", radius)
                        .attr("cy", d=> yScale(d.term))
                        .attr("cx", d => xScale(d[state.selectedYear1]))
                        .attr("fill", color[state.selectedYear1])
                        .attr("opacity", d => Math.abs(d[state.selectedYear2]-d[state.selectedYear1]) > thresh ? 1 : 0.4 )
                        ),
                exit =>
                        exit
                        // rightnow these are getting hidden instead of removed....
                        // why do certain entries not remove?
                        // i also notice that the table does not update for these terms, even though the graphic elements transition
                        .attr("cy", height+40)
                        .call(exit =>
                            exit
                            .transition()
                            .delay(d => yScale(d.term)*delayFactor*0.63)
                            .duration(750)
                            .attr("opacity", 0.1)
                            .attr("r", 0)
                            .remove())
            )
            .on('mouseover', synchronizedMouseOver)
            .on("mouseout", synchronizedMouseOut);
        // .on('mouseover', tooltipMouseOver);


        const dot2 = dot_plot.selectAll(".dot2")
            .data(filteredData)
            //.data(d => d3.cross([state.selectedYear1,state.selectedYear2], [d]))
            .join(
                enter =>
                enter
                    .append("circle")
                    .attr("class","dot2")
                    .attr("id", d=> d.term+"_"+String(state.selectedRegion)+String(state.selectedYear2))
                    .attr("term_id", d=>d.term)
                    .attr("y1_val", d=>d[state.selectedYear1])
                    .attr("y2_val", d=>d[state.selectedYear2])
                    .attr("cx", d => xScale(d[state.selectedYear2]))
                    .attr("fill", color[state.selectedYear2])
                    .attr("opacity", d => Math.abs(d[state.selectedYear2]-d[state.selectedYear1]) > thresh ? 1 : 0.4 )
                    .attr("cy", d=> yScale(d.term))
                    .attr("r", 0)
                    .call(enter =>
                        enter
                        .transition()
                        .delay(d => yScale(d.term)*delayFactor)
                        .duration(1000)
                        .attr("r", radius)
                        ),
                update => 
                    update
                    .attr("id", d=> d.term+"_"+String(state.selectedRegion)+String(state.selectedYear2))
                    .attr("term_id", d=>d.term)
                    .attr("y1_val", d=>d[state.selectedYear1])
                    .attr("y2_val", d=>d[state.selectedYear2])
                    .attr("r", 0)
                    .call(update =>
                        update
                        .transition()
                        .delay(d => yScale(d.term)*delayFactor)
                        .duration(1000)
                        .attr("r", radius)
                        .attr("cy", d=> yScale(d.term))
                        .attr("cx", d => xScale(d[state.selectedYear2]))
                        .attr("fill", color[state.selectedYear2])
                        .attr("opacity", d => Math.abs(d[state.selectedYear2]-d[state.selectedYear1]) > thresh ? 1 : 0.4 )
                        ),
                exit =>
                        exit
                        // rightnow these are getting hidden instead of removed....
                        // why do certain entries not remove?
                        .attr("cy", height+40)
                        .call(exit =>
                            exit
                            .transition()
                            .delay(d => yScale(d.term)*delayFactor*0.63)
                            .duration(750)
                            .attr("opacity", 0.1)
                            .attr("r", 0)
                            .remove())
            )
            .on('mouseover', synchronizedMouseOver)
            .on("mouseout", synchronizedMouseOut);
            //.on('mouseover', tooltipMouseOver);

    const label = dot_plot.selectAll(".row-label")
                    .data(filteredData)
                    .join(
                        enter =>
                        enter
                            .append("text")
                            .attr("class","row-label")
                            .text((d, i) => (d.term).split('_').join(' '))
                            .attr("term_id", d=> d.term)
                            .attr("y1_val", d=>d[state.selectedYear1])
                            .attr("y2_val", d=>d[state.selectedYear2])
                            .attr("id", d=> d.term+"_rank"+String(state.selectedRegion)+String(state.selectedYear1)+String(state.selectedYear2))
                            .attr("y", d=>yScale(d.term))
                            .attr("dy", "0.35em")
                            .attr("x", margin.left-radius)
                            .attr('font-size', '0px')
                            .call(enter =>
                                enter
                                .transition()
                                .delay(d => yScale(d.term)*delayFactor)
                                .duration(1000)
                                .attr('font-size', labelSize)
                                ),
                        update => 
                            update
                            .text((d, i) => (d.term).split('_').join(' '))
                            .attr("class", "row-label")
                            .attr("term_id", d=> d.term)
                            .attr("y1_val", d=>d[state.selectedYear1])
                            .attr("y2_val", d=>d[state.selectedYear2])
                            //.attr("y", d=>yScale(d.term))
                            .attr('fontsize','0px')
                            .attr("id", d=> d.term+"_rank"+String(state.selectedRegion)+String(state.selectedYear1)+String(state.selectedYear2))
                            .call(update =>
                                update
                                .transition()
                                .delay(d=>yScale(d.term)*0.9*delayFactor)
                                .attr("y", d=>yScale(d.term))
                                .duration(1000)
                                .attr('font-size',labelSize)
                                ),
                        exit => exit
                            // rightnow these are getting hidden instead of removed....
                            // why do certain entries not remove?
                            .attr("y", height+40)
                            .call(exit =>
                            exit
                            .transition()
                            .delay(d=>yScale(d.term)*0.63*delayFactor)
                            .duration(500)
                            .remove())
                    )
                    .on('mouseover', synchronizedMouseOver)
                    .on("mouseout", synchronizedMouseOut);
    
};


function synchronizedMouseOver(d) {
                
    var bar_select = d3.select(this)
        .attr("stroke-width",3);
    
    var text_select = d3.select(this)
        .style("font-size",labelHover)
        .style("font-weight","bold");

    var dot1_select = d3.select(this)
        .attr("r", radius*1.25);

    var dot2_select = d3.select(this)
        .attr("r",radius*1.25);


    var bar_resp = d3.select("#"+d.term+String(state.selectedRegion)+String(state.selectedYear1)+String(state.selectedYear2))
        .attr("stroke-width",3);

    var text_resp = d3.select("#"+ d.term+"_rank"+String(state.selectedRegion)+String(state.selectedYear1)+String(state.selectedYear2))
        .style("font-size",labelHover)
        .style("font-weight","bold");

    var dot1_resp = d3.select("#"+d.term+"_"+String(state.selectedRegion)+String(state.selectedYear1))
        .attr("r",radius*1.25);

    var dot2_resp = d3.select("#"+d.term+"_"+String(state.selectedRegion)+String(state.selectedYear2))
        .attr("r",radius*1.25);


    state.hover.term = d3.select(this).attr("term_id");
    state.hover.year1_val = d3.select(this).attr("y1_val");
    state.hover.year2_val = d3.select(this).attr("y2_val");
    state.hover.toolXpos = xScale(d3.select(this).attr("y2_val"))+100;
    //width;

    console.log("selected term: ",state.hover.term,state.hover.year1_val,state.hover.year2_val,state.selectedRegion);

    

    tooltipOver();

    drawStacked(); // call the draw function for the stacked plot
    drawTable();


};

function synchronizedMouseOut(d) {

    //state.hover.term = null;
   
    var bar_select = d3.select(this)
        //.attr("stroke-width",d => Math.abs(d[state.selectedYear2]-d[state.selectedYear1]) > thresh ? 2.5:1);
        .attr("stroke-width",1.5)

    var text_select = d3.select(this)
        .style("font-size",labelSize)
        .style("font-weight","normal");
    
    var dot1_select = d3.select(this)
        .attr("r", radius);

    var dot2_select = d3.select(this)
        .attr("r", radius);

    var bar_resp = d3.select("#"+d.term+String(state.selectedRegion)+String(state.selectedYear1)+String(state.selectedYear2))
        //.attr("stroke-width",d => Math.abs(d[state.selectedYear2]-d[state.selectedYear1]) > thresh ? 2.5:1);
        .attr("stroke-width",1.5)
    var text_resp = d3.select("#"+ d.term+"_rank"+String(state.selectedRegion)+String(state.selectedYear1)+String(state.selectedYear2))
        .style("font-size",labelSize)
        .style("font-weight","normal");   
        
    var dot1_resp = d3.select("#"+d.term+"_"+String(state.selectedRegion)+String(state.selectedYear1))
        .attr("r", radius);

    var dot2_resp = d3.select("#"+d.term+"_"+String(state.selectedRegion)+String(state.selectedYear2))
        .attr("r", radius);
    
    tooltipOut();

};


function tooltipOver() {
    
    show_term = state.hover.term.split("_").join(" ")

    let y1Grants = state.regTotals.filter(d=>d.region === state.selectedRegion && d.year === state.selectedYear1);
    let y2Grants = state.regTotals.filter(d=>d.region === state.selectedRegion && d.year === state.selectedYear2);
    console.log("y1",y1Grants,"y1_hoverval",state.hover.year1_val);

    y1Grants = y1Grants[0].num_recs;
    y2Grants = y2Grants[0].num_recs;
    console.log("y1",y1Grants,"y1_hoverval",state.hover.year1_val);

    let rdY1grants = Math.round(state.hover.year1_val*y1Grants);
    let rdY2grants = Math.round(state.hover.year2_val*y2Grants);


    tooltip
    .transition()		
    .duration(400)		
    .style("opacity", .9);	

    // later on, ammend to include 'of X grants'
    tooltip
    .html("<strong>"+show_term + "<br/>"  +   
    "<span style='color:" + color[state.selectedYear1] + "'>" +  
    state.selectedYear1 + ": " + rdY1grants + "</span></strong>" + "<span style='font-size:14px'> of "+y1Grants+" grants</span>" +
    "<br/>" +
    "<strong><span style='color:" + color[state.selectedYear2] + "'>" + 
    state.selectedYear2 + ": " + rdY2grants + "</span></strong>" + "<span style='font-size:14px'> of "+y2Grants+" grants</span>"
        )
    // moves with mouse    	
    //.style("left", (state.hover.toolXpos) + "px")		
    //.style("top", (d3.event.pageY - 28) + "px");	
    //or, stays in convenient position
    .style("left", xScale(0.6) + "px")
    .style("top", (0.5*(height))+"px");

};

function tooltipOut() {
	
    tooltip.transition()		
    .duration(600)		
    .style("opacity", 0);	

};

function drawTable () {

    let kwicFiltered = state.kwicData;
    console.log("STATEKWICDATA",kwicFiltered);
    //kwicFiltered = kwicFiltered.filter(d=> d.target_term === state.hover.term 
    //    && d.region === state.selectedRegion
    //    && (d.year === state.selectedYear1 || d.year === state.selectedYear2));
    kwicFiltered = kwicFiltered[state.selectedRegion][state.hover.term];
    console.log("KWIC FILTER FOR REGION and term:",kwicFiltered);

    let y1_terms = sortKWIC(kwicFiltered[state.selectedYear1])[0];
    //console.log("Y1TERMS",y1_terms);
    let y1_values = sortKWIC(kwicFiltered[state.selectedYear1])[1];
    let y2_terms = sortKWIC(kwicFiltered[state.selectedYear2])[0];
    let y2_values = sortKWIC(kwicFiltered[state.selectedYear2])[1];

    let table_rowArr = [];
    for (i = 0; i < numberKwic; i++) {
        let y1t = (y1_terms[i] === null) ? "": y1_terms[i];
        let y1v = (isNaN(y1_values[i])) ? "": rd_perc(y1_values[i]);
        let y2t = (y2_terms[i] === null) ? "": y2_terms[i];
        let y2v = (isNaN(y2_values[i])) ? "": rd_perc(y2_values[i]);

        table_rowArr.push([y1t,y1v,y2t,y2v]) ;
    }



   console.log("RESULT_1_terms",y1_terms);
   console.log("RESULT_1_values", y1_values);
   console.log("TABLEROWARR",table_rowArr);



    // initialize the plot table
    //table = d3.select("#d3-table");
    //let thead = table.append("thead");

    d3.select(".term_header")
        .data([state.hover.term])
        .join(
            enter =>
            enter
            .text(d=>d.split("_").join(" "))
            .style("color","lightgray")
            .call(enter =>
                enter
                .transition()
                .duration(500)
                .style("color","black")),
            update =>
                update
                .text(d=>d.split("_").join(" "))
                .style("color","lightgray")
                .call(update =>
                    update
                    .transition()
                    .duration(500)
                    .style("color","black"))
        );
    //thead
    //.selectAll("#table-col-header")
    //.data([["kwicterm",state.selectedYear1,"%","  ","kwicterm",state.selectedYear2,"%"]])
    //.join

    /* thead
    .append("tr")
    .append("th")
    .attr("colspan","7")
    .enter(enter => enter.call(enter.text(state.hover.term.split("_").join(" "))))*/


    //tcolhead
d3.selectAll(".col_header")
        .data(["   "+String(state.selectedYear1)+"   ","%","   "+String(state.selectedYear2)+"   ","%"])    
        .join(enter =>
        enter
        .text(d=>d)
        .style("color","lightgray")
        .call(enter =>
            enter
            .transition()
            .duration(500)
            .style("color","black")),
        update =>
            update
            .text(d=>d)
            .call(update =>
                update
                .transition()
                .duration(500)),

        );

                
tbody
    .selectAll("tr")
    .attr("class","kwic-terms-stats")
    .data(table_rowArr)
    .join("tr")
    .join(enter =>
            enter
            .selectAll("td")
            .data(d => Object.values(d))
            .join("td")
            .text(d=>d)
            .call(enter => enter),
        update =>
            update
            .selectAll("td")
            .data(d=>Object.values(d))
            .join("td")
            .text(d=>d)
            .call(update=>update)
            );

};


function sortKWIC (kwicYear) {

    let terms = d3.keys(kwicYear);
    let sortedvals = [];
    let tuples = [];
    for (i=0; i < terms.length; i++) {
        sortedvals.push(kwicYear[terms[i]]["pct_together"]);
        tuples.push( [ terms[i], kwicYear[terms[i]]["pct_together"]]);
    };
    sortedvals = sortedvals.sort(d3.descending);
    let term_result = [];
    let value_result = [];
    sortedvals.forEach(function(key) {
        var found = false;
        tuples = tuples.filter(function(item) {
            if(!found && item[1] == key) {
                term_result.push(item[0]);
                value_result.push(item[1]);
                found = true;
                return false;
            } else 
                return true;
        })
    });
    return [term_result, value_result];
};

function drawStacked () {
    let stackedFiltered = state.mentTotals;
    // we actually need one per region... but let's see...
    stackedFiltered = stackedFiltered.filter(d => d.term === state.hover.term);
    console.log("STACK FILT", stackedFiltered);

    var ment_dots = stacked_plot
        .selectAll(".ment-dot")
        .data(stackedFiltered,d=>[d.mentions,d.obs_region,d.year,d.term])
        .join(enter =>
                enter
                .append("circle")
                .attr("class","ment-dot")
                .attr("id",d=>d.term+d.obs_region)
                .attr("cx", d => xScale_stacked(d.year))
                .attr("fill", d=>color[d.year])
                .attr("opacity",function (d) {
                    if (d.obs_region === state.selectedRegion) return 1;
                    else return 0.25;})
                .attr("cy", d=> yScale_stacked(d.obs_region.split("_").join(" ").split("and").join("&")))
                .attr("r", 0)
                .call(enter =>
                    enter
                    .transition()
                    //.delay(d=>xScale_stacked(d.year)*0.63*delayFactor)
                    .duration(500)
                    .attr("r", d=> circScale(d.mentions))),
            exit =>
                exit
                .call(exit =>
                    exit
                    .transition()
                    .duration(750)
                    .attr("r",0))
        );
                        
}

function sortTrends(trendType) {
    state.sortStyle = trendType;
    let filteredData = state.queryData;
    filteredData = filteredData.filter(d => d.obs_region === state.selectedRegion);

    if (trendType === "AZ") {
        state.sortType = "AZ"
        state.sorted_vals = filteredData.sort(function(a,b) 
        {return d3.ascending(a["term"],b["term"]);})
        
        //drawPlot();

    }

    else if (trendType === "high_low") {
        state.sortType = "high_low"
        // sort the date to show increases atop, and decreases below
        state.sorted_vals = filteredData.sort(function(a,b) 
            {return d3.descending(a[state.selectedYear2]-a[state.selectedYear1], 
                                    b[state.selectedYear2]-b[state.selectedYear1]);});
        //drawPlot();
    }

    else if (trendType === "descending") {
        state.sortType = "descending"
        state.sorted_vals = filteredData.sort(function(a,b) 
             {return d3.descending(a[state.selectedYear2],b[state.selectedYear2]);});
    
         //drawPlot();
        
    }

    else if (trendType === "ascending") {
        state.sortType = "ascending"
        state.sorted_vals = filteredData.sort(function(a,b) 
        {return d3.ascending(a[state.selectedYear2],b[state.selectedYear2]);});
    }

};

// i'm not sure whether this is decidable through inequalites?
// there's gotta be a better way to do this.
function leg_click(d) { 
    /*if (d3.select(this).attr("active") === "true") { 
        d3.select(this).attr("active","false").attr("stroke","none")
    }
    else if (d3.select(this).attr("active") === "false") {
        d3.select(this).attr("active","true")
        .attr("stroke","black")
        .attr("stroke-width",2);} */

    var y = Number(d3.select(this).attr("id").split("_")[1])
    if (y === 2016 && state.selectedYear1 !== 2016) {
        d3.select("#dot_"+String(state.selectedYear1)).attr("active","false").attr("stroke","none");
        d3.select(this).attr("active","true")
            .attr("stroke","black")
            .attr("stroke-width",2)
        state.selectedYear1 = y;
        selectYear1.property("value",y);
    }
    else if (y === 2019 && state.selectedYear2 !== 2019) {
        d3.select("#dot_"+String(state.selectedYear2)).attr("active","false").attr("stroke","none");
        d3.select(this).attr("active","true")
            .attr("stroke","black")
            .attr("stroke-width",2)
        state.selectedYear2 = y;
        selectYear2.property("value",y);
    }
    else if (y===2017) {
        if (state.selectedYear1 < y) {
            d3.select("#dot_"+String(state.selectedYear2)).attr("active","false").attr("stroke","none");
            d3.select(this).attr("active","true")
                .attr("stroke","black")
                .attr("stroke-width",2)
            state.selectedYear2 = y;
            selectYear2.property("value",y);
        }
        else {
            d3.select("#dot_"+String(state.selectedYear1)).attr("active","false").attr("stroke","none");
            d3.select(this).attr("active","true")
                .attr("stroke","black")
                .attr("stroke-width",2)
            state.selectedYear1 = y;
            selectYear1.property("value",y);
        }
    }
    else if (y===2018) {
            if (state.selectedYear2 > y ) {
                d3.select("#dot_"+String(state.selectedYear1)).attr("active","false").attr("stroke","none");
                d3.select(this).attr("active","true")
                    .attr("stroke","black")
                    .attr("stroke-width",2)
                state.selectedYear1 = y;
                selectYear1.property("value",y);
            }
            else {
                d3.select("#dot_"+String(state.selectedYear2)).attr("active","false").attr("stroke","none");
                d3.select(this).attr("active","true")
                    .attr("stroke","black")
                    .attr("stroke-width",2)
                state.selectedYear2 = y;
                selectYear2.property("value",y);
            }
    };

};

