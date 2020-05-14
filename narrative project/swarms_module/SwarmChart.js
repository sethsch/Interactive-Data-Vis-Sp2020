
class SwarmChart {

    constructor(state,setGlobalState,div_name) {
      this.width = window.innerWidth * 0.8;
      this.height = window.innerHeight * 0.4;
      this.margins = { top: 80, bottom: 40, left: 40, right: 40 };
      this.yAxis_startx=60;
      this.yAxis_starty= -this.margins.top +this.margins.bottom/2;
      this.duration = 3000;
   
      this.svg = d3
        .select(div_name)
        .append("svg")
        .attr("width", this.width)
        .attr("height", this.height);

    this.legend_svg = d3.select("#legend")
        .append("svg")
        .attr("width",this.width/2)
        .attr("height", 100);

    this.legend_svg
        .append("g")
        .attr("class", "legendQuant")
        .attr("transform", "translate(0,20)");

    this.wrap = function wrap(text, width) {
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

    }
  
    draw(state,setGlobalState,div_name) {
      
        

        const tooltip = d3.select(div_name)
            .append("div")
            .attr("class", "tooltip")
            .style("opacity", 0);

        const format = d3.format(".3s");

        // Add y scale for days since first annoucnement... this is always at 0
        const yScale = d3.scaleBand()
            .domain([state.policyType])
            .range([this.margins.top,this.height-this.margins.bottom])
            .paddingOuter(0.2)
            .paddingInner(0.4);

        /// add x scale
        const xScale = d3.scaleLinear()
            .domain([d3.min(state.days_since_first_case),d3.max(state.days_since_first_case)]) // added extra elements for padding
            .range([ this.margins.left, this.width-this.margins.right]);

        // set up a scale to map to the circle sizes, if we want
        const circScale = d3.scaleSqrt()
            .domain([d3.min(state.unpackedData,d=>d["population"]),d3.max(state.unpackedData,d=>d["population"])])
            .range([3,6]);

        const regions_list = ["South Asia", "Europe & Central Asia",
        "Middle East & North Africa","Sub-Saharan Africa","Latin America & Caribbean",
        "East Asia & Pacific","North America"]
        //EDIT: to create categoriacl color scale for regions
        const colorScale = d3.scaleOrdinal()
            .domain(regions_list)
            .range(d3.schemeCategory10);

        // draw the axes for the dot plot
        const xAxis_bottom = this.svg.append("g")
            .attr("class", "x-axis swarm")
            .attr("transform", `translate(0, ${this.height-this.margins.bottom})`)
            .call(d3.axisBottom(xScale))
            .call(g => g.select(".domain").remove())
            .call(g => g.selectAll(".tick").select("line").remove());

        /*const xAxis_top = this.svg.append("g")
            .attr("class", "x-axis swarm")
            .attr("transform", `translate(0, ${this.margins.top})`)
            .call(d3.axisTop(xScale))
            .call(g => g.select(".domain").remove())
            .call(g => g.selectAll(".tick").select("line").remove());*/

        const xAxis_titleTop = this.svg.append("text")
            .attr("class","x-axis-title-top")
            .attr("transform",`translate(${xScale(0)},10)`)
            .style("font","14px sans-serif")
            .style("font-weight","bold")
            .style("font-family","Avenir")
            .text("Days since 1st case of COVID-19 in country");


        const yAxis = this.svg.append("g")
            .attr("class", "y axis swarm")
            .call(d3.axisLeft(yScale))
            .attr("transform",`translate(${this.yAxis_startx},${this.yAxis_starty})`)
            .style("font","14px sans-serif")
            .style("font-weight","bold")
            .style("font-family","Avenir")
            .call(g => g.select(".domain").remove())
            .selectAll(".tick text")
            .call(this.wrap, 150)
        
        // modify the tick lines appearance
        this.svg.selectAll(".tick line")
            .attr("x2", this.width)
            .attr("stroke-dasharray", "1, 2")
            .style("stroke", "lightgrey");

        // days before and after line
        this.svg.append("line")
            .attr("class","pre-post-line")
            .style("stroke","#595959")
            .style("stroke-width",4)
            .attr("x1",xScale(0))
            .attr("x2",xScale(0))
            .attr("y1",this.margins.top)
            .attr("y2",this.height-this.margins.bottom);

        // rects for coloration of pre-post areas
        /*this.svg.append("rect")
            .attr("class","pre-covid-region")
            .style("fill","#b6e3aa")
            .style("opacity",0.04)
            .attr("x",this.yAxis_startx)
            .attr("y",this.margins.top)
            .attr("width",xScale(0)-this.yAxis_startx)
            .attr("height",this.height-this.margins.bottom-this.margins.top);

        this.svg.append("rect")
            .attr("class","post-covid-region")
            .style("fill","e3a8a8")
            .style("opacity",0.04)
            .attr("x",xScale(0))
            .attr("y",this.margins.top)
            .attr("width",xScale(d3.max(state.days_since_first_case))-this.margins.right)
            .attr("height",this.height-this.margins.bottom-this.margins.top);*/

      
      // consider how to alter this
      /*const policyText = this.svg.append("text")
            .attr("class","policy-title")
            .attr("transform",`translate(${xScale(xScale.domain()[1])},${this.margins.top-5})`)
            .style("font","16px sans-serif")
            .style("font-weight","bold")
            .style("font-family","Avenir")
            .attr("text-anchor","end")
            .text(state.policyType);
            //.call(wrap, 180);*/
  

    // add the legend
    /*const legend = d3.legendColor()
            .labelFormat(d3.format(",.0f")) // EDIT
            //.useClass(true)
            .title("This placeholder text will eventually access a description of the index")
            .titleWidth(this.width/3)
            .shapeWidth(this.width/16)
            .scale(colorScale)
            .orient("horizontal");

    this.legend_svg.select(".legendQuant")
            .call(legend);*/
  
    
    // plot only the finally filtered data 
    state.filteredData = state.unpackedData.filter(d=>d.event_type === state.policyType);
    
    // set up the force simulation parameters
    const simulation = d3.forceSimulation(state.filteredData)
        .force('charge', d3.forceManyBody().strength(0.8).distanceMax(60))
        .force('x', d3.forceX().x(function(d) {
            return xScale(d['days_since_first_case']);
        }).strength(0.24))
        .force("y", d3.forceY(this.height/2).y(function(d){
            return yScale(d["event_type"]);
        }).strength(0.12))
        .force('collision', d3.forceCollide().radius(8).strength(0.9));

    let swarm = this.svg;   
    // create the dots for policy events
    const dots = simulation
    .on('tick', function() {

        let u = swarm.selectAll('circle')
        .data(state.filteredData);

        u.join(enter=>
            enter
            .append('circle')
            .attr("class","event_dot")
            .attr("id",d=>d.policy_id)
            .attr("country",d=>d.country)
            .attr("region",d=>d.region)
            .attr('r', 5)
            .attr('fill',d => colorScale(d.region))
            .attr('opacity',0.6)
            .call(enter=>
                enter
                .attr('cx', function(d) {
                    //return xScale(d['days_since_first_case']);
                    return d.x;
                })
                .attr('cy', function(d) {
                    return d.y;
                })
            ),
            update =>
            update
            .attr('cx', function(d) {
                //return xScale(d['days_since_first_case']);
                return d.x;
            })
            .attr('cy', function(d) {
                return d.y;
            })
            .attr('opacity',function(d) {
                if ( state.selectedRegion !== ".All" && state.selectedCountry !== ".All") {
                    if (d.region === state.selectedRegion) {return 0.9;}
                    else if (d.country === state.selectedCountry) {return 0.9;}
                    else {return 0.2;}
                }
                else if (state.selectedRegion === ".All" && state.selectedCountry !== ".All") {
                    if (d.country === state.selectedCountry) {return 0.9;}
                    else {return 0.2;}
                }
                else if (state.selectedRegion !== ".All" && state.selectedCountry === ".All") {
                        if (d.region === state.selectedRegion) {return 0.9;}
                        else {return 0.2;}
                }
                else if (state.selectedRegion === ".All" && state.selectedCountry === ".All") {return 0.9;}
            })
            .attr('r',function(d) {
                if ( state.selectedRegion !== ".All" && state.selectedCountry !== ".All") {
                    if (d.region === state.selectedRegion) {return 7;}
                    else if (d.country === state.selectedCountry) {return 7;}
                    else {return 1.5;}
                }
                else if (state.selectedRegion === ".All" && state.selectedCountry !== ".All") {
                    if (d.country === state.selectedCountry) {return 7;}
                    else {return 1.5;}
                }
                else if (state.selectedRegion !== ".All" && state.selectedCountry === ".All") {
                        if (d.region === state.selectedRegion) {return 7;}
                        else {return 1.5;}
                }
                else if (state.selectedRegion === ".All" && state.selectedCountry === ".All") {return 5;}
            })
            .call(update=>
                update
                .transition()
                /*.attr('opacity',function(d) {
                    if ( state.selectedRegion !== ".All" || state.selectedCountry !== ".All") {
                        if (d.region === state.selectedRegion) {return 0.9;}
                        if (d.country === state.selectedCountry) {return 0.9;}
                        else {return 0.2;}
                    }
                    else if (state.selectedRegion === ".All" && state.selectedCountry !== ".All") {
                        if (d.country === state.selectedCountry) {return 0.9;}
                        else {return 0.2;}
                    }
                    else if (state.selectedRegion !== ".All" && state.selectedCountry === ".All") {
                            if (d.region === state.selectedRegion) {return 0.9;}
                            else {return 0.2;}
                    }
                    else if (state.selectedRegion === ".All" && state.selectedCountry === ".All") {return 0.9;}
                })
                .attr('r',function(d) {
                    if ( state.selectedRegion !== ".All" || state.selectedCountry !== ".All") {
                        if (d.region === state.selectedRegion) {return 7;}
                        if (d.country === state.selectedCountry) {return 7;}
                        else {return 1.5;}
                    }
                    else if (state.selectedRegion === ".All" && state.selectedCountry !== ".All") {
                        if (d.country === state.selectedCountry) {return 7;}
                        else {return 1.5;}
                    }
                    else if (state.selectedRegion !== ".All" && state.selectedCountry === ".All") {
                            if (d.region === state.selectedRegion) {return 7;}
                            else {return 1.5;}
                    }
                    else if (state.selectedRegion === ".All" && state.selectedCountry === ".All") {return 5;}
                })*/
            ),
            exit => exit.remove()
        )
        .on("mouseover", function (d) {
            var date_end_clean = "Not yet specified";
            if (String(d.date_end) !== "nan-nan-nan"){
                date_end_clean = d.date_end;
            }
            var compliance_clean = "Not specified";
            if (String(d.compliance) !== "null"){
                compliance_clean = d.compliance;
            }
            var html  =  "<b>" + d.country + "</b><br/>" +
                        "<b> Days since first case: </b>"+d.days_since_first_case + "<br/>"+
                        "<b> Days since first policy: </b>"+d.days_since_policies_began + "<br/>"+
                        "<b> Date start: </b>"+d.date_start + "<b> Date end: </b>" + date_end_clean + "<br/>"+
                        d.event_description + "<br/>"+ "<b> Compliance: </b>"+compliance_clean +
                        "<br/><b> Enforcer: </b>"+d.enforcer 
        
            tooltip.html(html)
                .style("left", (d3.event.pageX + 15) + "px")
                .style("top", (d3.event.pageY - 28) + "px")
              .transition()
                .duration(400) // ms
                .style("opacity", .9) // started as 0!
        })
        .on("mouseout", function () {
            tooltip.transition()
            .duration(300) // ms
            .style("opacity", 0); // don't care about position!
          });        
    });


    
    


           
  
    }
} ;
export { SwarmChart };

