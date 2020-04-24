// set the dimensions for the secondary dot plot for mentions
const plot2_width = window.innerWidth * 0.7,
plot2_height = window.innerHeight * 0.3,
plot2_margins = { top: 20, bottom: 20, left: 20, right: 20 };

// declare globals that will be used for the secondary plot
let mentionDot_plot;
let mentionDot_plot_area;
let xScale_mentionDot;
let yScale_mentionDot;
let circScale;


 /* APPLICATION STATE
 * */
let state = {
  timedata: [],
  hover: {
      term: null,
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
  d3.csv("./timelinesample.csv",d3.autoType),
]).then(([timesample]) => {
  state.timedata = timesample;
  console.log("state:",state);
  console.log(state.timedata.map(d=>d.type));
  init();
});

let event_types = ["External Border Restrictions", "External Border Restrictions", 
"Health Resources", "Health Testing", "New Task Force or Bureau", 
"New Task Force or Bureau", "New Task Force or Bureau", "Other Policy Not Listed Above", 
"Other Policy Not Listed Above", "Public Awareness Campaigns", 
"Restriction of Non-Essential Businesses", "Restriction of Non-Essential Government Services", 
"Restrictions of Mass Gatherings"];



function init () {
  mentionDot_plot = d3
    .select("#plot_1")
    .append("svg")
    .attr("width", plot2_width)
    .attr("height", plot2_height);

    // Add y scale
    yScale_mentionDot = d3.scaleBand()
        .domain(event_types)
        .range([plot2_height-plot2_margins.bottom,plot2_margins.top+10])
        .paddingInner(0.2);

    /// add x scale
    xScale_mentionDot = d3.scaleLinear()
        .domain([0,100]) // added extra elements for padding
        .range([ plot2_margins.left, plot2_width - plot2_margins.right]);

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
    .text("timeline"); // adding a title to the plot

    // set up a scale to map to the circle sizes, 
    //circScale = d3.scaleSqrt()
    //    .domain([0,d3.max(state.mentTotals,d=>d.mentions)])
    //    .range([0,40]);

    drawMentDot();
}


function drawMentDot () {
  let filteredData = state.timedata;
  // filter the data to show the data for the hovered term

  // add the dots to the plot
  var ment_dots = mentionDot_plot
      .selectAll(".event")
      .data(filteredData,d=>[d.policy_id,d.record_id,d.type,d.event_description,d.day])
      .join("g")
      .append("circle")
        .attr("class","event")
        .attr("id",d=>d.policy_id)
        .attr("cx", d => xScale_mentionDot(d.day))
        .attr("fill", "red")
        .attr("cy", d=> yScale_mentionDot(d.type))
        .attr("r", 7);
    
              
                      
}