// set the dimensions for the secondary dot plot for mentions
const plot2_width = window.innerWidth * 0.7,
plot2_height = window.innerHeight * 0.5,
plot2_margins = { top: 20, bottom: 60, left: 60, right: 20 };

// declare globals that will be used for the secondary plot
let mentionDot_plot;
let mentionDot_plot_area;
let xScale_mentionDot;
let yScale_mentionDot;



 /* APPLICATION STATE
 * */
let logState = {
  timedata: [],
  countrydata: [],
  selectedCountry: "All",
  selectedPolicyTypes: [],
  hover: {
      term: null,
      year1_val: null,
      year2_val: null,
      toolXpos: null,
    },
};




/**
 * LOAD DATA
 * */
Promise.all([
  d3.csv("./timelinesample.csv",d3.autoType),
  d3.json("./ALL_countries_covid_v5.json", d3.autotype),
]).then(([timesample,countrydata]) => {
  logState.timedata = timesample;
  logState.countrydata = countrydata;
  console.log("logState:",logState);
  console.log(logState.timedata.map(d=>d.type));
  console.log("BOLIVIA: ",logState.countrydata["Bolivia"]);
  init();
});

let logColors =  {'Closure of Schools': "#a1def0",
'Health Testing':"#247672",
'Public Awareness Campaigns': "#2eece6",
'Quarantine/Lockdown':"#545998",
'Curfew':"#92e986",
'Other Policy Not Listed Above':"#1d8a20",
'Social Distancing': "#bfcd8e",
'Health Resources':"#788c3b",
'Declaration of Emergency': "#20f53d", 
'Restriction of Non-Essential Government Services':"#a93713",
'Internal Border Restrictions':"#e88358",
'New Task Force or Bureau':"#ec102f",
'Restriction of Non-Essential Businesses': "#f3c011",
'External Border Restrictions':"#74584e",
'Restrictions of Mass Gatherings':  "#f45793",
'Health Monitoring':  "#7244b9"};

logState.selectedPolicyTypes = logColors.keys;


function init () {

  mentionDot_plot = d3
    .select("#log_scale_plot")
    .append("svg")
    .attr("width", plot2_width)
    .attr("height", plot2_height);

  mentionDot_plot.append("text")
    .attr("transform",`translate(${plot2_width/2-20},${plot2_margins.top})`)
    .style("font","16px sans-serif")
    .style("font-family","Avenir")
    .text("Beginning of new policies"); // adding a title to the plot

    // set up a scale to map to the circle sizes, 
    //circScale = d3.scaleSqrt()
    //    .domain([0,d3.max(logState.mentTotals,d=>d.mentions)])
    //    .range([0,40]);

    drawPlot();
}


