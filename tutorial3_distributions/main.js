/**
 * CONSTANTS AND GLOBALS
 * */
const width = window.innerWidth * 0.7,
  height = window.innerHeight * 0.7,
  margin = { top: 20, bottom: 70, left: 60, right: 40 },
  radius = 5;

const colors = ["#94a6fd", "#8fb856", "#cf7b5d", "#27bfb3", "#e22959", "#0f767a"];

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
  selectedRegion: "All",
  //selectedX: "congress",
  //selectedY: "personal",
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
  
  // SCALES
  xScale = d3
    .scaleLinear()
    .domain(d3.extent(state.data, d => d['congress']))
    .range([margin.left, width - margin.right]);

  yScale = d3
    .scaleLinear()
    .domain(d3.extent(state.data, d => d['personal']))
    .range([height - margin.bottom, margin.top]);

  circScale = d3
    .scaleLinear()
    .domain(d3.extent(state.data, d => d['tot_pop']))
    .range([3,18]);

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

  const selectReg = d3.select("#dropdown_reg").on("change",function() {
    console.log("new selected Region variable is",this.value);
    state.selectedRegion = this.value;
    draw();
  });


  // get the Economic Type Dependency data categories
  let econTypes = new Set(d3.map(state.data,function(d) {return d.Economic_Type_Label;}).keys());
  econTypes.add("All");
  econTypes.delete("NA");
  console.log(econTypes);

  let regions = new Set(d3.map(state.data,function(d) {return d.Region;}).keys());
  regions.add("All");
  regions.delete("NA");
  console.log(regions);

  // add in dropdown options from the unique values in the data
  selectElement
    .selectAll("option")
    .data(Array.from(econTypes)) // unique data values-- (hint: to do this programmatically take a look `Sets`)
    .join("option")
    .attr("value", d => d)
    .text(d => d);

  selectReg
    .selectAll("option")
    .data(Array.from(regions)) // unique data values-- (hint: to do this programmatically take a look `Sets`)
    .join("option")
    .attr("value", d => d)
    .text(d => d);


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
    .attr("class", "axis-label-horiz")
    .attr("x", "50%")
    .attr("dy", "3em")
    .text("% of Pop. that believes Congress should be doing more");

  // add the yAxis
  svg
    .append("g")
    .attr("class", "axis y-axis")
    .attr("transform", `translate(${margin.left},0)`)
    .call(yAxis)
    .append("text")
    .attr("class", "axis-label-vert")
    .attr("y", "-10%")
    .attr("dx", "3em")
    .attr("writing-mode", "vertical-rl")
    .text("% Pop. believing global warming has personal effects");

  draw(); // calls the draw function
}

/**
 * DRAW FUNCTION
 * we call this everytime there is an update to the data/state
 * */
function draw() {
  // filter the data for the selected categories
  let filteredData = state.data;

  // if there is selectedCounties, filter the data before mapping it to our elements
  if (state.selectedCounties !== "All") {
    filteredData = state.data.filter(d => d.Economic_Type_Label === state.selectedCounties);
    if (state.selectedRegion !== "All") {
      filteredData = filteredData.filter(d => d.Region === state.selectedRegion);
    }
  }
  // if the Region gets selected first, we should still be able to filter the data
  if (state.selectedRegion !== "All") {
    filteredData = state.data.filter(d => d.Region === state.selectedRegion);
    if (state.selectedCounties !== "All") {
      filteredData = filteredData.filter(d => d.Economic_Type_Label === state.selectedCounties);
    }
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
          .attr("opacity", 0.75)
          .attr("fill", d => {
            if (d.Economic_Type_Label === "Recreation") return colors[0];
            else if (d.Economic_Type_Label === "Manufacturing") return colors[1];
            else if (d.Economic_Type_Label === "Federal/State Government") return colors[2];
            else if (d.Economic_Type_Label === "Farming") return colors[3];
            else if (d.Economic_Type_Label === "Mining") return colors[4];
            else return colors[5];
          })
          .attr("r", 0)
          .attr("cy", d => yScale(d['personal']))
          .attr("cx", d => xScale(d['congress'])) // initial value - to be transitioned
          .call(enter =>
            enter
              .transition() // initialize transition
              .delay(d => d['congress']) // delay on each element
              .duration(750) // duration 500ms
              .attr("r", d => circScale(d['tot_pop']))
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
            .delay(d => d['congress'])
            .duration(500)
            .attr("r", 0)
            .remove()
        )
    );
}
