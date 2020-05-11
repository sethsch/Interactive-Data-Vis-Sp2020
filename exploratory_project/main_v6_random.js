
// set the dimensions and margins of the main dot plot graph
const width = window.innerWidth * 0.6,
  height = window.innerHeight * 0.8,
  margin = { top: 20, bottom: 20, left: 220, right: 40 },
  radius = 4.5;
  default_selection = "Global";
  default_year1 = 2016;
  default_year2 = 2019;

// set the dimensions for the secondary dot plot for mentions
const plot2_width = window.innerWidth * 0.3,
plot2_height = window.innerHeight * 0.3,
plot2_margins = { top: 20, bottom: 20, left: 20, right: 20 };

// declare some globals that will be used, for the main plot 
let dot_plot;
let xScale;
let yScale;
let yConfig;

// declare globals that will be used for the secondary plot
let mentionDot_plot;
let mentionDot_plot_area;
let xScale_mentionDot;
let yScale_mentionDot;
let circScale;

// declare globals for the tooltip and the collocations table
let tooltip;
let table;
let thead;
let tcolhead;
let tbody;


// a function to be used for rounding percentages in the 
var rd_perc = d3.format(".1%");

// a constant used for scaling which trends to show more boldly
const thresh = 0.025;

// a constant to be used for deciding how many terms to show in the table, maximum
const numberKwic = 20;

 /* APPLICATION STATE
 * */
