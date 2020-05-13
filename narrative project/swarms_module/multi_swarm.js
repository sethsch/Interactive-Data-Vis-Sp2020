//Defining the margin conventions
var margin = {top: 50, right: 30, bottom: 50, left: 100},
      width = 1000 - margin.left - margin.right,
      height = 800 - margin.top - margin.bottom;

let svg;
let x;
let y;
let area;
let xScale;
let yScale;
let areaScale;
let colorScale;
let xValue;
let yValue;
let rValue;
let colorValue;
let xAxis;
let yAxis;
let bubbleChart;


/* APPLICATION STATE
 * */
let state = {
    timedata: [],
    countrydata: [],
    unpackedData: [],
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
/**
 * LOAD DATA
 * */
Promise.all([
    d3.csv("./timelinesample.csv",d3.autoType),
    d3.json("./ALL_countries_covid_v3.json", d3.autotype),
  ]).then(([timesample,countrydata]) => {
    state.timedata = timesample;
    state.countrydata = countrydata;
    console.log("state:",state);
    //console.log(state.timedata.map(d=>d.type));
    console.log("BOLIVIA: ",state.countrydata["Bolivia"]);
    init();
  });
 
  
  let colors =  {'Closure of Schools': "#a1def0",
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
  
state.selectedPolicyTypes = colors.keys;


function init() {

    /// setup the data
    x = function(d) { return d["days_since_first_case"]; };
    y = function(d) { return d["event_type"]; };
    area = function(d) { return d["population"]; };

    //X scale
    xScale = d3.scaleLinear().domain([d3.min(state.unpackedData,d=>d["days_since_first_case"]), d3.max(state.unpackedData,d=>d["days_since_first_case"])])
                .range([0, width]);

    //Y scale
    yScale = d3.scaleBand()
                .domain([colors.keys])
                .range([height, 0]);

    //Size sclae
    areaScale = d3.scaleLinear()
                .range([0, 125]);
    

    //Saving the apllied x scale in a variable  
    xValue = function(d) { return xScale(x(d)); };
    
    //Saving the apllied y scale in a variable  
    yValue = function(d) { return yScale(y(d)) + yScale.scaleBand()/2; };

    //Saving the apllied x scale in a variable  
    rValue = function(d) {
                var A = areaScale(area(d));
                return Math.sqrt(A / Math.PI);};
    
    //Saving the apllied x scale in a variable  
    colorValue = function(d) { return colorScale(x(d)); };
    
    let subdata = state.unpackedData.filter(d=>d.event_type==="Health Testing");
    drawChart(subdata);


}


/*function drawSwarms() {
    

    //Domain scale 
    areaScale.domain([0,d3.max(state.unpackedData, area)]);
        
    //Draw x axes
    svg.append("g")
    .attr("class", "x-axis ")
    .attr("transform", "translate(0," + height + ")")
    .call(xAxis)
    .append("text")
    .attr("dx", width)
    .attr("dy", -6)
    .style("text-anchor", "end")
    .text("Days since first confirmed case");

    //Draw y axes
    svg.append("g")
    .attr("class", "y-axis ")
    .call(yAxis)
    .selectAll(".tick line")
    .attr("x2", width)
    .attr("stroke-dasharray", "1, 2");
    
    // Draw legend
    svg.append("g")
    .call(legend);
       
    //Draw bubbles
    svg.append("g")
    .call(bubbleChart, state.unpackedData)
    .attr("class", "bubbles")
    .selectAll(".node")
    .append("circle")
    .attr("r", function(d) { return d.r0; })
    .attr("fill", colorValue);

};



       
  
//Creating a legend 
function legend(selection) {
         
var legendData = [
           { budget: 200000000, text: "$200 million", dy: 0 },
           { budget: 100000000, text: "$100 million", dy: 20 },
           { budget: 50000000, text: "$50 million", dy: 40 },
           { budget: 10000000, text: "$10 million", dy: 60 }
         ];
         
var legend = selection
            .attr("class", "legend")
            .attr("transform", "translate(" + xScale(9.4) + "," + (0) + ")")
         
legend.append("text")
      .attr("dx", -6)
      .attr("dy", -25)
      .text("Budget");
          
legend.selectAll(".item")
      .data(legendData)
      .enter()
      .append("g")
      .attr("transform", function(d) { return "translate(0," + d.dy + ")"; })
      .each(function(d) {
       d3.select(this)
         .append("circle")
         .attr("class", "legend circle")
         .attr("r", rValue(d));
       d3.select(this)
         .append("text")
         .attr("dx", 10)
         .attr("dy", 4)
         .text(d.text);
       });
} */

function drawChart() {

    let filteredData = state.countrydata;

    if (state.selectedCountry !== "All") {
      filteredData = filteredData[state.selectedCountry];
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

    let svg = d3
        .select("#plot_1")
        .append("svg")
        .attr("width", width)
        .attr("height", height);
    
    let simulation = d3.forceSimulation(unpackedData)
    .force('charge', d3.forceManyBody().strength(1))
    .force('x', d3.forceX().x(function(d) {
      return xScale(d.Margin);
    }))
    .force("y", d3.forceY(height / 2).strength(0.05))
    .force('collision', d3.forceCollide().radius(6))
    .on('tick', function() {
      let u = svg.selectAll('circle')
      .data(unpackedData);
  
      u.enter()
        .append('circle')
        .attr('r', 6)
        .style('fill', function(d) {
          if (d.Support3 == "Yes") {
            return "#3ebcd2";
          } else if (d.Support3 =="No") {
            return "#e2e2e2";
          }
        })
        .merge(u)
        .attr('cx', function(d) {
          return d.x;
        })
        .attr('cy', function(d) {
          return d.y;
        })
  
        u.exit().remove();
      });
    
    svg.append("g")
        .call(d3.axisBottom(xScale));
    
  };
