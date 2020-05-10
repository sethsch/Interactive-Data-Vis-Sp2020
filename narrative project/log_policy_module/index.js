// import our components
import { LogPlot } from "./log_policy_chart.js";
//import { Barchart } from "./Barchart.js";
//import { Count } from "./Count.js";

let policyPlots = [];
let selectIndex;

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
    selectedCountry: "All",
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


// DATA IMPORT
Promise.all([
    d3.csv("./total-deaths-and-cases-covid-19.csv",d3.autoType),
    d3.json("./ALL_countries_covid_v5.json", d3.autotype),
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

  let policies = Object.keys(state.logColors);
  for (var i=0; i<policies.length; i++) {
    state.policyType = policies[i];
    //console.log("INIT SHIFT",state.policyType);
    var newPlot = new LogPlot(state,setGlobalState);
    policyPlots.push(newPlot);
  }
  //policyPlot = new LogPlot(state,setGlobalState);
  //table = new Table(state, setGlobalState);
  //barchart = new Barchart(state, setGlobalState);
  //count = new Count(state, setGlobalState);

// 2. Dropdown for various indexes for color scaling
  selectIndex = d3.select("#dropdown").on("change", function() {
      console.log("new selected index is", this.value, "which queries column:",index_vars[this.value]);
      // `this` === the selectElement
      // this.value holds the dropdown value a user just selected
      state.selectedIndex = this.value;
      draw(); // re-draw the graph based on this new selection
    });

  // add in dropdown options from the unique values in the data
  selectIndex
    .selectAll("option")
    .data(Object.keys(state.index_vars))
    .join("option")
    .attr("value", d => d)
    .text(d => d);

  // this ensures that the selected value is the same as what we have in state when we initialize the options
  selectIndex.property("value", "Transparency Index");

  draw();
}

function draw() {

  let policies = Object.keys(state.logColors);
  for (var i=0; i<policyPlots.length; i++) {
    state.policyType = policies[i];
    policyPlots[i].draw(state,setGlobalState);
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

  state.unpackedData = unpackedData;
  state.days_since_first_case = days_since_first_case;
  state.days_since_first_announcement = days_since_announcement;


}
// Validates the date range between cases and policy datasets
function filterData() {
  state.parser = d3.timeParse("%Y-%m-%d");
  state.lookupdates = Object.keys(state.casesLookup);
  //console.log("DATEA",lookupdates);
  var data_dates = [];
  for (var i=0; i<state.unpackedData.length; i++) {
    data_dates.push(String(state.parser(state.unpackedData[i]["date_start"])))
  };
  //console.log("DATADATES",data_dates);
  state.unpackedData = state.unpackedData.filter(d => state.lookupdates.includes(String(state.parser(d["date_start"])) ));
  //console.log("DID WE FILTER?",unpackedData);
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