let state = {
    queryData: [],
    kwicData: [],
    regTotals: [],
    mentTotals: [],
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
// colors coded to years
const color = {2016:"#cc2f56",
            2017: "#7dcc2e",
            2018: "#cc7d2e",
            2019:"#2fbccc"};


  
  /**
   * LOAD DATA
   * */
Promise.all([
    d3.csv("../data/RANDOMfiltered_querystats.csv", d3.autoType),
    d3.json("../data/RANDOMkwic_keywords.json"),
    d3.csv("../data/regions_years_num_records.csv",d3.autoType),
    d3.csv("../data/RANDOMregyear_termMents.csv",d3.autoType),
]).then(([queryStats,kwicStats,regTotals,mentTotals]) => {
    state.queryData = queryStats;
    state.kwicData = kwicStats;
    state.regTotals = regTotals;
    state.mentTotals = mentTotals;
    console.log("state:",state);
    init();
});



function init() {
////////////////////////////////
// Creating UI elements
///////////////////////////////

    // Defining a div for the tooltip
    tooltip = d3.select("body").append("div")	
    .attr("class", "tooltip")				
    .style("opacity", 0);


    //create the regions dropdown menu
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
    .text(d => d.split("_").join(" ")); // the multi-word strings have underscores to mitigate issues, need to be cleaned for formatting

    selectReg.property("value",default_selection);  // this ensures that the selected value is the same as what we have in state when we initialize the options
    
    // create the Year 1 dropdown menu
    const selectYear1 = d3.select("#dropdown_y1").on("change",function() {
        console.log("new year 1 variable is: ",this.value);
        state.prevYear1 = state.selectedYear1;
        console.log("previous year 1 value was: ", state.prevYear1);
        state.selectedYear1 = this.value;
      });

    selectYear1.property("value",default_year1);
    
    let year1_vals = [2016,2017,2018] // this will include all but the highest year, since year 2 has to be bigger
    
    selectYear1
    .selectAll("option")
    .data(year1_vals) 
    .join("option")
    .attr("value", d => d)
    .text(d => d);

    // create the Year 2 dropdown menu 
    const selectYear2 = d3.select("#dropdown_y2").on("change",function() {
        console.log("new year 2 variable is: ",this.value);
        state.prevYear2 = state.selectedYear2;
        console.log("last year 2 value was: ",state.prevYear2);
        state.selectedYear2 = this.value;
      });
    
    let year2_vals = [2016,2017,2018,2019] // the year 2 dropdown needs to exclude the year 1 value
    year2_vals = year2_vals.filter( d=> d > state.selectedYear1) // this should move to draw...?
    
    selectYear2
    .selectAll("option")
    .data(year2_vals) 
    .join("option")
    .attr("value", d => d)
    .text(d => d);

    selectYear2.property("value",default_year2);

///////////////////////////////////////    
// Initialize the plots and table
///////////////////////////////////////    

  ///////////////////////////////    
  // intitialize the main plot
    dot_plot = d3
    .select("#plot_1")
    .append("svg")
    .attr("width", width)
    .attr("height", height);

  // Add X axis
    xScale = d3.scaleLinear()
        .domain([0, 0.7]) 
        .rangeRound([margin.left, width - margin.right]);

    dot_plot.append("g")
        .attr("transform", `translate(0,${margin.top})`)
        .call(d3.axisTop(xScale).ticks(5, "%"))
        .call(g => g.selectAll(".tick line").clone().attr("stroke-opacity", 0.1).attr("y2", height - margin.bottom))
        .call(g => g.selectAll(".domain").remove());

    /////////////////////////////////////////////////  
    // Set up the collocations table and its header
    table = d3.select("#d3-table");
    thead = table.append("thead");
    thead
        .append("tr")
        .append("th")
        .attr("colspan", "4")
        .attr("class","term_header")
        .text(state.hover.term); // this will get updated later, but is created here

    thead
    .append("tr")
    .append("th")
    .attr("colspan","4")
    .attr("class","table_subtitle")
    .text("paragaph-level collocations"); // a subtitle: need to check the script that generated the keywords-in-context... sent or paragraph level?

    thead
        .append("tr")
        .attr("id","col-id")
        .selectAll("th")
        .data(["   "+String(state.selectedYear1)+"   ","%","   "+String(state.selectedYear2)+"   ","%"])  // the column headers will get updated in draw, start with init's year1/year2  
        .join("td")
        .text(d => d)
        .attr("class","col_header");

    tbody  = table.append("tbody").attr("class","table-body");

//////////////////////////////////// 
///// Set up the scales for the secondary dot plot, showing distribution of keyword mentions
    mentionDot_plot = d3
    .select("#plot_2")
    .append("svg")
    .attr("width", plot2_width)
    .attr("height", plot2_height);

    // Add y scale
    yScale_mentionDot = d3.scaleBand()
        .domain(state.mentTotals.map(d=> d.obs_region.split("_").join(" ").split("and").join("&")))
        .range([plot2_height-plot2_margins.bottom,plot2_margins.top+10])
        .paddingInner(0.2);

    /// add x scale
    xScale_mentionDot = d3.scaleBand()
        .domain(["",2016,2017,2018,2019,""]) // added extra elements for padding
        .range([ plot2_margins.left, plot2_width - plot2_margins.right])
        .paddingInner(0.2);

    // draw the axes for the dot plot
    mentionDot_plot.append("g")
        .attr("class", "mentionDot_plot_axis--x")
        .attr("transform", `translate(-35, ${plot2_height-plot2_margins.bottom})`)
        .call(d3.axisBottom(xScale_mentionDot))
        .call(g => g.select(".domain").remove())
        .call(g => g.selectAll(".tick").select("line").remove());
    
    const yAxis_mentionDot = d3.axisRight(yScale_mentionDot);   

    mentionDot_plot.append("g")
        .attr("class", "mentionDot_plot_axis--y")
        .attr("transform", `translate(${plot2_margins.left}, -10)`)
        .call(yAxis_mentionDot)
        .call(g => g.select(".domain").remove()) // remove the axis line
        .call(g => g.selectAll(".tick").select("line").remove()); // remove the lines in the ticks

    mentionDot_plot.append("text")
    .attr("transform",`translate(${plot2_width/2-20},${plot2_margins.top})`)
    .style("font","12px sans-serif")
    .style("font-family","Arial Black")
    .style("font-variant","small-caps")
    .text("total mentions"); // adding a title to the plot

    // set up a scale to map to the circle sizes, 
    circScale = d3.scaleSqrt()
        .domain([0,d3.max(state.mentTotals,d=>d.mentions)])
        .range([0,40]);
  

    drawPlot(); // call the draw function for the plot
    drawTable(); // call the draw function for the table

}

// draw the main dot plot
function drawPlot(){
    

     // filter the data for the selected categories
    let filteredData = state.queryData;
    filteredData = filteredData.filter(d => d.obs_region === state.selectedRegion);

    // the terms are sorted with the top upward trends at the top of the axis, the decreasing trends at the bottom 
    let diffs = filteredData.sort(function(a,b) {return d3.descending(a[state.selectedYear2]-a[state.selectedYear1], 
                                                                    b[state.selectedYear2]-b[state.selectedYear1]);});
    console.log("DIFFS",diffs.map(d=>d.term));

    // Y axis parameters -- the scale changes based on the data, so it's in the draw function
    yConfig = ({
        domain: diffs.map(d=>d.term), 
        paddingInner: 0.2, 
        paddingOuter: 0.1, 
        round: false, 
        align: 0, 
        range: [margin.top+10, height - margin.bottom] 
    });
    console.log("YCONFIG",yConfig);

    // setting up a yScale dynamically based on the params above
    yScale = d3.scaleBand()
        .domain(yConfig.domain)
        .range(yConfig.range)
        .paddingInner(yConfig.paddingInner)
        .paddingOuter(yConfig.paddingOuter)
        .align(yConfig.align)
        .round(yConfig.round);


    // setting the plot font and text position
    dot_plot.attr("text-anchor","end").style("font","sans-serif");

    // this maps a line that is drawn between the two series (Year 1 and Year 2) measurement
    const bar = dot_plot
            .selectAll(".bar")
            .data(filteredData)
            .join(
                enter =>
                    enter
                    .append("line")
                    .attr("class","bar")
                    // each element in this plot gets IDs, Term_ID, Y1_Val and Y2_Val so that it can be used / selected in mouseover
                    .attr("id",d=> d.term+String(state.selectedRegion)+String(state.selectedYear1)+String(state.selectedYear2))
                    .attr("term_id", d=>d.term)
                    .attr("y1_val", d=>d[state.selectedYear1])
                    .attr("y2_val", d=>d[state.selectedYear2])
                    .attr("stroke", "#686868")
                    .attr("stroke-dasharray", d => {
                            const totalLength = Math.abs(xScale(d[state.selectedYear2]) - xScale(d[state.selectedYear1]));
                            return totalLength + " " + totalLength;
                    })
                    .attr("stroke-dashoffset", d => {
                        const totalLength = (xScale(d[state.selectedYear2]) - xScale(d[state.selectedYear1]));
                        return totalLength;
                    })
                    // if the trend was upward, the line will be drawn from left to right, if downward, right to left
                    .attr("x1", d => {
                        if (d[state.selectedYear2] > d[state.selectedYear1]) return xScale(d[state.selectedYear1])+radius/2.75;
                        else return xScale(d[state.selectedYear2])+radius/2.75;
                    })
                    .attr("x2", d => {
                        if (d[state.selectedYear2] > d[state.selectedYear1]) return xScale(d[state.selectedYear2])-radius/2.75;
                        else return xScale(d[state.selectedYear1])-radius/2.75;
                    })
                    .attr("stroke-opacity", d => Math.abs(d[state.selectedYear2]-d[state.selectedYear1]) > thresh ? 1:0.2 )
                    .attr("stroke-width", d => Math.abs(d[state.selectedYear2]-d[state.selectedYear1]) > thresh ? 2.5:1)
                    .attr("transform", (d, i) => `translate(0,${yScale(d.term)})`)
                    .call(enter =>
                        enter
                        .transition()
                        .delay(d=>yScale(d.term)*2.2)
                        .duration(1250)
                        .attr("stroke-dashoffset",0)
                    ),
                update => 
                    update
                    .attr("id",d=> d.term+String(state.selectedRegion)+String(state.selectedYear1)+String(state.selectedYear2))
                    .attr("term_id", d=>d.term)
                    .attr("y1_val", d=>d[state.selectedYear1])
                    .attr("y2_val", d=>d[state.selectedYear2])
                    .attr("stroke-dashoffset",1)
                    .attr("stroke-opacity", d => Math.abs(d[state.selectedYear2]-d[state.selectedYear1]) > thresh ? 1:0.2 )
                    .attr("stroke-width", d => Math.abs(d[state.selectedYear2]-d[state.selectedYear1]) > thresh ? 2.5:1)
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
                        .delay(d=>yScale(d.term)*2.2)
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

                        
    // Draw the first dot for the series
    const dot1 = dot_plot.selectAll(".dot1")
            .data(filteredData)
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
                        .delay(d => yScale(d.term)*2.2)
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
                        .delay(d => yScale(d.term)*2.2)
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
                        // Need to cross-check later, as it seems they've removed but that the KWIC dataset isn't totally inclusive...
                        // some issues are between lemmatized and corrected instances of "medium" --> "media"
                        .attr("cy", height+40)
                        .call(exit =>
                            exit
                            .transition()
                            .delay(d => yScale(d.term)*1.4)
                            .duration(750)
                            .attr("opacity", 0.1)
                            .attr("r", 0)
                            .remove())
            )
            .on('mouseover', synchronizedMouseOver)
            .on("mouseout", synchronizedMouseOut);

    // Draw the second dot for the series
    const dot2 = dot_plot.selectAll(".dot2")
            .data(filteredData)
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
                        .delay(d => yScale(d.term)*2.2)
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
                        .delay(d => yScale(d.term)*2.2)
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
                            .delay(d => yScale(d.term)*1.4)
                            .duration(750)
                            .attr("opacity", 0.1)
                            .attr("r", 0)
                            .remove())
            )
            .on('mouseover', synchronizedMouseOver)
            .on("mouseout", synchronizedMouseOut);

    // draw the term label
    const label = dot_plot.selectAll(".row-label")
                    .data(filteredData)
                    .join(
                        enter =>
                        enter
                            .append("text")
                            .attr("class","row-label")
                            .text((d, i) => (d.term)) // re-formatting
                            //.text((d, i) => (d.term).split('_').join(' ')) // re-formatting
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
                                .delay(d => yScale(d.term)*2.2)
                                .duration(1000)
                                .attr('font-size', '11px')
                                ),
                        update => 
                            update
                            .text((d, i) => (d.term)) // re-formatting
                            //.text((d, i) => (d.term).split('_').join(' '))
                            .attr("class", "row-label")
                            .attr("term_id", d=> d.term)
                            .attr("y1_val", d=>d[state.selectedYear1])
                            .attr("y2_val", d=>d[state.selectedYear2])
                            // i'd like for the transition to look better, to have the terms appear to shuffle more... 
                            .attr("y", d=>yScale(d.term))
                            .attr('fontsize','0px')
                            .attr("id", d=> d.term+"_rank"+String(state.selectedRegion)+String(state.selectedYear1)+String(state.selectedYear2))
                            .call(update =>
                                update
                                .transition()
                                .delay(d=>yScale(d.term)*2)
                                .attr("y", d=>yScale(d.term))
                                .duration(1000)
                                .attr('font-size','11px')
                                ),
                        exit => exit
                            // rightnow these are getting hidden instead of removed....
                            // why do certain entries not remove?
                            .attr("y", height+40)
                            .call(exit =>
                            exit
                            .transition()
                            .delay(d=>yScale(d.term)*1.4)
                            .duration(500)
                            .remove())
                    )
                    .on('mouseover', synchronizedMouseOver)
                    .on("mouseout", synchronizedMouseOut);
    
};

