// import our components
//import { LogPlot } from "./log_policy_chart.js";
import { SwarmChart } from "./SwarmChart.js";
//import { Count } from "./Count.js";

let swarms = [];
let selectIndex;
let policies = {'Health Monitoring': '#health_monitor',
                'Public Awareness Measures': '#public_aw',
                'Other Policy Not Listed Above': '#other_pol',
                'Health Resources': '#health_rsrc',
                'New Task Force, Bureau or Administrative Configuration': '#task_fc',
                'External Border Restrictions': '#ext_border',
                'Internal Border Restrictions': '#int_border',
                'Restrictions of Mass Gatherings': '#mass_gath',
                'Restriction of Non-Essential Government Services': '#gov_serv',
                'Declaration of Emergency': '#emergency',
                'Closure of Schools': '#schools',
                'Restriction of Non-Essential Businesses': '#business',
                'Health Testing': '#health_test',
                'Social Distancing': '#soc_dist',
                'Quarantine/Lockdown': '#lockdown',
                'Curfew': '#curfew',
                'Hygiene': '#hygeine',
                'Anti-Disinformation Measures': '#disinfo'};

let state = {
    casesData: [],
    allCountryCases: [],
    casesLookup: {},
    lookupdates: [],
    timeFormat: d3.timeFormat("%Y-%m-%d"),
    timeParser: d3.timeParse("%Y-%-m-%-d"),
    currentCases: 0,
    countrydata: [],
    unpackedData: [],
    logColors: {},
    days_since_first_announcement: [],
    days_since_first_case: [],
    selectedCountry: " All",
    selectedRegion: " All",
    selectedPolicies: [],
    filteredData: [],
    policyType: "null",
    selectedIndex: "Transparency Index",
    index_vars: {"Perceptions of Corruption Index": "corrupt_Index",
      "Transparency Index": "transparency_Index",
      "State Fragility Index": "fragility_Index",
      "Economic Globalization Index": "eco_global_Index",
      "Social Globalization Index": "soc_global_Index",
      "Far Right Voter Share": "far_right_voters",
      "Political Globalization Index": "poli_global_Index",
      "Overall Globalization Index": "overall_global_Index",
      "Electoral Democracy Index": "polyarchy_dem_Index",
      "Constraining Power Sharing Index":"contraining_Index",
      "Dispersive Power Sharing Index": "dispersive_Index",
      "Inclusive Power Sharing Index": "inclusive_Index",
      "Free Press Ranking": "free_press_rank",
      "News Readership": "news_wb",
      "External Labor Openness Index": "ext_labor_openness",
      "State Level Power Sharing Index": "state_IDC",
      "Municipal Level Power Sharing Index": "municipal_Index"
    },
  };
let nextState = {}

// DATA IMPORT
Promise.all([
    //d3.csv("./total-deaths-and-cases-covid-19.csv",d3.autoType),
    d3.csv("./full_data_OWIDMay16.csv",d3.autoType),
    d3.json("./ALL_countries_covid_May16.json", d3.autotype),
  ]).then(([casesData,countrydata]) => {
    state.casesData = casesData;
    // this step is redundant.. I can just unpack the data 
    // and not have to store it twice...
    state.countrydata = countrydata;
    console.log("state:",state);
    createWorldCasesLookup(); // create world cases data lookup by date
    unpackData(); // unpack from country/geography ready json to events
    filterData(); // filter to only be new entries
    init();
});

