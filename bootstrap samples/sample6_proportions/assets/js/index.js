// import our components
//import { LogPlot } from "./log_policy_chart.js";
import { SwarmChart } from "./SwarmChart.js";
//import { Count } from "./Count.js";

let swarms = [];
let selectIndex;
let policies = {"Restrictions of Mass Gatherings":"#gatherings",
                "Quarantine/Lockdown":"#quarantine",
                "Closure of Schools": "#schools",
                "External Border Restrictions":"#ext_border",
                "Declaration of Emergency": "#emergency",
                "Curfew":"#curfew",
                "Social Distancing":"#socialdist",
                "Internal Border Restrictions":"#int_border"};

let state = {
    casesData: [],
    casesLookup: {},
    lookupdates: [],
    parser: null,
    currentCases: 0,
    countrydata: [],
    unpackedData: [],
    logColors: {},
    days_since_first_announcement: [],
    days_since_first_case: [],
    selectedCountry: " All",
    selectedRegion: " All",
    selectedPolicyTypes: [],
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
    d3.csv("./total-deaths-and-cases-covid-19.csv",d3.autoType),
    d3.json("./ALL_countries_covid_May15.json", d3.autotype),
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

  // 1. dropdown for countries
    let selectCountries = d3.select("#countries_dropdown").on("change", function() {
        console.log("new selected country is:",this.value);
        nextState.selectedCountry = this.value;
        setGlobalState(nextState);
    });

    let country_list = Object.keys(state.countrydata);
    country_list.push(" All");
    country_list = country_list.sort(d3.ascending);
    console.log(country_list);
    selectCountries
        .select(".countries_dropdown_menu")
        .selectAll("button")
        .data(country_list)
        .join("button")
        .attr("class","dropdown-item")
        .attr("type","button")
        .text(d=>d);

    selectCountries.property("value", " All");

  // 2. dropdown for regions
    let selectRegion = d3.select("#region_dropdown").on("change", function() {
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
    state.casesData = state.casesData.filter(d=>d.Entity === "World");
    //console.log("CASES WORLD",state.casesData);
  
    var parser = d3.timeParse("%d-%b-%y");
  
    //date format needs to be "2020-2-24" to match policy data
    for(var i = 0; i < state.casesData.length; i++){
      // obj = Object
      var key = parser(state.casesData[i]["Date"]);
      var cases = state.casesData[i]["Total confirmed cases (cases)"];
      let deaths =state.casesData[i]["Total confirmed deaths (deaths)"];
      if (deaths === null) {deaths = 0;};
      state.casesLookup[key] = {"Cases" : cases, "Deaths": deaths};
  
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
}