// a function for a synchronized mouseover, so that all elements on each row show hover effects
function synchronizedMouseOver(d) {
    
    // if the bar is selected
    var bar_select = d3.select(this)
        .attr("stroke-width",3.5);
    
    // if the text was selected    
    var text_select = d3.select(this)
        .style("font-size","15px")
        .style("font-weight","bold");

    // if a dot1 was selected    
    var dot1_select = d3.select(this)
        .attr("r", radius*1.3);

    // if a dot 2 was selected
    var dot2_select = d3.select(this)
        .attr("r",radius*1.3);

    // the bar responds...
    var bar_resp = d3.select("#"+d.term+String(state.selectedRegion)+String(state.selectedYear1)+String(state.selectedYear2))
        .attr("stroke-width",3.5);

    // the text responds...
    var text_resp = d3.select("#"+ d.term+"_rank"+String(state.selectedRegion)+String(state.selectedYear1)+String(state.selectedYear2))
        .style("font-size","15px")
        .style("font-weight","bold");

    // the dot 1 repsonse...    
    var dot1_resp = d3.select("#"+d.term+"_"+String(state.selectedRegion)+String(state.selectedYear1))
        .attr("r",radius*1.3);

    // the dot 2 response...
    var dot2_resp = d3.select("#"+d.term+"_"+String(state.selectedRegion)+String(state.selectedYear2))
        .attr("r",radius*1.3);

    // re-establish the state.hover variables....
    state.hover.term = d3.select(this).attr("term_id");
    state.hover.year1_val = rd_perc(d3.select(this).attr("y1_val"));
    state.hover.year2_val = rd_perc(d3.select(this).attr("y2_val"));
    state.hover.toolXpos = xScale(d3.select(this).attr("y2_val"))+100;

    //console.log("selected term: ",state.hover.term,state.hover.year1_val,state.hover.year2_val);

    
    // populate the tooltip, draw the table with keywords-in-context, and the mentions dot plot
    tooltipOver();
    drawTable();
    drawMentDot(); 



};