state.logColors =  {'Closure of Schools': "#a1def0",
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

//EDIT : edit to grab the right policy types fronm the data itself


function init() {
    //let policies = d3.map(state.unpackedData, function(d){return d.event_type;}).keys() 
    //console.log("MAP",policies);
  // console.log("POLICIES?",policies)
   let poltypes = Object.keys(policies);
   let divs = Object.values(policies);
   console.log("KEYS:",poltypes,"VALUES:",divs);
  for (var i = 0; i < divs.length; i++) {
    let newPlot = new SwarmChart(state,setGlobalState,poltypes[i],divs[i])
    swarms.push(newPlot)
  }

  
    //state.policyType = "Curfew";
    //var newPlot = new SwarmChart(state,setGlobalState,"#curfew");
    //swarms.push(newPlot);

  // slider and radio buttons to view the global cases signal

  let logScale = d3.scaleLog().domain([10, 5000000])
  let logFormat10 = logScale.tickFormat(5)
  let sliderFormat = d3.format(".2s");
  

  var sliderRange = d3
    .sliderBottom()
    .min(Math.log10(100))
    .max(Math.log10(5000000))
    .width(800)
    .tickFormat((d,i) => {
      if (Math.pow(10,d) === 1000000) {return "1M";}
      else if (Math.pow(10,d) > 1000000 && Math.pow(10,d) < 5000000) {return " ";}
      else if (Math.pow(10,d) === 5000000) {return "5M"}
      else if (Math.pow(10,d)=== 100) {return " ";}
      else if (Math.pow(10,d) === 1000) {return ">1000";}
      else {return sliderFormat(Math.pow(10,d));}
    })
    //.ticks(8)
    .tickValues([2,3,4,5,5.39,5.699,6,6.4,6.7])
    .default([Math.log10(100), Math.log10(5000000)])
    .fill('#0e0e0e')
    .on('onchange', val => {
      //d3.select('p#value-range').text(val.map(d3.format("s")).join('-'));
      filterPolicies(val)
      console.log(val);
    });

  var gRange = d3
    .selectAll("#slider-range")
    //.select('div#slider-range')
    .append('svg')
    .attr('width', 900)
    .attr('height', 100)
    .append('g')
    .attr('transform', 'translate(30,30)');

  gRange.call(sliderRange);

  /*d3.select('p#value-range').text(
    sliderRange
      .value()
      .map(d3.format("s"))
      .join('-')
  );*/

  // 1. dropdown for countries
    let selectCountries = d3.selectAll("#countries_dropdown").on("change", function() {
        console.log("new selected country is:",this.value);
        nextState.selectedCountry = this.value;
        setGlobalState(nextState);
    });

    let country_list = Object.keys(state.countrydata);
    country_list.push(" All");
    country_list = country_list.sort(d3.ascending);
    console.log(country_list);
    selectCountries
        .selectAll("option")
        .data(country_list)
        .join("option")
        .attr("value",d=>d)
        .text(d=>d);

    selectCountries.property("value", " All");

  // 2. dropdown for regions
    let selectRegion = d3.selectAll("#region_dropdown").on("change", function() {
      console.log("new selected region is:",this.value);
      nextState.selectedRegion = this.value;
      nextState.selectedCountry = " All";
      selectCountries.property("value"," All");
      setGlobalState(nextState);
    });

  let region_list = [" All", "South Asia", "Europe & Central Asia",
    "Middle East & North Africa","Sub-Saharan Africa","Latin America & Caribbean",
    "East Asia & Pacific","North America"]

    region_list = region_list.sort(d3.ascending);

  selectRegion
    .selectAll("option")
    .data(region_list)
    .join("option")
    .attr("value",d=>d)
    .text(d=>d);

  selectRegion.property("value", " All");

  draw();
}

function draw() {
  let poltypes = Object.keys(policies);
  let divs = Object.values(policies);
  //console.log("KEYS:",poltypes,"VALUES:",divs);
  for (var i = 0; i < divs.length; i++) {
    swarms[i].draw(state,setGlobalState,poltypes[i],divs[i]);
  }
  

}

// UTILITY FUNCTION: state updating function that we pass to our components so that they are able to update our global state object
function setGlobalState(nextState) {
  state = { ...state, ...nextState };
  console.log("new state:", state);
  draw();
}
// Creates a lookup table for global cases
function createWorldCasesLookup(){
  state.allCountryCases = state.casesData;
  state.casesData = state.casesData.filter(d=>d.location === "World");
  //console.log("CASES WORLD",state.casesData);

  //var parser = d3.timeFormat("%Y-%m-%d")

  //date format needs to be "2020-2-24" to match policy data
  for(var i = 0; i < state.casesData.length; i++){
    // obj = Object
    var key = String(state.timeFormat(state.casesData[i]["date"]));
    //var key = state.casesData[i]["date"];

    var cases = state.casesData[i]["total_cases"];
    var deaths =state.casesData[i]["total_deaths"];
    var new_deaths =state.casesData[i]["new_deaths"];
    var new_cases =state.casesData[i]["new_cases"];

    if (deaths === null) {deaths = 0;};
    state.casesLookup[key] = {"Cases" : cases, "Deaths": deaths,
                              "New_cases": new_cases, "New_deaths":new_deaths};

  };
  
};
// Unpacks the JSON stylized data... back into CSV style data
// This is unnecessary if I just read the data as a CSV...
// I initially re-stylized the data as JSON to accomodate geographic display...
// I'll keep it like this for now...  
function unpackData(){

  let filteredData = state.countrydata;

  if (state.selectedCountry !== " All") {
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

  state.unpackedData = unpackedData;
  state.days_since_first_case = days_since_first_case;
  state.days_since_first_announcement = days_since_announcement;


}
// Gives us only the new entries
function filterData() {
    state.unpackedData = state.unpackedData.filter(d=>d.entry_type === "new_entry");
    state.selectedPolicies = Object.values(state.unpackedData.map(d=>d.policy_id));
}

function filterPolicies(val) {

  // get the indices of the dates where the global cases total was within the range
  var worldCases = Object.values(state.casesData.map(d=>d.total_cases));
  console.log("MATHPOWVAL0",Math.pow(10,val[0]),"MATHPOWVAL1",Math.pow(10,val[1]))
  var val0_index = worldCases.findIndex(function(number) {
    return number > Math.pow(10,val[0]);
  });
  var val0_date = state.casesData[val0_index].date
  var val1_index = worldCases.findIndex(function(number) {
    return number > Math.pow(10,val[1]);
  });
  var val1_date = state.casesData[val1_index].date

  var dateRange = [state.timeFormat(val0_date),state.timeFormat(val1_date)]

  console.log("DATE RANGE", dateRange)
  console.log("VAL0",val[0],"VAL0INDEX",val0_index,"LOOKUPDATE",val0_date);

  // get all policy data within the time range
  let rangedData = state.unpackedData.filter(function(d) {
    let date = state.timeFormat(state.timeParser(d.date_start))
    return date >= dateRange[0] && date <= dateRange[1];
  } )
  console.log(rangedData);
  // get the list of policies and add it to state
  let policies = Object.values(rangedData.map(d=>d.policy_id));
  state.selectedPolicies = policies;
  console.log("DO WE HAVE A LIST O POLICEIS?",policies);

  //let date_val1 = casesLookup
  //let date_val2 =
  //let range_data = state.unpackedData.filter(d)
  //let policy_ids = state.unpackedData.map(d=>d.policy_id).values
  //console.log("LIS OF IDS",policy_ids);
}