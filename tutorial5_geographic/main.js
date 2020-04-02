/**
 * CONSTANTS AND GLOBALS
 * */
const width = window.innerWidth * 0.9,
  height = window.innerHeight * 0.7,
  margin = { top: 20, bottom: 50, left: 60, right: 40 },
  default_selection = "Select a topic area";
  defaultYear = 2019;

/** these variables allow us to access anything we manipulate in
 * init() but need access to in draw().
 * All these variables are empty before we assign something to them.*/
let svg;
let path;
let minVal;
let maxVal;
let ramp;
let stateVals; // for each topic/state/year that's on display, we have this object
let qualTopics; // for each topic, i have a qualitative set of terms that may apply, i want those in the selector

var lowColor = '#f9f9f9';
var highColor = '#bc2a66';


/**
 * APPLICATION STATE
 * */
let state = {
  geojson: null,
  NSFdata: null,
  selectedTopic: null,
  selectedYear: 2019,
  hover: {
    latitude: null,
    longitude: null,
    state: null,
    topicPct: null,
    university: null,
  },
};

/**
 * LOAD DATA
 * Using a Promise.all([]), we can load more than one dataset at a time
 * */
Promise.all([
  d3.json("../data/usState.json"),
  d3.csv("../data/topicComp_byUSstate_2009_19.csv", d3.autoType),
]).then(([geojson, NSFdata]) => {
  state.geojson = geojson;
  state.NSFdata = NSFdata;
  console.log("state: ", state);
  init();
});




/**
 * INITIALIZING FUNCTION
 * this will be run *one time* when the data finishes loading in
 * */
function init() {


  // add the qualitative desc of each topic
  qualTopics = new Map()
  for (i = 0; i < state.NSFdata.length; i++){
    qualTopics.set(state.NSFdata[i]['Qualitative Description'],state.NSFdata[i]['topic'])
  };
  console.log(qualTopics);




  // UI ELEMENT SETUP
  const selectTopic = d3.select("#dropdown").on("change", function() {
    console.log("new selected topic is", this.value);
    // `this` === the selectElement
    // this.value holds the dropdown value a user just selected
    state.selectedTopic = this.value;
    draw(); // re-draw the graph based on this new selection
  });

  // add in dropdown options from the unique values in the data
  selectTopic
    .selectAll("option")
    .data(d3.map(state.NSFdata, function(d){return d["Qualitative Description"];}).keys())
    .join("option")
    .attr("value", d => d)
    .text(d => d);

  // this ensures that the selected value is the same as what we have in state when we initialize the options
  selectTopic.property("value", default_selection);

 // I tried adding an additional dropdown for the year... it was giving me difficulties in filtering the data....
 // NOTE: this dropdown isnt functional for now...
  /*const selectYear = d3.select("#dropdown_2").on("change", function() {
    console.log("new selected topic is", this.value);
    // `this` === the selectElement
    // this.value holds the dropdown value a user just selected
    state.selectedYear = this.value;
    draw(); // re-draw the graph based on this new selection
  });

  // add in dropdown options from the unique values in the data
  selectYear
    .selectAll("option")
    .data([
      ...Array.from(new Set(state.NSFdata.map(d => d['year'])))
    ])
    .join("option")
    .attr("value", d => d)
    .text(d => d);

  // this ensures that the selected value is the same as what we have in state when we initialize the options
  selectYear.property("value", defaultYear);

  //console.log(Array.from(new Set(state.NSFdata.map(d=> d.year)))); */

  // our projection and path are only defined once, and we don't need to access them in the draw function,
  // so they can be locally scoped to init()
  const projection = d3.geoAlbersUsa().fitSize([width, height], state.geojson);
  path = d3.geoPath().projection(projection);

  // create an svg element in our main `d3-container` element
  svg = d3
    .select("#d3-container")
    .append("svg")
    .attr("width", width)
    .attr("height", height);

  svg
    .selectAll(".state")
    // all of the features of the geojson, meaning all the states as individuals
    .data(state.geojson.features)
    .join("path")
    .attr("d", path)
    .attr("class", "state")
    .attr("fill", "transparent")
    .on("mouseover", d => {
      // when the mouse rolls over this feature, do this
      state.hover["state"] = d.properties.NAME;
      state.hover["topicPct"] = String((stateVals.get(d.properties.STUSPS)*100).toFixed(2))+"%";
      draw(); // re-call the draw function when we set a new hoveredState
    });

  // example; i put a few universities on this map of about NSF funding....
  // if i had more time with this, i'd add more data to the circles about the number of grants
  // and how much they received, and the composition of the awards by the topics discussed therein
  const GradCenterCoord = { latitude: 40.7423, longitude: -73.9833, name: "CUNY Grad Ctr."};
  const UCDavisCoord = {latitude: 38.540811, longitude: -121.757636, name: "UC Davis" };

  svg
    .selectAll("circle")
    .data([GradCenterCoord,UCDavisCoord])
    .join("circle")
    .attr("r", 6)
    .attr("fill", "steelblue")
    .attr("transform", d => {
      const [x, y] = projection([d.longitude, d.latitude]);
      return `translate(${x}, ${y})`;
    })
    .on("mouseover", d => {
      // when the mouse rolls over this feature, do this
      state.hover["university"] = d.name;
      draw(); // re-call the draw function when we set a new hoveredState
    })
    .on("mouseout", function(){state.hover["university"] = null;  });
    
    

  

  // EXAMPLE 2: going from x, y => lat-long
  // this triggers any movement at all while on the svg
  svg.on("mousemove", () => {
    // we can use d3.mouse() to tell us the exact x and y positions of our cursor
    const [mx, my] = d3.mouse(svg.node());
    // projection can be inverted to return [lat, long] from [x, y] in pixels
    const proj = projection.invert([mx, my]);
    state.hover["longitude"] = proj[0];
    state.hover["latitude"] = proj[1];
    draw();
  });

  draw(); // calls the draw function
}

/**
 * DRAW FUNCTION
 * we call this everytime there is an update to the data/state
 * */
function draw() {

  let filteredData;
  if (state.selectedTopic !== null) {
    filteredData = state.NSFdata.filter(d => d.topic === String(qualTopics.get(state.selectedTopic)));
    filteredData = filteredData.filter(d => d.year === state.selectedYear);
    }
  

  stateVals = new Map();
  for (i = 0; i < filteredData.length; i++){
    stateVals.set(filteredData[i].state,filteredData[i].pctAwards_wTopic)
  }
  console.log(stateVals);



  // get colors for the scale for the topic
  minVal = d3.min(filteredData, d => d['pctAwards_wTopic']);
  maxVal = d3.max(filteredData, d => d['pctAwards_wTopic']);
  ramp = d3.scaleLinear().domain([minVal,maxVal]).range([lowColor,highColor]);
  console.log("min",minVal,"max",maxVal);


  // i can't figure out how to shade the right states with the combination
  // of the state geojson and the data... 
  // this assigns a color with the right value/scale but to the wrong states...
  svg
    .selectAll(".state")
    .data(state.geojson.features)
    .join("path_2")
    .attr("fill", function(d) {return ramp(stateVals.get(d.properties.STUSPS));});


  // return an array of [key, value] pairs
  hoverData = Object.entries(state.hover);

  d3.select("#hover-content")
    .selectAll("div.row")
    .data(hoverData)
    .join("div")
    .attr("class", "row")
    .html(
      d =>
        // each d is [key, value] pair
        d[1] // check if value exist
          ? `${d[0]}: ${d[1]}` // if they do, fill them in
          : null // otherwise, show nothing
    );
}