// a function to synchronize the mouseOut
function synchronizedMouseOut(d) {

    state.hover.term = null;
   
    var bar_select = d3.select(this)
        .attr("stroke-width",d => Math.abs(d[state.selectedYear2]-d[state.selectedYear1]) > thresh ? 2.5:1);
    
    var text_select = d3.select(this)
        .style("font-size","11px")
        .style("font-weight","normal");
    
    var dot1_select = d3.select(this)
        .attr("r", radius);

    var dot2_select = d3.select(this)
        .attr("r", radius);

    var bar_resp = d3.select("#"+d.term+String(state.selectedRegion)+String(state.selectedYear1)+String(state.selectedYear2))
        .attr("stroke-width",d => Math.abs(d[state.selectedYear2]-d[state.selectedYear1]) > thresh ? 2.5:1);
    
    var text_resp = d3.select("#"+ d.term+"_rank"+String(state.selectedRegion)+String(state.selectedYear1)+String(state.selectedYear2))
        .style("font-size","11px")
        .style("font-weight","normal");   
        
    var dot1_resp = d3.select("#"+d.term+"_"+String(state.selectedRegion)+String(state.selectedYear1))
        .attr("r", radius);

    var dot2_resp = d3.select("#"+d.term+"_"+String(state.selectedRegion)+String(state.selectedYear2))
        .attr("r", radius);

    // hide the tooltip, too
    tooltipOut();

};

