// set the dimensions for the secondary dot plot for mentions
const width = window.innerWidth * 0.7,
height = window.innerHeight * 0.7,
margins = { top: 40, bottom: 60, left: 120, right: 40 };

// declare globals that will be used for the secondary plot
let mentionDot_plot;
let mentionDot_plot_area;
let xScale_mentionDot;
let yScale_mentionDot;



 /* APPLICATION STATE
 * */
let logState = {
  casesData: [],
  casesLookup: {},
  currentCases: 0,
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
  d3.csv("./total-deaths-and-cases-covid-19.csv",d3.autoType),
  d3.json("./ALL_countries_covid_v5.json", d3.autotype),
]).then(([casesData,countrydata]) => {
  logState.casesData = casesData;
  logState.countrydata = countrydata;
  console.log("logState:",logState);
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

logState.selectedPolicyTypes = Object.keys(logColors);


function init () {

  mentionDot_plot = d3
    .select("#log_scale_plot")
    .append("svg")
    .attr("width", width)
    .attr("height", height);

  /*mentionDot_plot.append("text")
    .attr("transform",`translate(${width/2-20},${margins.top-20})`)
    .style("font","16px sans-serif")
    .style("font-family","Avenir")
    .text("Beginning of new policies"); // adding a title to the plot*/

    // set up a scale to map to the circle sizes, 
    //circScale = d3.scaleSqrt()
    //    .domain([0,d3.max(logState.mentTotals,d=>d.mentions)])
    //    .range([0,40]);



  createWorldCasesLookup();
  //console.log("LOOKUP CASES BY DATE:",logState.casesLookup);
  var parser = d3.timeParse("%Y-%m-%d");
  var start = parser("2020-02-12");
  var cases = logState.casesLookup[start].Cases;
  
  drawPlot();
  //console.log("START",start,"CASES PARSER",cases,"YSCALE",yScale_mentionDot(cases));

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
   

  var parser = d3.timeParse("%Y-%m-%d");
  var lookupdates = Object.keys(logState.casesLookup);
  console.log("DATEA",lookupdates);
  var data_dates = [];
  for (i=0; i<unpackedData.length; i++) {
    data_dates.push(String(parser(unpackedData[i]["date_start"])))
  };
  //console.log("DATADATES",data_dates);
  unpackedData = unpackedData.filter(d => lookupdates.includes(String(parser(d["date_start"])) ));
  //console.log("DID WE FILTER?",unpackedData);



  // Add y scale for days since first annoucnement... this is always at 0
yScale_mentionDot = d3.scaleLog()
  .domain([10,3500000])
  .range([height-margins.bottom,margins.top]);

/// add x scale
xScale_mentionDot = d3.scaleLinear()
  .domain([d3.min(days_since_first_case),d3.max(days_since_first_case)]) // added extra elements for padding
  .range([ margins.left, width - margins.right]);

// draw the axes for the dot plot
mentionDot_plot.append("g")
  .attr("class", "mentionDot_plot_axis--x")
  .attr("transform", `translate(0, ${height-margins.bottom})`)
  .call(d3.axisBottom(xScale_mentionDot))

mentionDot_plot.append("text")
  .attr("class","x-axis-title")
  .attr("transform",`translate(${width/2},${height-20})`)
  .style("font","12px sans-serif")
  .style("font-weight","bold")
  .style("font-family","Avenir")
  .text("days since first confirmed case");
  //.call(g => g.select(".domain").remove())
  //.call(g => g.selectAll(".tick").select("line").remove());

const yAxis_mentionDot = d3.axisLeft(yScale_mentionDot).ticks(7,",d").tickSize(6,3);   

mentionDot_plot.append("g")
  .attr("class", "mentionDot_plot_axis--y")
  .attr("transform", `translate(${margins.left}, 0)`)
  .call(yAxis_mentionDot)
  //.call(g => g.select(".domain").remove()) // remove the axis line
  //.call(g => g.selectAll(".tick").select("line").remove()); // remove the lines in the ticks

mentionDot_plot.append("text")
  .attr("class","y-axis-title")
  .attr("transform",`translate(${margins.left-80},${height*0.6})rotate(270)`)
  .style("font","12px sans-serif")
  .style("font-weight","bold")
  .style("font-family","Avenir")
  .text("Log scale of confirmed cases worldwide");

// a rectangle with updated number



var ptag =  mentionDot_plot.append("text")
.attr("class","cases-ticker")
.attr("transform",`translate(${xScale_mentionDot(80)},${yScale_mentionDot(5000)})`)

ptag.transition()
  .ease(d3.easeLinear)
  .duration(12000)
  .tween("text", function(d) {
    var that = this;
    var i = d3.interpolate(0, 3500000);  // Number(d.percentage.slice(0, -1))
    return function(t) {
        d3.select(that).text(i(t));
    };
  })

  // add the dots to the plot
  var ment_dots = mentionDot_plot
      .selectAll(".event")
      .data(unpackedData)
      .join(enter =>
        enter
        .append("circle")
        .attr("class","event")
        .attr("id", (d,i) =>String(d.policy_id)+"_"+String(d.record_id))
        //.attr("fill", function(d,i) { if (logState.selectedPolicyTypes.includes(d.event_type)) {return logColors[d["event_type"]];}
        //  else if (d["days_since_first_case"] <= -30) {return "#E3D34D";}
        //  else if (d["days_since_first_case"] <= 0 && d["days_since_first_case"] > -30) {return "#FFC300";}
        //  else if (d["days_since_first_case"] > 0) {return "#E3584D";}
        //})
        .attr("fill","#7C7B7B")
        .attr("opacity", function(d,i) { if (logState.selectedPolicyTypes.includes(d.event_type)) {return 0.9;}
        else {return 0.5;}
        })
        .attr("r", 0)
        .attr("cx", (d,i) => xScale_mentionDot(d["days_since_first_case"]))
        .attr("cy", function(d,i) { 
          var parser = d3.timeParse("%Y-%m-%d");
          var start = parser(d.date_start);
          var cases = logState.casesLookup[start].Cases;
          return yScale_mentionDot(cases);
        })
        .call(enter =>
          enter
          .transition()
          .duration(12000)
          .delay(function(d) {return lookupdates.indexOf(String(parser(d.date_start)))*50;} )
          .attr("r", function(d,i) { if (logState.selectedPolicyTypes.includes(d.event_type)) {return 7;}
            else {return 3.5;}
          })
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
            .attr("opacity", function(d,i) { if (logState.selectedPolicyTypes.includes(d.event_type)) {return 0.9;}
            else {return 0.25;}
            })
      )
      );
      
  ment_dots.on("mouseover",tipMouseover).on("mouseout",tipMouseout);    
  

  
}

d3.selectAll(".myCheckbox").on("change",updateTypes);
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
    //console.log("SELECTED POLICIES: ",logState.selectedPolicyTypes);
    };

function createWorldCasesLookup(){
  logState.casesData = logState.casesData.filter(d=>d.Entity === "World");
  //console.log("CASES WORLD",logState.casesData);

  var parser = d3.timeParse("%d-%b-%y");

  //date format needs to be "2020-2-24" to match policy data
  for(var i = 0; i < logState.casesData.length; i++){
    // obj = Object
    var key = parser(logState.casesData[i]["Date"]);
    var cases = logState.casesData[i]["Total confirmed cases (cases)"];
    let deaths =logState.casesData[i]["Total confirmed deaths (deaths)"];
    if (deaths === null) {deaths = 0;};
    logState.casesLookup[key] = {"Cases" : cases, "Deaths": deaths};

  };
  
};

    
var tooltip = d3.select("#log_scale_plot").append("div")
.attr("class", "tooltip")
.style("opacity", 0);

// tooltip mouseover event handler
var tipMouseover = function(d) {
    var date_end_clean = "Not yet specified";
    if (String(d.date_end) !== "nan-nan-nan"){
        date_end_clean = d.date_end;
    }
    var compliance_clean = "Not specified";
    if (String(d.compliance) !== "null"){
        compliance_clean = d.compliance;
    }
    var html  =  "<b>" + d.country + "</b><br/>" +
                "<b> Days since first case: </b>"+d.days_since_first_case + "<br/>"+
                "<b> Days since first policy: </b>"+d.days_since_policies_began + "<br/>"+
                "<b> Date start: </b>"+d.date_start + "<b> Date end: </b>" + date_end_clean + "<br/>"+
                d.event_description + "<br/>"+ "<b> Compliance: </b>"+compliance_clean +
                "<br/><b> Enforcer: </b>"+d.enforcer 

    tooltip.html(html)
        .style("left", (d3.event.pageX + 15) + "px")
        .style("top", (d3.event.pageY - 28) + "px")
      .transition()
        .duration(400) // ms
        .style("opacity", .9) // started as 0!

};
// tooltip mouseout event handler
var tipMouseout = function(d) {
    tooltip.transition()
        .duration(300) // ms
        .style("opacity", 0); // don't care about position!
};