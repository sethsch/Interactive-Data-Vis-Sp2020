// data load
// reference for d3.autotype: https://github.com/d3/d3-dsv#autoType
d3.csv("../../data/squirrelActivities.csv", d3.autoType).then(data => {
    console.log(data);
  
    /** CONSTANTS */
    // constants help us reference the same values throughout our code
    const width = window.innerWidth * 0.9,
      height = window.innerHeight / 1.5,
      paddingInner = 0.2,
      margin = { top: 20, bottom: 40, left: 75, right: 40 };
  
    /** SCALES */
    // reference for d3.scales: https://github.com/d3/d3-scale
    const xScale = d3
      .scaleLinear()
      .domain([0,d3.max(data, d => d.count)])
      .range([margin.left,width - margin.right]);
      
  
    const yScale = d3
      .scaleBand()
      .domain(data.map(d => d.activity))
      .range([height - margin.bottom, margin.top])
      .paddingInner(paddingInner);
  
    // reference for d3.axis: https://github.com/d3/d3-axis
    const yAxis = d3.axisLeft(yScale)
        .ticks(data.length)
        .tickSizeInner(5)
        .tickSizeOuter(5);
  
    /** MAIN CODE */
    const svg = d3
      .select("#d3-container")
      .append("svg")
      .attr("width", width)
      .attr("height", height);
  
    // append rects
    const rect = svg
      .selectAll("rect")
      .data(data)
      .join("rect")
      .attr("y", d => yScale(d.activity))
      .attr("x", d => margin.left)
      .attr("height", yScale.bandwidth())
      .attr("width", d => xScale(d.count));
  
    // append text
    const text = svg
      .selectAll("text")
      .data(data)
      .join("text")
      .attr("class", "label")
      // this allows us to position the text in the center of the bar
      .attr("y", d => yScale(d.activity) + (yScale.bandwidth()/4))
      .attr("x", d => xScale(d.count) - 20 )
      .text(d => d.count)
      .attr("dy", "1.25em");
  
    svg
      .append("g")
      .attr("class", "axis")
      .attr("transform", `translate(${margin.left}, 0)`)
      .call(yAxis);
    
        

  });