// to draw the tooltip....
function tooltipOver() {
    
    //show_term = state.hover.term.split("_").join(" "); // show the term selected
    show_term = state.hover.term; // show the term selected

    // get the number of grants in the selected y1/y2 from the regional totals dataset
    let y1Grants = state.regTotals.filter(d=>d.region === state.selectedRegion && d.year === state.selectedYear1); 
    let y2Grants = state.regTotals.filter(d=>d.region === state.selectedRegion && d.year === state.selectedYear2);
    y1Grants = y1Grants[0].num_recs;
    y2Grants = y2Grants[0].num_recs;

    // make the tooltip visible....
    tooltip
    .transition()		
    .duration(400)		
    .style("opacity", .9);	

    // display text for the tooltip
    tooltip
    .html("<strong>"+show_term + "<br/>"  +   
    "<span style='color:" + color[state.selectedYear1] + "'>" +  
    state.selectedYear1 + ": " + state.hover.year1_val + "</span></strong>" + "<span style='font-size:11px'> of "+y1Grants+" grants</span>" +
    "<br/>" +
    "<strong><span style='color:" + color[state.selectedYear2] + "'>" + 
    state.selectedYear2 + ": " + state.hover.year2_val + "</span></strong>" + "<span style='font-size:11px'> of "+y2Grants+" grants</span>"
        )
    // to move with mouse ....   	
    //.style("left", (state.hover.toolXpos) + "px")		
    //.style("top", (d3.event.pageY - 28) + "px");	
    //or, stays in convenient position
    .style("left", xScale(0.6) + "px")
    .style("top", (0.25*height)+"px");

};
// to hide the tooltip...
function tooltipOut() {
	
    tooltip.transition()		
    .duration(600)		
    .style("opacity", 0);	

};
// a function to draw the KWIC table
function drawTable () {

    // grab the kwicData to filter it
    let kwicFiltered = state.kwicData;

    // its a nested json... filter it by region and the hovered over term
    kwicFiltered = kwicFiltered[state.selectedRegion][state.hover.term];
    //console.log(kwicFiltered);

    // call the sort function to get the top terms and values for each year, they'll be shown side by side
    let y1_terms = sortKWIC(kwicFiltered[state.selectedYear1])[0];
    let y1_values = sortKWIC(kwicFiltered[state.selectedYear1])[1];
    let y2_terms = sortKWIC(kwicFiltered[state.selectedYear2])[0];
    let y2_values = sortKWIC(kwicFiltered[state.selectedYear2])[1];

    // each row of the table will have y1term/value, y2term/value
    let table_rowArr = [];
    for (i = 0; i < numberKwic; i++) {
        let y1t = y1_terms[i];
        let y1v = (isNaN(y1_values[i])) ? "": rd_perc(y1_values[i]);
        let y2t = y2_terms[i];
        let y2v = (isNaN(y2_values[i])) ? "": rd_perc(y2_values[i]);

        table_rowArr.push([y1t,y1v,y2t,y2v]) ;
    }



    //console.log("RESULT_1_terms",y1_terms);
    //console.log("RESULT_1_values", y1_values);
    //console.log("TABLEROWARR",table_rowArr);

    // with the hovered term, show it as the table's header
    d3.select(".term_header")
        .data([state.hover.term])
        .join(
            enter =>
            enter
            .text(d=>d)
            //.text(d=>d.split("_").join(" "))
            .style("color","lightgray")
            .call(enter =>
                enter
                .transition()
                .duration(500)
                .style("color","black")),
            update =>
                update
                .text(d=>d)
                //.text(d=>d.split("_").join(" "))
                .style("color","lightgray")
                .call(update =>
                    update
                    .transition()
                    .duration(500)
                    .style("color","black"))
        );

    // if necessary, we'll also update the column headers with the right years... 
    // NOTE: the KWIC data didn't have 2017/2018 data in it, i'll need to re-run it for the final project, but 2016/9 works
    // the colum header changes accurately still, though.    
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

    // create rows in the table for the KWIC terms for the hovered term...            
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

// a function to return teh sorted values for the collocations table
function sortKWIC (kwicYear) {

    // since for each hovered-over target term there may be a variable number of KWIC collocations
    // I thought a JSON was the best way to organize the data, but it was tricky to extract with the right sorting

    // we get the keys for a subset of the data that's one year,
    // and grab the measurement, the % of time the target appeared and the context KWIC occured too
    let terms = d3.keys(kwicYear);

    let sortedvals = [];
    let tuples = [];
    for (i=0; i < terms.length; i++) {
        sortedvals.push(kwicYear[terms[i]]["pct_together"]);
        tuples.push( [ terms[i], kwicYear[terms[i]]["pct_together"]]);
    };
   
    // then we sort in descending order, and order the terms based on the descending order of the measurements
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
    // return the sorted terms and the sorted values
    return [term_result, value_result];
};

// a function to draw the dot plot showing mentions by term by region and year
// NOTE: the main plot shows record frequency (e.g. % of records where the term was mentinoed in the description at least once)
// since we can only view one region at a time, I thought it would be a good idea to have a plot that shows the "cross-region"
// perspective and also contextualizes RELATIVELY how often a term was mentioned by region and compared to others,
// this way a viewer has something of the cross-region perspectie as they browse regions...

function drawMentDot () {
    let stackedFiltered = state.mentTotals;
    // filter the data to show the data for the hovered term
    stackedFiltered = stackedFiltered.filter(d => d.term === state.hover.term);
    console.log("STACK FILT", stackedFiltered);

    // add the dots to the plot
    var ment_dots = mentionDot_plot
        .selectAll(".ment-dot")
        .data(stackedFiltered,d=>[d.mentions,d.obs_region,d.year,d.term])
        .join(enter =>
                enter
                .append("circle")
                .attr("class","ment-dot")
                .attr("id",d=>d.term+d.obs_region)
                .attr("cx", d => xScale_mentionDot(d.year))
                .attr("fill", d=>color[d.year])
                .attr("opacity",function (d) {
                    if (d.obs_region === state.selectedRegion) return 1;
                    else return 0.25;})
                .attr("cy", d=> yScale_mentionDot(d.obs_region.split("_").join(" ").split("and").join("&")))
                .attr("r", 0)
                .call(enter =>
                    enter
                    .transition()
                    //.delay(d=>xScale_mentionDot(d.year)*1.4)
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