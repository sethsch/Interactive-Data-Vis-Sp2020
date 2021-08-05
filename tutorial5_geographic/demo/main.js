/**
 * CONSTANTS AND GLOBALS
 * */
const width = window.innerWidth * 0.9,
  height = window.innerHeight * 0.7,
  margin = { top: 20, bottom: 50, left: 60, right: 40 };

/** these variables allow us to access anything we manipulate in
 * init() but need access to in draw().
 * All these variables are empty before we assign something to them.*/
let svg;
let path;
let projection;
let dropDown;

/**
 * APPLICATION STATE
 * */
let state = {
  geojson: null,
  extremes: null,
  hover: {
    latitude: null,
    longitude: null,
    state: null,
  },
  selection: [],
};






const west = ['02', '15', '06', '41', '53', '04', '08', '16', '35', '30', '49', '32', '56'];
const south = ['10', '11', '24', '54', '51', '40', '37', '48', '05', '21', '47', '40', '45', '01', '28', '13', '22', '12'];
const midwest = ['18', '17', '26', '39', '55', '19', '20', '27', '29', '31', '38', '46'];
const northeast = ['09', '23', '25', '33', '44', '50', '34', '36', '42'];
var custom = ['10', '24', '54', '40', '37', '40', '45', '13', '22', '12'];
var all = d3.merge([west, south, midwest, northeast]);
const continental = all.filter(d => d != '02' && d != '15');


let us_regions = {"West": west, "South":south, "Midwest":midwest,
                  "Northeast":northeast,"Custom":custom,"All":all,
                "Continental":continental};


console.log("regions",Object.keys(us_regions))
dropDown = d3.select("#dropdown")



var options = dropDown.selectAll("option")
      .data(Object.keys(us_regions))
      .enter()
      .append("option");

options.text(function(d) {
        return d;
      })
      .attr("value", function(d) {
        return us_regions[d];
      });

 // handle on click event
 dropDown.on('change', function() {
        state.selection = d3.select(this).property("value");
        draw();
       //state.changedOpt = "colors";
       //state.colorAttribute = d3.select(this).property('value');
       //console.log("new sleected coloration is",state.colorAttribute);
       //legArea.select(".legendQuant").remove();

       }
 );




/**
 * LOAD DATA
 * Using a Promise.all([]), we can load more than one dataset at a time
 * */
Promise.all([
  d3.json("../../data/usState.json"),
  d3.csv("../../data/usHeatExtremes.csv", d3.autoType),
]).then(([geojson, extremes]) => {
  state.geojson = geojson;
  console.log("stateGEO",state.geojson)
  state.extremes = extremes;
  // console.log("state: ", state);
  init();
});






/**
 * INITIALIZING FUNCTION
 * this will be run *one time* when the data finishes loading in
 * */
function init() {


 




  // create an svg element in our main `d3-container` element
  svg = d3
    .select("#d3-container")
    .append("svg")
    .attr("width", width)
    .attr("height", height);

  

  draw(); // calls the draw function
}

/**
 * DRAW FUNCTION
 * we call this everytime there is an update to the data/state
 * */
function draw() {
  let filteredData = state.geojson;
  console.log("FILT1",filteredData)
  let filt2 = filteredData.features.filter(function(d) {
    if (state.selection.includes(d.properties.GEOID)) {
      return d;
    }
  })
  console.log("FILT2",filt2)
  state.filteredData = {type: "FeatureCollection",
                        features: filt2};
  


  projection = d3.geoAlbersUsa().fitSize([width, height], state.filteredData);

  path = d3.geoPath().projection(projection);

  // return an array of [key, value] pairs
  svg
    .selectAll(".state")
    // all of the features of the geojson, meaning all the states as individuals
    .data(state.filteredData.features)
    .join("path")
    .attr("d", path)
    .attr("class", "state")
    .attr("fill", "transparent")
    .on("mouseover", d => {
      // when the mouse rolls over this feature, do this
      state.hover["state"] = d.properties.NAME;
      //draw(); // re-call the draw function when we set a new hoveredState
    });



  // EXAMPLE 2: going from x, y => lat-long
  // this triggers any movement at all while on the svg
  svg.on("mousemove", () => {
    // we can use d3.mouse() to tell us the exact x and y positions of our cursor
    const [mx, my] = d3.mouse(svg.node());
    // projection can be inverted to return [lat, long] from [x, y] in pixels
    const proj = projection.invert([mx, my]);
    state.hover["longitude"] = proj[0];
    state.hover["latitude"] = proj[1];
    //draw();
  });


  /*hoverData = Object.entries(state.hover);

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
    );*/
}
