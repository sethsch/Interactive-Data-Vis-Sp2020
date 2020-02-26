/**
 * CONSTANTS AND GLOBALS
 * */
const width = window.innerWidth * 0.5,
  height = window.innerHeight * 0.5,
  margin = { top: 20, bottom: 50, left: 60, right: 40 },
  radius = 3,
  default_selection = "Select a Directorate";

/** these variables allow us to access anything we manipulate in
 * init() but need access to in draw().
 * All these variables are empty before we assign something to them.*/
let svg;
let svg2;
let xScale;
let yScale;
let yAxis;
let colorScale;
let area_plot;


/* 
this extrapolated function allows us to replace the "G" with "B" min the case of billions.
we cannot do this in the .tickFormat() because we need to pass a function as an argument, 
and replace needs to act on the text (result of the function). 
*/
// const formatBillions = (num) => d3.format(".2s")(num).replace(/G/, 'B')

/**
 * APPLICATION STATE
 * */
let state = {
  data: [],
  selectedDivision: null,
};

/**
 * LOAD DATA
 * */
d3.csv("../../data/NSF_directorates_activityperyear_update.csv", d => ({
  year: new Date(d.eff_year, 0, 1),
  division: d.direct_fixed,
  award_id: new Number(d.award_id),
  pt_id: d.id,
})).then(raw_data => {
  console.log("raw_data", raw_data);
  console.log("max",d3.max(raw_data,d=>d.award_id));
  console.log("max",d3.min(raw_data,d=>d.award_id));


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
    .scaleTime()
    .domain(d3.extent(state.data, d => d.year))
    .range([margin.left, width - margin.right]);

  yScale = d3
    .scaleLinear()
    .domain([d3.min(state.data,d => d.award_id), d3.max(state.data, d => d.award_id)])
    .range([height - margin.bottom, margin.top]);

  // I want the color scale for the area plot's color, 
  // so that each area plot can be compared to the entire dataset...
  colorScale = d3
    .scaleLinear()
    .domain([1, 3000])
    .range(["lightblue", "darkblue"]);

  // AXES
  const xAxis = d3.axisBottom(xScale);
  yAxis = d3.axisLeft(yScale);

  // UI ELEMENT SETUP
  const selectElement = d3.select("#dropdown").on("change", function() {
    console.log("new selected entity is", this.value);
    // `this` === the selectElement
    // this.value holds the dropdown value a user just selected
    state.selectedDivision = this.value;
    draw(); // re-draw the graph based on this new selection
  });

  // add in dropdown options from the unique values in the data
  selectElement
    .selectAll("option")
    .data([
      ...Array.from(new Set(state.data.map(d => d.division))),
      default_selection,
    ])
    .join("option")
    .attr("value", d => d)
    .text(d => d);

  // this ensures that the selected value is the same as what we have in state when we initialize the options
  selectElement.property("value", default_selection);

  // create an svg element in our main `d3-container` element
  svg = d3
    .select("#d3-container_1")
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
    .text("Year");

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
    .text("Number of Grants");
  
   // create an svg element in our main `d3-container` element
   svg2 = d3
   .select("#d3-container_2")
   .append("svg")
   .attr("width", width)
   .attr("height", height);

 // add the xAxis
 svg2
   .append("g")
   .attr("class", "axis x-axis")
   .attr("transform", `translate(0,${height - margin.bottom})`)
   .call(xAxis)
   .append("text")
   .attr("class", "axis-label")
   .attr("x", "50%")
   .attr("dy", "3em")
   .text("Year");

 // add the yAxis
 svg2
   .append("g")
   .attr("class", "axis y-axis")
   .attr("transform", `translate(${margin.left},0)`)
   .call(yAxis)
   .append("text")
   .attr("class", "axis-label")
   .attr("y", "50%")
   .attr("dx", "-3em")
   .attr("writing-mode", "vertical-rl")
   .text("Number of Grants");

  

  draw(); // calls the draw function
}

/**
 * DRAW FUNCTION
 * we call this everytime there is an update to the data/state
 * */
function draw() {
  // filter the data for the selectedParty
  let filteredData;
  if (state.selectedDivision !== null) {
    filteredData = state.data.filter(d => d.division === state.selectedDivision);
  }
  

  // update the scale domain (now that our data has changed)
  yScale.domain([d3.min(filteredData,d => d.award_id), d3.max(filteredData, d => d.award_id)]);

  // re-draw our yAxix since our yScale is updated with the new data
  d3.selectAll("g.y-axis")
    .transition()
    .duration(1000)
    .call(yAxis.scale(yScale)); // this updates the yAxis' scale to be our newly updated one

  // we define our line function generator telling it how to access the x,y values for each point
  const lineFunc = d3
    .line()
    .x(d => xScale(d.year))
    .y(d => yScale(d.award_id)); 

  const dot = svg
    .selectAll(".dot")
    .data(filteredData, d => d.pt_id) // use `d.year` as the `key` to match between HTML and data elements
    .join(
      enter =>
        // enter selections -- all data elements that don't have a `.dot` element attached to them yet
        enter
          .append("circle")
          .attr("class", "dot") // Note: this is important so we can identify it in future updates
          .attr("r", radius)
          .attr("fill",d => colorScale(d.award_id))
          .attr("cy", margin.top) // initial value - to be transitioned
          .attr("cx", d => xScale(d.year)),
      update => update,
      exit =>
        exit.call(exit =>
          // exit selections -- all the `.dot` element that no longer match to HTML elements
          exit
            .transition()
            .duration(400)
            .attr("r", 0)
            .remove()
        )
    )
    // the '.join()' function leaves us with the 'Enter' + 'Update' selections together.
    // Now we just need move them to the right place
      .call(
        selection =>
          selection
            .transition() // initialize transition
            .duration(1000) // duration 1000ms / 1s
            .attr("cy", d => yScale(d.award_id)) // started from the TOP, now we're here
      );
  

  const line = svg
    .selectAll("path.trend")
    .data([filteredData])
    .join(
      enter =>
        enter
          .append("path")
          .attr("class", "trend")
          .attr("opacity", 0), // start them off as opacity 0 and fade them in
      update => update, // pass through the update selection
      exit =>
        exit.call(exit =>
          // exit selections -- all the `.dot` element that no longer match to HTML elements
          exit
            .transition()
            .duration(500)
            .attr("opacity", 0)
            .remove()
      )
    )
    .call(selection =>
      selection
        .transition() // sets the transition on the 'Enter' + 'Update' selections together.
        .duration(1000)
        //I'd like to do a gradient stroke across the line.. but I tried and it's tricky!
        .attr("stroke",function(d) {return colorScale(d3.mean(filteredData,d=>d.award_id));  })
        .attr("opacity", 1)
        .attr("d", d => lineFunc(d))
    );
  // we try an area function
  const areaFunc = d3.area()
    .x(function(d) { return xScale(d.year); })
    .y1(function(d) { return yScale(d.award_id); })
    .y0(function(d) { return yScale(d3.min(filteredData,d=>d.award_id)); });
    
  area_plot = svg2
    .selectAll("path.area")
    .data([filteredData])
    .join(
      enter =>
        enter
          .append("path")
          .attr("class","area")
          .attr("opacity", 0), // start them off as opacity 0 and fade them in
      update => update, // pass through the update selection
      exit => 
        exit.call(exit =>
        // exit selections -- all the `.dot` element that no longer match to HTML elements
          exit
            .transition()
            .duration(850)
            .attr("opacity", 0)
            .remove()
        )
    )
    .call(selection =>
      selection
        .transition() // sets the transition on the 'Enter' + 'Update' selections together.
        .duration(1000)
        .attr("opacity", 1)
        .attr("fill", function(d) {return colorScale(d3.mean(filteredData,d=>d.award_id));  })
        .attr("d", d => areaFunc(d))
    );
} 