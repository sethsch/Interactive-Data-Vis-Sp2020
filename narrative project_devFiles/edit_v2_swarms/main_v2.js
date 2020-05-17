// set the dimensions for the secondary dot plot for mentions
const width = window.innerWidth * 0.9,
height = window.innerHeight*3,
margins = { top: 80, bottom: 40, left: 120, right: 40 };


// declare globals that will be used for the secondary plot
let swarm;
let swarm_area;
let xScale;
let yScale;
let circScale;
let colorScale;


let yAxis;
let xAxis;
let yAxis_startx=160;
let yAxis_starty=-50;

let selectIndex;

let filteredData;
let regions_lookup = {};

 /* APPLICATION STATE
 * */
let state = {
  timedata: [],
  countrydata: [],
  selectedCountry: "All",
  selectedPolicyTypes: [],
  selectedIndex: "Perceptions of Corruption Index",
  globeData: [],
  hover: {
      term: null,
      year1_val: null,
      year2_val: null,
      toolXpos: null,
    },
};

let defaultIndex = "Perceptions of Corruption Index";

/**
 * LOAD DATA
 * */
Promise.all([
  d3.csv("./timelinesample.csv",d3.autoType),
  d3.json("./ALL_countries_covid_v5.json", d3.autotype),
  d3.csv("./unsd_regions.csv",d3.autoType),
]).then(([timesample,countrydata,regionsref]) => {
  state.timedata = timesample;
  state.countrydata = countrydata;
  state.regionsref = regionsref
  console.log("state:",state);
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

let subreg_colors = {
  "Northern Africa": "purple",
  "Sub-Saharan Africa": "yellow",
  "Latin America and the Caribbean":"green",
  "Northern America": "darkgray",
 "Central Asia": "magenta",
  "Eastern Asia": "orange",
  "South-eastern Asia": "lightblue",
  "Southern Asia": "blue",
  "Western Asia": "darkblue",
  "Eastern Europe": "darkred",
  "Northern Europe": "darkred",
  "Southern Europe": "darkred",
  "Western Europe": "darkred",
  "Australia and New Zealand": "violet",
  "Melanesia": "pink",
  "Micronesia": "pink",
  "Polynesia": "pink"
};

let index_vars = {"Perceptions of Corruption Index": "corrupt_Index",
                  "Transparency Index": "transparency_Index",
                  "State Fragility Index": "fragility_Index",
                  "Economic Globalization Index": "eco_global_Index",
                  "Social Globalization Index": "soc_global_Index",
                  "Far Right Voter Share": "far_right_voters",
                  "Political Globalization Index": "poli_global_Index",
                  "Overall Globalization Index": "overall_global_Index",
                  "Electoral Democracy Index": "polyarchy_dem_Index",
                  "Constraining Power Sharing Index":"constraining_Index",
                  "Dispersive Power Sharing Index": "dispersive_Index",
                  "Free Press Ranking": "free_press_rank",
                  "News Readership": "news_wb",
                  "External Labor Openness Index": "ext_labor_openness",
                  "State Level Power Sharing Index": "state_IDC",
                  "Municipal Level Power Sharing Index": "municipal_Index"};

console.log("KEYS",Object.keys(index_vars))


let event_types = ["New Task Force or Bureau", "Declaration of Emergency", 
"External Border Restrictions",  "Internal Border Restrictions",
"Restrictions of Mass Gatherings", "Quarantine/Lockdown","Curfew", "Social Distancing", 
"Closure of Schools",
 "Restriction of Non-Essential Government Services","Restriction of Non-Essential Businesses",
  "Health Monitoring", "Health Resources", "Health Testing", "Public Awareness Campaigns","Other Policy Not Listed Above"];

state.selectedPolicyTypes = colors.keys;






function init () {

  swarm = d3
    .select("#plot_1")
    .append("svg")
    .attr("width", width)
    .attr("height", height);

  swarm.append("text")
    .attr("transform",`translate(${width/2-20},${margins.top-60})`)
    .style("font","16px sans-serif")
    .style("font-family","Avenir")
    .text("Beginning of new policies"); // adding a title to the plot

    
  for(var i = 0; i < state.regionsref.length; i++){
    // obj = Object
    var key = state.regionsref[i]["ISO_A3"];
    var reg = state.regionsref[i]["Region Name"];
    var subreg = state.regionsref[i]["Sub-region Name"];
    regions_lookup[key] = {"Region" : reg, "Subregion": subreg};
  }
  
  console.log(regions_lookup);

  // UI ELEMENT SETUP
  selectIndex = d3.select("#dropdown").on("change", function() {
    console.log("new selected index is", this.value, "which queries column:",index_vars[this.value]);
    // `this` === the selectElement
    // this.value holds the dropdown value a user just selected
    state.selectedIndex = this.value;
    drawPlot(); // re-draw the graph based on this new selection
  });

  // add in dropdown options from the unique values in the data
  selectIndex
    .selectAll("option")
    .data(Object.keys(index_vars))
    .join("option")
    .attr("value", d => d)
    .text(d => d);

  // this ensures that the selected value is the same as what we have in state when we initialize the options
  selectIndex.property("value", defaultIndex);
  
  drawPlot();
}


function drawPlot () {

  //let selectedPolicies = ["Closure of Schools","Curfew", "Declaration of Emergency",
  //"External Border Restrictions","Internal Border Restrictions","Internal Border Restrictions"];
  let selectedPolicies = event_types;
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
//console.log(d3.map(unpackedData,d=>d.entry_type).keys())   ;
unpackedData = unpackedData.filter(d=>d.entry_type === "new_entry");
  // Add y scale for days since first annoucnement... this is always at 0
yScale = d3.scaleBand()
  .domain(selectedPolicies)
  .range([margins.top,height-margins.bottom])
  .paddingOuter(0.2)
  .paddingInner(0.4);

/// add x scale
xScale = d3.scaleLinear()
  .domain([d3.min(days_since_first_case),d3.max(days_since_first_case)]) // added extra elements for padding
  .range([ margins.left, width-margins.right]);

    // set up a scale to map to the circle sizes, 
circScale = d3.scaleSqrt()
    .domain([d3.min(unpackedData,d=>d["population"]),d3.max(unpackedData,d=>d["population"])])
    .range([3,6]);

var indexCol = index_vars[state.selectedIndex];
console.log("dropdown reads: ",state.selectedIndex,"column selected: ",indexCol);
var indexVals = unpackedData.map(d=>d[indexCol]);
var filtered_indexVals = indexVals.filter(function (el) {
  return el != null;
});
var colorset = ["#a50026","#a70226","#a90426","#ab0626","#ad0826","#af0926","#b10b26","#b30d26","#b50f26","#b61127","#b81327","#ba1527","#bc1727","#be1927","#c01b27","#c21d28","#c41f28","#c52128","#c72328","#c92529","#cb2729","#cc2929","#ce2b2a","#d02d2a","#d12f2b","#d3312b","#d4332c","#d6352c","#d7382d","#d93a2e","#da3c2e","#dc3e2f","#dd4030","#de4331","#e04532","#e14733","#e24a33","#e34c34","#e44e35","#e55136","#e75337","#e85538","#e95839","#ea5a3a","#eb5d3c","#ec5f3d","#ed613e","#ed643f","#ee6640","#ef6941","#f06b42","#f16e43","#f17044","#f27346","#f37547","#f37848","#f47a49","#f57d4a","#f57f4b","#f6824d","#f6844e","#f7864f","#f78950","#f88b51","#f88e53","#f89054","#f99355","#f99557","#f99858","#fa9a59","#fa9c5b","#fa9f5c","#fba15d","#fba35f","#fba660","#fba862","#fcaa63","#fcad65","#fcaf66","#fcb168","#fcb369","#fcb56b","#fdb86d","#fdba6e","#fdbc70","#fdbe72","#fdc073","#fdc275","#fdc477","#fdc678","#fdc87a","#fdca7c","#fecc7e","#fecd80","#fecf81","#fed183","#fed385","#fed587","#fed689","#fed88a","#feda8c","#fedb8e","#fedd90","#fede92","#fee094","#fee196","#fee397","#fee499","#fee69b","#fee79d","#fee89f","#feeaa1","#feeba3","#feeca4","#feeda6","#feeea8","#fef0aa","#fef1ac","#fdf2ae","#fdf2b0","#fdf3b2","#fdf4b4","#fcf5b6","#fcf6b8","#fbf6ba","#fbf7bc","#faf7be","#faf8c0","#f9f8c2","#f9f8c4","#f8f9c6","#f7f9c8","#f7f9ca","#f6f9cc","#f5f9ce","#f4f9d0","#f3f9d2","#f2f9d4","#f1f8d6","#f0f8d8","#eff8da","#edf8dc","#ecf7dd","#ebf7df","#eaf6e1","#e8f6e2","#e7f5e4","#e6f5e5","#e4f4e7","#e3f3e8","#e1f3e9","#e0f2ea","#def1eb","#dcf1ec","#dbf0ed","#d9efed","#d7eeee","#d5eeee","#d4edef","#d2ecef","#d0ebef","#ceeaef","#cce9ef","#cae8ef","#c8e7ef","#c6e6ef","#c5e5ef","#c3e4ee","#c0e3ee","#bee2ee","#bce1ed","#bae0ed","#b8deec","#b6ddeb","#b4dceb","#b2dbea","#b0d9e9","#aed8e9","#acd7e8","#aad5e7","#a7d4e6","#a5d2e6","#a3d1e5","#a1d0e4","#9fcee3","#9dcde2","#9bcbe1","#99c9e1","#96c8e0","#94c6df","#92c4de","#90c3dd","#8ec1dc","#8cbfdb","#8abeda","#88bcd9","#86bad8","#84b8d7","#82b6d6","#7fb5d5","#7db3d4","#7bb1d3","#79afd2","#77add1","#75abd0","#73a9cf","#71a7ce","#6fa5cd","#6da3cc","#6ca1cb","#6a9fca","#689dc9","#669bc8","#6499c7","#6297c5","#6094c4","#5f92c3","#5d90c2","#5b8ec1","#598cc0","#5889bf","#5687be","#5485bc","#5383bb","#5180ba","#507eb9","#4e7cb8","#4d7ab7","#4c77b5","#4a75b4","#4973b3","#4870b2","#466eb1","#456cb0","#4469ae","#4367ad","#4264ac","#4162ab","#4060aa","#3f5da8","#3e5ba7","#3d58a6","#3c56a5","#3b54a4","#3a51a2","#394fa1","#384ca0","#374a9f","#37479e","#36459c","#35429b","#34409a","#333d99","#333b97","#323896","#313695"];
console.log("INDEX VALS",indexVals, "FILTERED", filtered_indexVals);
colorScale = d3.scaleQuantize()
  .domain([d3.min(filtered_indexVals),d3.max(filtered_indexVals)])
  .range(colorset);


console.log("COLORSCALE:",colorScale);

// draw the axes for the dot plot
xAxis = swarm.append("g")
  .attr("class", "swarm_axis--x")
  .attr("transform", `translate(0, ${height-margins.bottom})`)
  .call(d3.axisBottom(xScale))
  .call(g => g.select(".domain").remove())
  .call(g => g.selectAll(".tick").select("line").remove());


swarm.append("text")
  .attr("class","x-axis-title")
  .attr("transform",`translate(${width/2},${height-5})`)
  .style("font","12px sans-serif")
  .style("font-weight","bold")
  .style("font-family","Avenir")
  .text("days since first confirmed case");
  //.call(g => g.select(".domain").remove())
  //.call(g => g.selectAll(".tick").select("line").remove());


/*swarm.append("g")
  .attr("class", "swarm_axis--y")
  .attr("transform", `translate(150, -100)`)
  .style("font","12px sans-serif")
  .style("font-weight","bold")
  .style("font-family","Avenir")
  .call(d3.axisLeft(yScale))
  .call(g => g.select(".domain").remove())
  .call(g => g.selectAll(".tick").select("line").remove());*/

yAxis = swarm.append("g")
            .attr("class", "y axis")
            .call(d3.axisLeft(yScale))
            .attr("transform",`translate(${yAxis_startx},${yAxis_starty})`)
            .style("font","10px sans-serif")
            .style("font-weight","bold")
            .style("font-family","Avenir")
            .call(g => g.select(".domain").remove())
            .selectAll(".tick text")
            .call(wrap, 115)
          
swarm.selectAll(".tick line")
      .attr("x2", width)
      .attr("stroke-dasharray", "1, 2")
      .style("stroke", "lightgrey");

swarm.append("line")
      .attr("class","pre-post-line")
      .style("stroke","darkgray")
      .style("stroke-width",3)
      .attr("x1",xScale(0))
      .attr("x2",xScale(0))
      .attr("y1",margins.top)
      .attr("y2",height-margins.bottom);

swarm.append("rect")
  .attr("class","pre-covid-region")
  .style("fill","#b6e3aa")
  .style("opacity",0.15)
  .attr("x",yAxis_startx)
  .attr("y",margins.top)
  .attr("width",xScale(0)-yAxis_startx)
  .attr("height",height-margins.bottom-margins.top);

swarm.append("rect")
  .attr("class","post-covid-region")
  .style("fill","e3a8a8")
  .style("opacity",0.15)
  .attr("x",xScale(0))
  .attr("y",margins.top)
  .attr("width",xScale(d3.max(days_since_first_case))-margins.right)
  .attr("height",height-margins.bottom-margins.top);




/*unpackedData = unpackedData.filter(d=> d.event_type ==="Closure of Schools" 
|| d.event_type ==="Curfew"
|| d.event_type ==="External Border Restrictions"
|| d.event_type === "Internal Border Restrictions"
|| d.event_type === "Declaration of Emergency");*/

///let check = d3.map(unpackedData, function(d){return d["days_since_first_case"];}).keys();
//console.log("EVENT TYPES",check);
console.log("UNPACKED:",unpackedData);

let simulation = d3.forceSimulation(unpackedData)
  .force('charge', d3.forceManyBody().strength(-0.5).distanceMax(0.5))
  .force('x', d3.forceX().x(function(d) {
    return xScale(d['days_since_first_case']);
  }).strength(0.15))
  .force("y", d3.forceY(height/2).y(function(d){
    return yScale(d["event_type"]);
  }).strength(0.15))
  .force('collision', d3.forceCollide().radius(6))



let dots = simulation
  .on('tick', function() {
    let u = swarm.selectAll('circle')
    .data(unpackedData);

    u.enter()
      .append('circle')
      .attr("class","event_dot")
      .attr('r', d=>circScale(d["population"]))
      .attr('fill',d => d[index_vars[state.selectedIndex]] === null ? 'grey' : colorScale(d[index_vars[state.selectedIndex]])
      )
      //.style("stroke","black")
      .merge(u)
      .attr('cx', function(d) {
        return xScale(d['days_since_first_case']);
        //return d.x;
      })
      .attr('cy', function(d) {
        return d.y;
      })

      u.exit().remove();
    });
  
      




    
              
                      
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
    state.selectedPolicyTypes = choices;
    console.log("SELECTED POLICIES: ",state.selectedPolicyTypes);
    };

function wrap(text, width) {
      text.each(function() {
        var text = d3.select(this),
            words = text.text().split(/\s+/).reverse(),
            word,
            line = [],
            lineNumber = 0,
            lineHeight = 1.1, // ems
            y = text.attr("y"),
            dy = parseFloat(text.attr("dy")),
            tspan = text.text(null).append("tspan").attr("x", 0).attr("y", y).attr("dy", dy + "em");
        while (word = words.pop()) {
          line.push(word);
          tspan.text(line.join(" "));
          if (tspan.node().getComputedTextLength() > width) {
            line.pop();
            tspan.text(line.join(" "));
            line = [word];
            tspan = text.append("tspan").attr("x", 0).attr("y", y).attr("dy", ++lineNumber * lineHeight + dy + "em").text(word);
          }
        }
      });
    }

    
   