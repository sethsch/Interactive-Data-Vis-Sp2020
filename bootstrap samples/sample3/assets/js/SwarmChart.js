
class SwarmChart {

    constructor(state,setGlobalState,policyType,div_name) {
      this.width = window.innerWidth * 0.7;
      this.height = window.innerHeight * 0.35;
      this.margins = { top: 40, bottom: 40, left: 20, right: 20 };
      this.yAxis_startx=60+this.margins.left;
      this.yAxis_starty= -this.margins.top +this.margins.bottom/2.5;
   
      this.svg = d3
        .select(div_name)
        .append("svg")
        .attr("width", this.width)
        .attr("height", this.height);

    /*this.legend_svg = d3.select("#legend")
        .append("svg")
        .attr("width",this.width/2)
        .attr("height", 100);

    this.legend_svg
        .append("g")
        .attr("class", "legendQuant")
        .attr("transform", "translate(0,20)");*/

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
  
    draw(state,setGlobalState,policyType,div_name) {
      
        

        const tooltip = d3.select(div_name)
            .append("div")
            .attr("class", "tooltip")
            .style("opacity", 0);

        const format = d3.format(".3s");

        // Add y scale for days since first annoucnement... this is always at 0
        const yScale = d3.scaleBand()
            .domain([policyType])
            .range([this.margins.top,this.height-this.margins.bottom])
            .paddingOuter(0.2);

        /// add x scale
        const xScale = d3.scaleLinear()
            .domain([d3.min(state.days_since_first_case),d3.max(state.days_since_first_case)]) // added extra elements for padding
            .range([ this.margins.left, this.width-this.margins.right]);

        // set up a scale to map to the circle sizes, if we want
        const baseR = 3;
        const selR = baseR*1.5;
        const regR = baseR;
        const unselR = baseR/2;

        const circScale = d3.scaleSqrt()
            .domain([d3.min(state.unpackedData,d=>d["population"]),d3.max(state.unpackedData,d=>d["population"])])
            .range([3,6]);

        const regions_list = ["South Asia", "Europe & Central Asia",
        "Middle East & North Africa","Sub-Saharan Africa","Latin America & Caribbean",
        "East Asia & Pacific","North America"]
        const colorScale_Reg = d3.scaleOrdinal()
            .domain(regions_list)
            .range(d3.schemeCategory10);

        // an alternate color scale for an index
        var indexVals = state.unpackedData.map(d=>d["soc_global_Index"]);
        var filtered_indexVals = indexVals.filter(function (el) {
            return el != null;
            });

        const scheme = d3.interpolateCividis   ;
        const colorScale_Glob = d3.scaleLinear()
            .domain([d3.min(filtered_indexVals),d3.max(filtered_indexVals)])
            .range(["blue","red"]);

        // draw the axes for the dot plot

        const xAxis_bottom = this.svg.append("g")
            .attr("class", "x-axis")
            .attr("transform", `translate(0, ${this.height-this.margins.bottom-15})`)
            .call(d3.axisBottom(xScale).ticks(10).tickFormat(function(d) {
                if (d === 0) {return "first case";}
                else {return Math.floor((Math.abs(d)+4)/7)+" weeks"; }
                }
            ))
            .call(g => g.select(".domain").remove())
            .call(g => g.selectAll(".tick").select("line").remove())
        
        xAxis_bottom.selectAll('.tick').select("text")
            .call(function(t){                
                t.each(function(d){ // for each one
                  var self = d3.select(this);
                  var s = self.text().split(' ');  // get the text and split it
                  self.text(''); // clear it out
                  self.append("tspan") // insert two tspans
                    .attr("class","week-number")
                    .attr("x", 0)
                    .attr("dy",".8em")
                    .text(s[0]);
                  self.append("tspan")
                    .attr("class","week-text")
                    .attr("x", 0)
                    .attr("dy",".8em")
                    .text(s[1]);
                })
            });
   
        const yAxis = this.svg.append("g")
            .attr("class", "y axis swarm")
            .call(d3.axisLeft(yScale))
            .attr("transform",`translate(${this.margins.left+40},${this.yAxis_starty})`)
            .call(g => g.select(".domain").remove())
            .call(g => g.selectAll(".tick").select("text").remove());
            //.selectAll(".tick text")
            //.call(g => g.select(".tick text").remove())
            //.call(this.wrap, 150)

        const policyText = this.svg.append("text")
            .attr("class","policy-type-text")
            .attr("text-anchor","start")
            .attr("transform",`translate(${xScale(56)},${this.height-this.margins.bottom*1.75})`)
            .text(policyType)

        
        // modify the tick lines appearance
        this.svg.selectAll(".tick line")
            .attr("x2", this.width)
            .attr("stroke-dasharray", "1, 2")
            .style("stroke", "lightgrey");

        // days before and after line
        this.svg.append("line")
            .attr("class","pre-post-line")
            .attr("x1",xScale(0))
            .attr("x2",xScale(0))
            .attr("y1",0)
            .attr("y2",this.height-this.margins.bottom-10);

        const beforeRange = this.svg.append("text")
            .attr("class","days-text")
            .attr("x",xScale(-4))
            .attr("y",this.height-this.margins.bottom-15)
            .attr("text-anchor","end")
            .text("before")

        const afterRange = this.svg.append("text")
            .attr("class","days-text")
            .attr("x",xScale(4))
            .attr("y",this.height-this.margins.bottom-15)
            .text("after");


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
            .text(policyType);
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
    let filteredData = state.unpackedData.filter(d=>d.event_type === policyType);
    let middle = (this.height-this.margins.bottom-this.margins.top)/2;
    // set up the force simulation parameters
    const simulation = d3.forceSimulation(filteredData)
        .force('charge', d3.forceManyBody().strength(-0.5).distanceMax(12).distanceMin(4))
        .force('x', d3.forceX().x(function(d) {
            return xScale(d['days_since_first_case']);
        }).strength(0.7))
        .force("y", d3.forceY(this.height/4).y(function(d){
            return middle*1.25;
            //return yScale(d["event_type"]);
        }).strength(0.12))
        .force('collision', d3.forceCollide().radius(5).strength(0.6));

    let swarm = this.svg;   
    // create the dots for policy events
    const dots = simulation
    .on('tick', function() {

        let u = swarm.selectAll('circle')
        .data(filteredData);

        u.join(enter=>
            enter
            .append('circle')
            .attr("class","event_dot")
            .attr("id",d=>d.policy_id)
            .attr("country",d=>d.country)
            .attr("region",d=>d.region)
            .attr('r', baseR)
            .attr("policyStart",d=>d.date_start)
            .attr("r-access",baseR)
            .attr('fill',d => colorScale_Glob(d["soc_global_Index"]))
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
                return xScale(d['days_since_first_case']);
                //return d.x;
            })
            .attr('cy', function(d) {
                return d.y;
            })
            .attr('opacity',function(d) {
                if ( state.selectedRegion !== " All" && state.selectedCountry !== " All") {
                    if (d.country === state.selectedCountry) {return 0.9;}
                    else if (d.region === state.selectedRegion) {return 0.5;}
                    else {return 0.2;}
                }
                else if (state.selectedRegion === " All" && state.selectedCountry !== " All") {
                    if (d.country === state.selectedCountry) {return 0.9;}
                    else {return 0.2;}
                }
                else if (state.selectedRegion !== " All" && state.selectedCountry === " All") {
                        if (d.region === state.selectedRegion) {return 0.9;}
                        else {return 0.2;}
                }
                else if (state.selectedRegion === " All" && state.selectedCountry === " All") {return 0.9;}
            })
            .attr('r',function(d) {
                if ( state.selectedRegion !== " All" && state.selectedCountry !== " All") {
                    if (d.country === state.selectedCountry) {return selR;}
                    else if (d.region === state.selectedRegion) {return baseR;}
                    else {return unselR;}
                }
                else if (state.selectedRegion === " All" && state.selectedCountry !== " All") {
                    if (d.country === state.selectedCountry) {return selR;}
                    else {return unselR;}
                }
                else if (state.selectedRegion !== " All" && state.selectedCountry === " All") {
                        if (d.region === state.selectedRegion) {return selR;}
                        else {return unselR;}
                }
                else if (state.selectedRegion === " All" && state.selectedCountry === " All") {return baseR;}
            })
            .attr("r-access",function(){return d3.select(this).attr("r");})
            .call(update=>
                update
                .transition()
                .duration(650)
            ),
            exit => exit.remove()
        )
        .on("mouseover", function (d) {
            var r = d3.select(this).attr("r")
            d3.select(this).attr("r",r*1.5);
            console.log("ACCESS Rval",r);
            var country = d3.select(this).attr("country")
            var parse = d3.timeParse("%Y-%m-%d")
            var format = d3.timeFormat("%Y-%m-%d")
            var policyStart = format(parse(d3.select(this).attr("policyStart")))

            var date_end_clean = "Not yet specified";
            if (String(d.date_end) !== "nan-nan-nan"){
                date_end_clean = d.date_end;
            }
            var compliance_clean = "Not specified";
            if (String(d.compliance) !== "null"){
                compliance_clean = d.compliance;
            }
            var days_case = d.days_since_first_case < 0 ? "<b>"+Math.abs(d.days_since_first_case)+"</b> days before first national case" : "<b>"+d.days_since_first_case+"</b> days after first national case"
            var days_pol = d.days_since_policies_began < 0 ? "<b>"+Math.abs(d.days_since_policies_began)+"</b> days before first national polices began" : "<b>"+d.days_since_policies_began+"</b> days after first national polices began"

            var locationData = state.allCountryCases.filter(d=>d.location===country)
            locationData = locationData.filter(d=>state.timeFormat(d.date) === policyStart)
            console.log("LCATION DATA",locationData)
        
            if(locationData.length > 0) {
              var location_totalcases = locationData[0].total_cases
              var location_totaldeaths = locationData[0].total_deaths
              var location_newcases = locationData[0].new_cases
              var location_newdeaths = locationData[0].new_deaths
            }
            else {
              var location_totalcases = "? "
              var location_totaldeaths = "? "
              var location_newcases = "? "
              var location_newdeaths = "? "
            }


            var html  =  "<b>" + d.country + "</b><br/>" +
                    //"<b> Policy ID: " + d.policy_id + "</b><br/>" +
                    //"<b> Record ID: " + d.record_id + "</b><br/>" +
                    days_case + "<br/>"+
                    days_pol + "</br>"+
                    "<b> Date start: </b>"+d.date_start + "<b> Date end: </b>" + date_end_clean + "<br/>"+
                    "<b> New cases on date: </b>" + location_newcases+ " <b>Total cases on date: </b>" + location_totalcases+ "<br/>"+
                    "<b> New deaths on date: </b>" + location_newdeaths+ " <b>Total deaths on date: </b>" + location_totaldeaths + "<br/>"+
                    d.event_description + "<br/>"
                    //+ "<b> Compliance: </b>"+compliance_clean +
                    //"<br/><b> Enforcer: </b>"+d.enforcer 

            var coordinates= d3.mouse(this);
            var x = coordinates[0];
            var y = coordinates[1];
                        

            tooltip.html(html)
                .style("left", (x+ 15) + "px")
                .style("top", (y - 28) + "px")
              .transition()
                .duration(400) // ms
                .style("opacity", .9) // started as 0!
        })
        .on("mouseout", function () {
            var r = d3.select(this).attr("r-access")
            d3.select(this).attr("r",r);

            tooltip.transition()
            .duration(300) // ms
            .style("opacity", 0); // don't care about position!
          });        
    });


    
    


           
  
    }
} ;
export { SwarmChart };

