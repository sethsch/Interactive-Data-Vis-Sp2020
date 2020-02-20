/**
 * CONSTANTS AND GLOBALS
 * */
const width = window.innerWidth * 0.7,
  height = window.innerHeight * 0.7,
  margin = { top: 20, bottom: 70, left: 60, right: 40 },
  radius = 5;

/** these variables allow us to access anything we manipulate in
 * init() but need access to in draw().
 * All these variables are empty before we assign something to them.*/
let svg;
let xScale;
let yScale;

/**
 * APPLICATION STATE
 * */
let state = {
  data: [],
  selectedCounties: "All",
  selectedX: "congress",
  selectedY: "governor",
};


/**
 * LOAD DATA
 * */
d3.csv("../../data/county_data_out_dec28.csv", d3.autoType).then(raw_data => {
  console.log("raw_data", raw_data);
  state.data = raw_data;
  init();
});

/**
 * INITIALIZING FUNCTION
 * this will be run *one time* when the data finishes loading in
 * */
function init() {
  let xVar = state.selectedX;
  let yVar = state.selectedY;

  // SCALES
  xScale = d3
    .scaleLinear()
    .domain([0,100])
    .range([margin.left, width - margin.right]);

  yScale = d3
    .scaleLinear()
    .domain([0,100])
    .range([height - margin.bottom, margin.top]);

  // AXES
  const xAxis = d3.axisBottom(xScale);
  const yAxis = d3.axisLeft(yScale);

  // UI ELEMENT SETUP
  // add dropdown (HTML selection) for interaction
  // HTML select reference: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select
  const selectElement = d3.select("#dropdown").on("change", function() {
    console.log("new selected category is", this.value);
    // `this` === the selectElement
    // this.value holds the dropdown value a user just selected
    state.selectedCounties = this.value;
    draw(); // re-draw the graph based on this new selection
  });
  /*
  const selectXvar = d3.select("#dropdown_x").on("change",function() {
    console.log("new selected x variable is",this.value);
    draw();
  });

  const selectYvar = d3.select("#dropdown_y").on("change",function() {
    console.log("new selected y variable is",this.value);
    state.selectedY = this.value;
    draw();
  });
  */

  // get the Economic Type Dependency data categories
  let econTypes = new Set(d3.map(state.data,function(d) {return d.Economic_Type_Label;}).keys());
  econTypes.add("All");
  econTypes.delete("NA");
  console.log(econTypes);

  // add in dropdown options from the unique values in the data
  selectElement
    .selectAll("option")
    .data(Array.from(econTypes)) // unique data values-- (hint: to do this programmatically take a look `Sets`)
    .join("option")
    .attr("value", d => d)
    .text(d => d);

  /*  
  let xVars = ["happening", "human",  "consensus", "affectweather",  "worried",  "harmplants", 
                "harmplantsOppose", "futuregen", "devharm",  "harmUS",  "personal",  "timing",  "fundrenewables", "regulate",  
               "CO2limits",  "reducetax",  "supportRPS",  "rebates", 
               "drillANWR",  "drilloffshore", "teachGW", "teachGWOppose", "corporations", 
               "citizens",  "congress",  "governor",  "localofficials",  "prienv",  "discuss",  "mediaweekly"];
  let yVars = xVars;

  selectXvar
    .selectAll("option")
    .data(Array.from(xVars)) // unique data values-- (hint: to do this programmatically take a look `Sets`)
    .join("option")
    .attr("value", d => d)
    .text(d => d);
  
  selectYvar
    .selectAll("option")
    .data(Array.from(yVars)) // unique data values-- (hint: to do this programmatically take a look `Sets`)
    .join("option")
    .attr("value", d => d)
    .text(d => d);
  */

  // create an svg element in our main `d3-container` element
  svg = d3
    .select("#d3-container")
    .append("svg")
    .attr("width", width)
    .attr("height", height);

  // add the xAxis
  
  svg
    .append("g")
    .attr("class", "axis x-axis")
    .attr("transform", `translate(0,${height - margin.bottom})`)
    .call(xAxis)
    .append("text")
    .attr("class", "axis-label")
    .attr("x", "50%")
    .attr("dy", "3em")
    .text("Congress");

  // add the yAxis
  svg
    .append("g")
    .attr("class", "axis y-axis")
    .attr("transform", `translate(${margin.left},0)`)
    .call(yAxis)
    .append("text")
    .attr("class", "axis-label")
    .attr("y", "50%")
    .attr("dx", "-3em")
    .attr("writing-mode", "vertical-rl")
    .text("Governor");

  draw(); // calls the draw function
}

/**
 * DRAW FUNCTION
 * we call this everytime there is an update to the data/state
 * */
function draw() {
  // filter the data for the selectedCounties
  let filteredData = state.data;
  // if there is a selectedCounties, filter the data before mapping it to our elements
  if (state.selectedCounties !== "All") {
    filteredData = state.data.filter(d => d.Economic_Type_Label === state.selectedCounties);
  }

  const dot = svg
    .selectAll(".dot")
    .data(filteredData, d => d.FIPS) // use `d.name` as the `key` to match between HTML and data elements
    .join(
      enter =>
        // enter selections -- all data elements that don't have a `.dot` element attached to them yet
        enter
          .append("circle")
          .attr("class", "dot") // Note: this is important so we can identify it in future updates
          .attr("stroke", "lightgrey")
          .attr("opacity", 0.65)
          .attr("fill", d => {
            if (d.Economic_Type_Label === "Recreation") return "blue";
            else if (d.Economic_Type_Label === "Manufacturing") return "red";
            else if (d.Economic_Type_Label === "Federal/State Government") return "green";
            else if (d.Economic_Type_Label === "Farming") return "yellow";
            else if (d.Economic_Type_Label === "Mining") return "purple";
            else return "brown";
          })
          .attr("r", 0)
          .attr("cy", d => yScale(d[yVar]))
          .attr("cx", d => xScale(d[xVar])) // initial value - to be transitioned
          .call(enter =>
            enter
              .transition() // initialize transition
              .delay(d => d[xVar]) // delay on each element
              .duration(750) // duration 500ms
              .attr("r", 4.5)
          ),
      update =>
        update.call(update =>
          // update selections -- all data elements that match with a `.dot` element
          update
            .transition()
            .duration(375)
            .attr("stroke", "black")
            .transition()
            .duration(375)
            .attr("stroke", "lightgrey")
        ),
      exit =>
        exit.call(exit =>
          // exit selections -- all the `.dot` element that no longer match to HTML elements
          exit
            .transition()
            .delay(d => d[xVar])
            .duration(500)
            .attr("r", 0)
            .remove()
        )
    );
}
