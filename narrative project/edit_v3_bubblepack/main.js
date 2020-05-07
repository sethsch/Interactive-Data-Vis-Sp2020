/**
 * CONSTANTS AND GLOBALS
 * */

"use strict"

const width = window.innerWidth * 0.7,
  height = window.innerHeight * 0.7,
  margin = { top: 20, bottom: 20, left: 40, right: 40 };

let svg;
let tooltip;
let view;
let focus;
let root;
let label;
let node;
//let mousePosition;

/**
 * APPLICATION STATE
 * */
let state = {
  data: null,
  hover: null,
  //mousePosition: null,
};

/**
 * LOAD DATA
 * */
d3.json("./weekly_events_bubblePack.json", d3.autotype).then(data => {
  state.data = data;
  console.log("pre-filtered",state.data);
  init();
});

/**
 * INITIALIZING FUNCTION
 * this will be run *one time* when the data finishes loading in
 * */



function init() {

  selectWeek();
  drawZoomPlot();

  /*const container = d3.select("#d3-container").style("position", "relative");

  const colorScale = d3.scaleOrdinal(d3.schemeDark2);

  tooltip = container
  .append("div")
  .attr("class", "tooltip")
  .attr("width", 100)
  .attr("height", 100)
  .style("position", "absolute");

  svg = container
    .append("svg")
    .attr("width", width)
    .attr("height", height);


  // + CREATE YOUR ROOT HIERARCHY NODE
  const root = d3
    .hierarchy(state.data) 
    .sum(d => d.num_policies) 
    .sort((a, b) => b.num_policies - a.num_policies);


  // + CREATE YOUR LAYOUT GENERATOR
  const circlePack = d3
    .pack()
    .size([width, height])
    .padding(5);    
    
  // + CALL YOUR LAYOUT FUNCTION ON YOUR ROOT DATA
  circlePack(root);

  console.log(root);

  // + CREATE YOUR GRAPHICAL ELEMENTS
  
  const circle = svg
    .selectAll("g")
    .data(root.descendants())
    .join("g")
    .attr("transform", d => `translate(${d.x},${d.y})`);

  circle
    .append("circle")
    .attr("class", "nodeCircle")
    .attr("fill", d => {
      return colorScale(d.depth)
    })
    .attr("r", d => d.r)
    .on("mousemove", d => {
      state.hover = {
        name: d.data.name,
        num_policies: d.data.num_policies,
        title: `${d
          .ancestors()
          .reverse()
          .map(d => d.data.name)
          .join("/")}`,
      };
      draw();
    });

  draw(); */

};
 

/**
 * DRAW FUNCTION
 * we call this everytime there is an update to the data/state
 * */
/*
  // + UPDATE TOOLTIP
 function draw() {
    if (state.hover) {
      tooltip
        .html(
          `
          <div>Name: ${state.hover.name}</div>
          <div>Number of Policies: ${state.hover.num_policies}</div>
          <div>Hierarchy Path: ${state.hover.title}</div>
        `
        )
        .transition()
        .duration(100)
        .style(
          "transform", () => {
            const [mx, my] = d3.mouse(svg.node());
            return `translate(${mx+10}px,${my}px)`
          }

        );
    }
  


}
*/
function selectWeek() {
  state.data = state.data["2020-03-10 00:00:00_2020-03-17 00:00:00"];
  console.log("one weeks data",state.data);
}
let format = d3.format(",d")
let color = d3.scaleSequential([6, -1], d3.interpolateGreens)

let pack = data => d3.pack()
  .size([width - 2, height - 2])
  .padding(5)
(d3.hierarchy(data)
  .sum(d => d.num_policies)
  .sort((a, b) => b.num_policies - a.num_policies))


function drawZoomPlot() {
  root = pack(state.data);
  focus = root;
  view;

  svg = d3.select("#d3-container")
      .append("svg")
      .attr("viewBox", `-${width / 3} -${height / 2} ${width} ${height}`)
      .style("display", "block")
      .style("margin", "0 -14px")
      .style("background", "white")
      .style("cursor", "pointer")
      .on("click", () => zoom(root));
  
  /*const shadow = Element.attachShadow();
  var shadow = document.querySelector('#outside').createShadowRoot();

  svg.append("filter")
      .attr("id", shadow.id)
    .append("feDropShadow")
      .attr("flood-opacity", 0.4)
      .attr("flood-color", "#282735")
      .attr("stdDeviation", 2)
      .attr("dx", 0)
      .attr("dy", 1);*/

  node = svg.append("g")
    .selectAll("circle")
    .data(root.descendants().slice(1))
    .join("circle")
        //.attr("filter", shadow)
      .attr("fill", d => d.children ? color(d.depth) : getColor(d.num_policies))
      .attr("pointer-events", d => !d.children ? "none" : null)
        .on("mouseover", function() { d3.select(this)
          .transition("chart-stroke-update")
          .duration(200)
          .attr("stroke-width", "2")
          .attr("stroke", "yellow"); })
      .on("mouseout", function() { d3.select(this)
          .transition("chart-stroke-update")
          .duration(200)
          .attr("stroke", d => color(d.depth))
          .attr("stroke-width", "1"); })
      .on("click", d => focus !== d && (zoom(d), d3.event.stopPropagation()));
 

  label = svg.append("g")
      .style("font", "14px sans-serif")
      .style("font-family", "Helvetica")
      .attr("pointer-events", "none")
      .attr("text-anchor", "middle")
    .selectAll("text")
    .data(root.descendants())
    .join("g")
        .classed("labels",true)
  //.attr("filter", shadow)
      .style("fill-opacity", d => d.parent === root ? 1 : 0)
      .style("display", d => d.parent === root ? "inline" : "none")
      .style("fill", "#fff")
      .style("font-weight", "bold")
    label.append("text")
        .text(d=> d.data.name)
        .attr("dy",-6);
  label.append("text")        
        .text(d => d.data.num_policies)
        .attr("dy",+24)
        .style("font", "11px sans-serif");


  zoomTo([root.x, root.y, root.r * 3.5]);

};


function getColor(value) {
  let color = "";
    if (value < 2) {
      color = "#D43D51";
    } else if (value < 3) {
      color = "#EB7A52";
    } else if (value < 4) {
      color = "#F8B267";
    } else if (value < 5) {
      color = "#FFE483";
      } else if (value < 6) {
      color = "#DFEDCD";
    }
  return color;
};
 
function zoomTo(v) {
    const k = width / v[2];

    view = v;

    label.attr("transform", d => `translate(${(d.x - v[0]) * k},${(d.y - v[1]) * k})`);
    node.attr("transform", d => `translate(${(d.x - v[0]) * k},${(d.y - v[1]) * k})`);
    node.attr("r", d => d.r * k);
};

function zoom(d) {
    const focus0 = focus;

    focus = d;

    const transition = svg.transition()
        .duration(d3.event.altKey ? 7500 : 750)
        .tween("zoom", d => {
          const i = d3.interpolateZoom(view, [focus.x, focus.y, focus.r * 2]);
          return t => zoomTo(i(t));
        });

    label
      .filter(function(d) { return d.parent === focus || this.style.display === "inline"; })
      .transition(transition)
        .style("fill-opacity", d => d.parent === focus ? 1 : 0)
        .on("start", function(d) { if (d.parent === focus) this.style.display = "inline"; })
        .on("end", function(d) { if (d.parent !== focus) this.style.display = "none"; });
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