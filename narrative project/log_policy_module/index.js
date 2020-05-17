// import our components
import { LogPlot } from "./log_policy_chart.js";
//import { Barchart } from "./Barchart.js";
//import { Count } from "./Count.js";

let policyPlots = [];
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
    allCountryCases: [],
    casesLookup: {},
    lookupdates: [],
    timeFormat: d3.timeFormat("%Y-%m-%d"),
    timeParser: d3.timeParse("%Y-%-m-%-d"),
    postFilt: [],
    currentCases: 0,
    countrydata: [],
    unpackedData: [],
    logColors: {},
    days_since_first_announcement: [],
    days_since_first_case: [],
    selectedCountry: " All",
    selectedPolicyTypes: [],
    selectedRegion: " All",
    filteredData: [],
    policyType: "null",
    selectedIndex: "Social Globalization Index",
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
let nextState = {
}

// DATA IMPORT
Promise.all([
    //d3.csv("./total-deaths-and-cases-covid-19.csv",d3.autoType),
    d3.csv("./full_data_OWIDMay16.csv",d3.autoType),
    d3.json("./ALL_countries_covid_May15.json", d3.autotype),
  ]).then(([casesData,countrydata]) => {
    state.casesData = casesData;
    // this step is redundant.. I can just unpack the data 
    // and not have to store it twice...
    state.countrydata = countrydata;
    console.log("state:",state);
    createWorldCasesLookup();
    unpackData();
    filterData();
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

state.selectedPolicyTypes = Object.keys(state.logColors);

function init() {

  let poltypes = Object.keys(policies);
  let divs = Object.values(policies);
  console.log("KEYS:",poltypes,"VALUES:",divs);
  for (var i = 0; i < divs.length; i++) {
    let newPlot = new LogPlot(state,setGlobalState,poltypes[i],divs[i])
    policyPlots.push(newPlot)
  }

// 2. Dropdown for various indexes for color scaling
  selectIndex = d3.select("#dropdown").on("change", function() {
      console.log("new selected index is", this.value, "which queries column:",state.index_vars[this.value]);
      // `this` === the selectElement
      // this.value holds the dropdown value a user just selected
      nextState.selectedIndex = this.value;
      setGlobalState(nextState); // re-draw the graph based on this new selection
    });

  // add in dropdown options from the unique values in the data
  selectIndex
    .selectAll("option")
    .data(Object.keys(state.index_vars))
    .join("option")
    .attr("value", d => d)
    .text(d => d);

  // this ensures that the selected value is the same as what we have in state when we initialize the options
  selectIndex.property("value", "Social Globalization Index");

// 1. dropdown for countries
let selectCountries = d3.select("#countries_dropdown").on("change", function() {
  console.log("new selected country is:",this.value);
  nextState.selectedCountry = this.value;
  setGlobalState(nextState);
});

let country_list = Object.keys(state.countrydata);
let region_list = ["South Asia", "Europe & Central Asia",
  "Middle East & North Africa","Sub-Saharan Africa","Latin America & Caribbean",
  "East Asia & Pacific","North America"];
console.log("LETS SEEEEE",d3.map(state.unpackedData,d=>d.region).keys())
let grouped_countries = {};
for (var i=0; i<region_list.length;i++){
  let filt_df = state.unpackedData.filter(d=>d.region===region_list[i])
  grouped_countries[region_list[i]] = d3.map(filt_df,d=>d.country).keys();
}
console.log("DISD THE LSOAOK",grouped_countries);
country_list.push(" All");
country_list = country_list.sort(d3.ascending);
console.log(country_list);
/*selectCountries
  .selectAll("optgroup")
  .data(region_list)
  .join("optgroup")
  .attr("class",d=>d.replace("&","").split(" ").join("_")+"options")
  .attr("label",d=>d)


for (var i = 0; i<region_list.length;i++) {
selectCountries.select("."+region_list[i].replace("&","").split(" ").join("_")+"options")
  .selectAll("option")
  .data(grouped_countries[region_list[i]].sort(d3.ascending))
  .join("option")
  .attr("value",d=>d)
  .text(d=>d);
}*/
selectCountries
  .selectAll("option")
  .data(country_list)
  .join("option")
  .attr("value",d=>d)
  .text(d=>d);

selectCountries.property("value", " All");

region_list.push(" All");
// 2. dropdown for regions
let selectRegion = d3.select("#region_dropdown").on("change", function() {
    console.log("new selected region is:",this.value);
    nextState.selectedRegion = this.value;
    nextState.selectedCountry = " All";
    selectCountries.property("value"," All");
    setGlobalState(nextState);
});

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
    policyPlots[i].draw(state,setGlobalState,poltypes[i],divs[i]);
  }

  //policyPlot.draw(state,setGlobalState);
  //barchart.draw(state, setGlobalState);
  //count.draw(state, setGlobalState);
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
// Validates the date range between cases and policy datasets
function filterData() {
 

  state.lookupdates = Object.keys(state.casesLookup);
  console.log("DATEA",state.lookupdates);
  var data_dates = [];
  for (var i=0; i<state.unpackedData.length; i++) {

    data_dates.push(state.timeFormat(state.timeParser(state.unpackedData[i]["date_start"])))
  };
  console.log("DATADATES",data_dates);
  state.unpackedData = state.unpackedData.filter(d => state.lookupdates.includes(state.timeFormat(state.timeParser(d["date_start"])) ));
  //console.log("DID WE FILTER?",state.postFilt,state.unpackedData);

}


function updateTypes(){
    var choices = [];
    d3.selectAll(".myCheckbox").each(function(d){
          var cb = d3.select(this);
          if(cb.property("checked")){
            choices.push(cb.property("value"));
          }
        });
    state.selectedPolicyTypes = choices;
    //console.log("SELECTED POLICIES: ",logState.selectedPolicyTypes);
};
/*
d3.selectAll(".myCheckbox").on("change",updateTypes);
    updateTypes();*/