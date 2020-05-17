
class SwarmChart {

    constructor(state,setGlobalState,policyType,div_name) {
      //this.width = window.innerWidth * 0.7;
      this.width = 860;
      this.height = 300;
      //this.height = window.innerHeight * 0.35;

      this.margins = { top: 40, bottom: 40, left: 40, right: 40 };
      this.yAxis_startx=60+this.margins.left;
      this.yAxis_starty= -this.margins.top +this.margins.bottom/2.5;
   
      this.svg = d3
        .select(div_name)
        .append("svg")
        .attr("width", this.width)
        .attr("height", this.height);

    /*this.legend_area = this.svg.select("#legend_1")
        .append("svg")
        .attr("width",this.width)
        .attr("height", 120);

    this.legend_area
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
        const baseR = 5;
        const selR = baseR*1.5;
        const regR = baseR;
        const unselR = baseR/2;

        /*const circScale = d3.scaleSqrt()
            .domain([d3.min(state.unpackedData,d=>d["population"]),d3.max(state.unpackedData,d=>d["population"])])
            .range([3,6]);*/

        const regions_list = ["South Asia", "Europe & Central Asia",
        "Middle East & North Africa","Sub-Saharan Africa","Latin America & Caribbean",
        "East Asia & Pacific","North America"]

        //const scheme = d3.schemeRdGy;
        // trying an alternate, where this is populated by national deaths, US current max at 1.5M
        let natl_cases = Object.values(state.unpackedData.map(d=>d.natl_cases_total));
        function onlyUnique(value, index, self) { 
            return self.indexOf(value) === index;
        }
        // color scheme setup
        var unique = natl_cases.filter( onlyUnique ).sort(d3.ascending); // returns ['a', 1, 2, '1']
        //console.log("uniquedta",unique);
        let normalized = []
        for (var i = 0; i<natl_cases.length; i++){
            let x = natl_cases[i]
            if (x === 0) {normalized.push(Math.log10(1));}
            else if (x === null) {normalized.push(Math.log10(1));}
            else {normalized.push(Math.log10(x))};
        }
        const colorsRdGy = ['#b2182b','#ef8a62','#fddbc7','#e0e0e0','#999999','#4d4d4d']
        const colorsRdBu = ['#67001f','#b2182b','#d6604d','#f4a582','#f7f7f7','#d1e5f0','#92c5de','#4393c3','#2166ac','#053061']
        //console.log("NATIONAL CASES ARRAY",normalized);
        const colorScale_Reg = d3.scaleQuantile()
            .domain(normalized)
            .range(colorsRdGy.reverse());


        
        /*// an alternate color scale for an index
        var indexVals = state.unpackedData.map(d=>d["soc_global_Index"]);
        var filtered_indexVals = indexVals.filter(function (el) {
            return el != null;
            });

        const colorScale_Glob = d3.scaleSequential()
            .domain([d3.min(filtered_indexVals),d3.max(filtered_indexVals)])
            .range([scheme(0),scheme(1)]);*/

        // draw the axes for the dot plot

        const xAxis_bottom = this.svg.append("g")
            .attr("class", "x-axis")
            .attr("transform", `translate(0, ${this.height-this.margins.bottom-15})`)
            .call(d3.axisBottom(xScale).ticks(10).tickFormat(function(d) {
                if (d === 0) {return "first national case";}
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
                self.append("tspan") // insert two tspans
                    .attr("class","week-number")
                    .attr("x", 0)
                    .attr("dy",".8em")
                    .text(s[1]);
                  self.append("tspan")
                    .attr("class","week-text")
                    .attr("x", 0)
                    .attr("dy",".8em")
                    .text(s[2]);
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
            .attr("transform",`translate(${xScale(-100)},${this.margins.top-15})`)
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
            .useClass(true)
            .title("Red = many natl cases @ policy; Black = few")
            .titleWidth(this.width/4)
            .shapeWidth(this.width/8)
            .scale(colorScale_Reg)
            .orient("horizontal");

    this.legend_area.select(".legendQuant")
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
            .attr("policyStart",d=>d.date_start)
            .attr('r', baseR)
            //.attr("r-access",baseR)
            //.attr('fill',d => colorScale_Glob(d["soc_global_Index"]))
            .attr("fill",d=>colorScale_Reg(d.natl_cases_total))
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
                if (!state.selectedPolicies.includes(d.policy_id)) {return 0.2;}
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
                if (!state.selectedPolicies.includes(d.policy_id)) {return 1.75;}
                else if ( state.selectedRegion !== " All" && state.selectedCountry !== " All") {
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
            //.attr("r-access",function(){return d3.select(this).attr("r");})
            .call(update=>
                update
                .transition()
                .duration(650)
            ),
            exit => exit.remove()
        )
        .on("mouseover", function (d) {

            // since we're doing a lot with the radius already, we can show its size bigger like this
            // because otherwise the constant simulation update messes with the hover
            var fillC = d3.select(this).attr("fill")
            //var fillC = "#e3c96b"
            d3.select(this)
                .attr("stroke", fillC)
                .attr('stroke-width', 4)

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
              var location_totalcases = d.natl_cases_total
              var location_totaldeaths = d.natl_deaths_total
              var location_newcases = "? "
              var location_newdeaths = "? "
            }


            var html  =  "<b>" + d.country + "</b><br/>" +
                    //"<b> Policy ID: " + d.policy_id + "</b><br/>" +
                    //"<b> Record ID: " + d.record_id + "</b><br/>" +
                    days_case + "<br/>"+
                    days_pol + "</br>"+
                    "<b> Date start: </b>"+d.date_start + "<b> Date end: </b>" + date_end_clean + "<br/>"+
                    //"<b> New cases on date: </b>" + location_newcases+ " <b>Total cases on date: </b>" + location_totalcases+ "<br/>"+
                    //"<b> New deaths on date: </b>" + location_newdeaths+ " <b>Total deaths on date: </b>" + location_totaldeaths + "<br/>"+
                    d.event_description + "<br/>"
                    //+ "<b> Compliance: </b>"+compliance_clean +
                    //"<br/><b> Enforcer: </b>"+d.enforcer 
        
            var coordinates= d3.mouse(this);
            var x = coordinates[0];
            var y = coordinates[1];        
            
            tooltip.html(html)
                .style("left", (x+12) + "px")
                .style("top", (y -18) + "px")
                //.style("left", (d3.event.pageX + 15) + "px")
                //.style("top", (d3.event.pageY - 28) + "px")
              .transition()
                .duration(400) // ms
                .style("opacity", .9) // started as 0!
        })
        .on("mouseout", function () {
            
            d3.select(this).attr("stroke","none");

            tooltip.transition()
            .duration(300) // ms
            .style("opacity", 0); // don't care about position!
          });        
    });


    
    


           
  
    }
} ;
export { SwarmChart };

