
// set the dimensions and margins of the graph
const width = window.innerWidth * 0.5,
  height = window.innerHeight * 0.9,
  margin = { top: 20, bottom: 20, left: 160, right: 40 },
  radius = 4.5;
  default_selection = "Global";

let svg;
let xScale;
let yScale;
let yConfig;

// a constant used for scaling which trends to show more boldly
var thresh = 0.05;




 /* APPLICATION STATE
 * */
let state = {
    data: [],
    selectedRegion: "Global",
    selectedYear1: 2016,
    selectedYear2: 2019,
  };

const color = {2016:"#cc2f56",
            2017: "#7dcc2e",
            2018: "	#cc2e7d",
            2019:"#2fbccc"};
  
  
  /**
   * LOAD DATA
   * */
  d3.csv("./data/filtered_querystats.csv", d3.autoType).then(raw_data => {
    console.log("raw_data", raw_data);
    state.data = raw_data;
    init();
  });




function init() {
// append the svg object to the body of the page

    //create teh reginos dropdown
    const selectReg = d3.select("#dropdown_reg").on("change",function() {
        console.log("new selected Region variable is",this.value);
        state.selectedRegion = this.value;
      });
    
    let regions = new Set(d3.map(state.data,function(d){return d.obs_region;}).keys());
    
    selectReg
    .selectAll("option")
    .data(Array.from(regions)) // unique data values-- (hint: to do this programmatically take a look `Sets`)
    .join("option")
    .attr("value", d => d)
    .text(d => d);

    selectReg.property("value",default_selection);  // this ensures that the selected value is the same as what we have in state when we initialize the options
    
    
    // create the Year 1 dropdown
    const selectYear1 = d3.select("#dropdown_y1").on("change",function() {
        console.log("new year 1 variable is: ",this.value);
        state.selectedYear1 = this.value;
      });
    
    let year1_vals = [2016,2017,2018]
    
    selectYear1
    .selectAll("option")
    .data(year1_vals) // unique data values-- (hint: to do this programmatically take a look `Sets`)
    .join("option")
    .attr("value", d => d)
    .text(d => d);

  // intitialize the plot svg
    svg = d3
    .select("#plot_1")
    .append("svg")
    .attr("width", width)
    .attr("height", height);

  // Add X axis
    xScale = d3.scaleLinear()
        .domain([0, 0.7])
        .rangeRound([margin.left, width - margin.right]);

    svg.append("g")
        .attr("transform", `translate(0,${margin.top})`)
        .call(d3.axisTop(xScale).ticks(5, "%"))
        .call(g => g.selectAll(".tick line").clone().attr("stroke-opacity", 0.1).attr("y2", height - margin.bottom))
        .call(g => g.selectAll(".domain").remove());

    draw(); // call the draw function

}

function draw(){
    // the year 2 dropdown needs to exclude the year 1 value, so it's in the draw for now
    // create the Year 1 dropdown
    const selectYear2 = d3.select("#dropdown_y2").on("change",function() {
        console.log("new year 2 variable is: ",this.value);
        state.selectedYear2 = this.value;
      });
    
    let year2_vals = [2016,2017,2018,2019]
    year2_vals = year2_vals.filter( d=> d > state.selectedYear1)
    
    selectYear2
    .selectAll("option")
    .data(year2_vals) // unique data values-- (hint: to do this programmatically take a look `Sets`)
    .join("option")
    .attr("value", d => d)
    .text(d => d);



     // filter the data for the selected categories
let filteredData = state.data;
filteredData = filteredData.filter(d => d.obs_region === state.selectedRegion);

let diffs = filteredData.sort(function(a,b) {return d3.descending(a[state.selectedYear2]-a[state.selectedYear1], 
                                                                    b[state.selectedYear2]-b[state.selectedYear1]);});
console.log(diffs.map(d=>d.term));

// Y axis
  yConfig = ({
    domain: diffs.map(d=>d.term), // 👀 change me!
    paddingInner: 0.5, // 👀 me!
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

// the plot Rows hold the label and dots in a position, 
// this needs to get updated when teh Y axis re-orders, so that the line can be drawn in the right place
// ideally, the line would also get grouped into here... but that's proving tricky...
const plotRow = svg.append("g")
        .attr("text-anchor", "end")
        .style("font", "sans-serif")
    .selectAll("g")
    .data(filteredData)
    .join("g")
    .attr("class","plot-row")
    .attr("term",d=>d.term)
    .attr("region",state.selectedRegion)
    .attr("years", String(state.selectedYear1)+"_"+String(state.selectedYear2))
    .attr("transform", (d, i) => `translate(0,${yScale(d.term)})`);


const bar = plotRow.append("path")
        .select('.line')
        .data(filteredData)
        .join(
            enter =>
                enter
                .append("line")
                .attr("stroke", "#686868")
                .attr("stroke-width",2)
                .attr("class","line")
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
                .attr("transform", (d, i) => `translate(0,${yScale(d.term)})`)
                .call(update => 
                    update
                    .transition()
                    .delay(d=>yScale(d.term)*2.2)
                    .duration(1000)
                    .attr("stroke-dashoffset",0)
                ),
            exit =>
                exit.call(exit => 
                    exit
                    .transition()
                    .delay(d => yScale(d.term)*1.2)
                    .duration(500)
                    .remove()
                    )
        );
                    
// in previous examples, there was a key between data element and dot html element
// does there need to be an id/class attribute for each dot that's = "term+year"?
    const dot = plotRow.append("g")
        .attr("class","dot-pair")
        .selectAll(".dot")
        .data(d => d3.cross([state.selectedYear1,state.selectedYear2], [d]))
        .join(
            enter =>
            enter
                .append("circle")
                .attr("class","dot")
                .attr("cx", ([k, d]) => xScale(d[k]))
                .attr("fill", ([k]) => color[k])
                .attr("r", 0)
                .call(enter =>
                    enter
                    .transition()
                    .delay(250)
                    .duration(100)
                    .attr("r",radius)
                    ),
            update => 
                update
                .attr("cx", ([k, d]) => xScale(d[k]))
                .attr("fill", ([k]) => color[k])
                .attr("transform", (d, i) => `translate(0,${yScale(d.term)})`)
                .attr("r", 0)
                .call(update =>
                    update
                    .transition()
                    .duration(375)
                    .attr("r", radius)
                    ),
            exit =>
                    exit.call(exit =>
                        exit
                        .transition()
                        .delay(d => yScale(d.term))
                        .duration(500)
                        .attr("r", 0)
                        .remove())
        );  

const label = plotRow.append("text")
        .attr("class","label")
        .attr("dy", "0.35em")
        .attr("x", margin.left-4)
        .text((d, i) => d.term)
        .transition()
        .attr('font-size', '0px')
        .duration(250)
        .transition()
        .attr('font-size', '11px')
        .duration(1200);



}