function drawPlot () {


  let filteredData = logState.countrydata;

  if (logState.selectedCountry !== "All") {
    filteredData = filteredData[logState.selectedCountry];
    var days_since_announcement = [];
    var days_since_first_case = [];
    var unpackedData = [];
    // get the nested days_since features to populate the axes
    Object.keys(filteredData.events).forEach(function(key1) {
      var daily_events = filteredData.events[key1];
      //console.log(value)
      Object.keys(daily_events).forEach(function(key2) {
        var days1 = daily_events[key2]["days_since_first_announcement"];
        var days2 = daily_events[key2]["days_since_first_case"]
        days_since_announcement.push(days1);
        days_since_first_case.push(days2)
        unpackedData.push(daily_events[key2])
      });
    });
  }
  else  {
    var days_since_announcement = [];
    var days_since_first_case = [];
    var unpackedData = [];
    // get the nested days_since features to populate the axes
    Object.keys(filteredData).forEach(function(country) {
      Object.keys(filteredData[country].events).forEach(function(key1) {
        var daily_events = filteredData[country].events[key1];
        //console.log(value)
        Object.keys(daily_events).forEach(function(key2) {
          var days1 = daily_events[key2]["days_since_first_announcement"];
          var days2 = daily_events[key2]["days_since_first_case"]
          days_since_announcement.push(days1);
          days_since_first_case.push(days2);
          unpackedData.push(daily_events[key2]);
        });
      });
    }); 
  };
   

  // Add y scale for days since first annoucnement... this is always at 0
yScale_mentionDot = d3.scaleLinear()
  .domain([d3.min(days_since_announcement),d3.max(days_since_announcement)])
  .range([plot2_height-plot2_margins.bottom,plot2_margins.top+10]);

/// add x scale
xScale_mentionDot = d3.scaleLinear()
  .domain([d3.min(days_since_first_case),d3.max(days_since_first_case)]) // added extra elements for padding
  .range([ plot2_margins.left, plot2_width - plot2_margins.right]);

// draw the axes for the dot plot
mentionDot_plot.append("g")
  .attr("class", "mentionDot_plot_axis--x")
  .attr("transform", `translate(0, ${plot2_height-plot2_margins.bottom})`)
  .call(d3.axisBottom(xScale_mentionDot))

mentionDot_plot.append("text")
  .attr("class","x-axis-title")
  .attr("transform",`translate(${plot2_width/2},${plot2_height-20})`)
  .style("font","12px sans-serif")
  .style("font-weight","bold")
  .style("font-family","Avenir")
  .text("days since first confirmed case");
  //.call(g => g.select(".domain").remove())
  //.call(g => g.selectAll(".tick").select("line").remove());

const yAxis_mentionDot = d3.axisLeft(yScale_mentionDot);   

mentionDot_plot.append("g")
  .attr("class", "mentionDot_plot_axis--y")
  .attr("transform", `translate(${plot2_margins.left}, 0)`)
  .call(yAxis_mentionDot)
  //.call(g => g.select(".domain").remove()) // remove the axis line
  //.call(g => g.selectAll(".tick").select("line").remove()); // remove the lines in the ticks

mentionDot_plot.append("text")
  .attr("class","y-axis-title")
  .attr("transform",`translate(${plot2_margins.left-40},${plot2_height*0.7})rotate(270)`)
  .style("font","12px sans-serif")
  .style("font-weight","bold")
  .style("font-family","Avenir")
  .text("days since first policy announcement");


  // add the dots to the plot
  var ment_dots = mentionDot_plot
      .selectAll(".event")
      .data(unpackedData)
      .join(enter =>
        enter
        .append("circle")
        .attr("class","event")
        .attr("id", (d,i) =>String(d.policy_id)+"_"+String(d.record_id))
        .attr("fill", function(d,i) { if (logState.selectedPolicyTypes.includes(d.event_type)) {return logColors[d["event_type"]];}
          else if (d["days_since_first_case"] <= -30) {return "#E3D34D";}
          else if (d["days_since_first_case"] <= 0 && d["days_since_first_case"] > -30) {return "#FFC300";}
          else if (d["days_since_first_case"] > 0) {return "#E3584D";}
        })
        .attr("opacity", function(d,i) { if (logState.selectedPolicyTypes.includes(d.event_type)) {return 0.8;}
        else {return 0.25;}
        })
        .attr("r", 0)
        .attr("cx",xScale_mentionDot(-100))
        .attr("cy", (d,i)=> yScale_mentionDot(d["days_since_first_announcement"]))
        .call(enter =>
          enter
          .transition()
          .duration(750)
          .attr("cx", (d,i) => xScale_mentionDot(d["days_since_first_case"]))
          .attr("r", function(d,i) { if (logState.selectedPolicyTypes.includes(d.event_type)) {return 7;}
            else {return 3.5;}
          })
          .delay(function(d,i){return xScale_mentionDot(d["days_since_first_case"])*12})
          ),
          update =>
          update
          .call(update=>
            update
            .transition()
            .duration(500)
            .attr("fill", function(d,i) { if (logState.selectedPolicyTypes.includes(d.event_type)) {return logColors[d["event_type"]];}
              else {return "#7C7B7B";}
            })
            .attr("r", function(d,i) { if (logState.selectedPolicyTypes.includes(d.event_type)) {return 7;}
              else {return 3.5;}
            })
            .attr("opacity", function(d,i) { if (logState.selectedPolicyTypes.includes(d.event_type)) {return 0.8;}
            else {return 0.25;}
            })
      )
      );
      




    
              
                      
}

/*d3.selectAll(".myCheckbox").on("change",updateTypes);
    updateTypes();
      
function updateTypes(){
    var choices = [];
    d3.selectAll(".myCheckbox").each(function(d){
          cb = d3.select(this);
          if(cb.property("checked")){
            choices.push(cb.property("value"));
          }
        });
    logState.selectedPolicyTypes = choices;
    console.log("SELECTED POLICIES: ",logState.selectedPolicyTypes);
    };*/