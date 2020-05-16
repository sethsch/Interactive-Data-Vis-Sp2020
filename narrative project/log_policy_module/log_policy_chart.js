class LogPlot {

  constructor(state,setGlobalState,policyType,div_name) {
    this.width = window.innerWidth * 0.6;
    this.height = window.innerHeight * 0.4;
    this.margins = { top: 50, bottom: 60, left: 120, right: 40 };
    this.duration = 3000;
 
    this.svg = d3
      .select(div_name)
      .append("svg")
      .attr("width", this.width)
      .attr("height", this.height);

  }


  draw(state,setGlobalState,policyType,div_name) {
    


    const tooltip = d3.select(div_name).append("div")
    .attr("class", "tooltip")
    .style("opacity", 0);

    const format = d3.format(".3s");
    
  // circScale can be used for....
    const circScale = d3.scaleSqrt()
      .domain([d3.min(state.unpackedData, d=>d.GDP_percap), d3.max(state.unpackedData,d=>d.GDP_percap)])
      .range([2,14])

  //  color scale on indexes
    const indexCol = state.index_vars[state.selectedIndex];
    console.log("dropdown reads: ",state.selectedIndex,"column selected: ",indexCol);
    const indexVals = state.unpackedData.map(d=>d[indexCol]);
    const filtered_indexVals = indexVals.filter(function (el) {
        return el != null;
        });
    //var colorset = ["#a50026","#a70226","#a90426","#ab0626","#ad0826","#af0926","#b10b26","#b30d26","#b50f26","#b61127","#b81327","#ba1527","#bc1727","#be1927","#c01b27","#c21d28","#c41f28","#c52128","#c72328","#c92529","#cb2729","#cc2929","#ce2b2a","#d02d2a","#d12f2b","#d3312b","#d4332c","#d6352c","#d7382d","#d93a2e","#da3c2e","#dc3e2f","#dd4030","#de4331","#e04532","#e14733","#e24a33","#e34c34","#e44e35","#e55136","#e75337","#e85538","#e95839","#ea5a3a","#eb5d3c","#ec5f3d","#ed613e","#ed643f","#ee6640","#ef6941","#f06b42","#f16e43","#f17044","#f27346","#f37547","#f37848","#f47a49","#f57d4a","#f57f4b","#f6824d","#f6844e","#f7864f","#f78950","#f88b51","#f88e53","#f89054","#f99355","#f99557","#f99858","#fa9a59","#fa9c5b","#fa9f5c","#fba15d","#fba35f","#fba660","#fba862","#fcaa63","#fcad65","#fcaf66","#fcb168","#fcb369","#fcb56b","#fdb86d","#fdba6e","#fdbc70","#fdbe72","#fdc073","#fdc275","#fdc477","#fdc678","#fdc87a","#fdca7c","#fecc7e","#fecd80","#fecf81","#fed183","#fed385","#fed587","#fed689","#fed88a","#feda8c","#fedb8e","#fedd90","#fede92","#fee094","#fee196","#fee397","#fee499","#fee69b","#fee79d","#fee89f","#feeaa1","#feeba3","#feeca4","#feeda6","#feeea8","#fef0aa","#fef1ac","#fdf2ae","#fdf2b0","#fdf3b2","#fdf4b4","#fcf5b6","#fcf6b8","#fbf6ba","#fbf7bc","#faf7be","#faf8c0","#f9f8c2","#f9f8c4","#f8f9c6","#f7f9c8","#f7f9ca","#f6f9cc","#f5f9ce","#f4f9d0","#f3f9d2","#f2f9d4","#f1f8d6","#f0f8d8","#eff8da","#edf8dc","#ecf7dd","#ebf7df","#eaf6e1","#e8f6e2","#e7f5e4","#e6f5e5","#e4f4e7","#e3f3e8","#e1f3e9","#e0f2ea","#def1eb","#dcf1ec","#dbf0ed","#d9efed","#d7eeee","#d5eeee","#d4edef","#d2ecef","#d0ebef","#ceeaef","#cce9ef","#cae8ef","#c8e7ef","#c6e6ef","#c5e5ef","#c3e4ee","#c0e3ee","#bee2ee","#bce1ed","#bae0ed","#b8deec","#b6ddeb","#b4dceb","#b2dbea","#b0d9e9","#aed8e9","#acd7e8","#aad5e7","#a7d4e6","#a5d2e6","#a3d1e5","#a1d0e4","#9fcee3","#9dcde2","#9bcbe1","#99c9e1","#96c8e0","#94c6df","#92c4de","#90c3dd","#8ec1dc","#8cbfdb","#8abeda","#88bcd9","#86bad8","#84b8d7","#82b6d6","#7fb5d5","#7db3d4","#7bb1d3","#79afd2","#77add1","#75abd0","#73a9cf","#71a7ce","#6fa5cd","#6da3cc","#6ca1cb","#6a9fca","#689dc9","#669bc8","#6499c7","#6297c5","#6094c4","#5f92c3","#5d90c2","#5b8ec1","#598cc0","#5889bf","#5687be","#5485bc","#5383bb","#5180ba","#507eb9","#4e7cb8","#4d7ab7","#4c77b5","#4a75b4","#4973b3","#4870b2","#466eb1","#456cb0","#4469ae","#4367ad","#4264ac","#4162ab","#4060aa","#3f5da8","#3e5ba7","#3d58a6","#3c56a5","#3b54a4","#3a51a2","#394fa1","#384ca0","#374a9f","#37479e","#36459c","#35429b","#34409a","#333d99","#333b97","#323896","#313695"];
    //console.log("INDEX VALS",indexVals, "FILTERED", filtered_indexVals);
  
    const colorScale = d3.scaleQuantize()
        .domain([d3.min(filtered_indexVals),d3.max(filtered_indexVals)])
        .range(d3.schemeBrBG[6]);

    //console.log("CIRCLE DOMAIN",circScale.domain());

    const yScale = d3.scaleLog()
      //EDIT: configure take the cases data domain
      .domain([10,3500000])
      .range([this.height-this.margins.bottom,this.margins.top]);

    /// add x scale
    const xScale = d3.scaleLinear()
      .domain([d3.min(state.days_since_first_case),d3.max(state.days_since_first_case)]) // added extra elements for padding
      .range([ this.margins.left, this.width - this.margins.right]);

    // draw the x Axis for the plot
    const xAxis = this.svg.append("g")
      .attr("class", "x-axis")
      .attr("transform", `translate(0, ${this.height-this.margins.bottom})`)
      .call(d3.axisBottom(xScale).ticks(10).tickFormat(function(d) {
          if (d === 0) {return "first case";}
          else {return Math.floor((Math.abs(d)+4)/7)+" weeks"; }
          }
      ))
      .call(g => g.select(".domain").remove())
      .call(g => g.selectAll(".tick").select("line").remove())
  
      xAxis.selectAll('.tick').select("text")
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


    // draw the y axis for the plot
    // ticks parameters set up for the log scale

    const yAxis = this.svg.append("g")
      .attr("class", "y-axis")
      .attr("transform", `translate(${this.margins.left}, 0)`)
      .call(d3.axisLeft(yScale).ticks(5,",d").tickSize(1,0))

    // add the y axis title
    this.svg.append("text")
      .attr("class","y-axis-title")
      .attr("transform",`translate(${this.margins.left-70},${this.margins.top+10})`)
      .text("Global cases");

    function make_y_gridlines() {
        return d3.axisLeft(yScale)
          .ticks(5)
      };

    //add gridlines
    this.svg.append("g")
      .data(yScale.ticks(5))
      .attr("class","grid")
      .attr("transform", `translate(${this.margins.left}, 0)`)
      .style("stroke-dasharray",("5,0"))
      .call(make_y_gridlines()
            .tickSize(-(this.width-this.margins.right-this.margins.left))
            .tickFormat("")
          );

    // add the before after line
    this.svg.append("line")
        .attr("class","pre-post-line")
        .style("stroke","#595959")
        .style("stroke-width",2.5)
        .attr("x1",xScale(0))
        .attr("x2",xScale(0))
        .attr("y1",this.margins.top)
        .attr("y2",this.height-this.margins.bottom);

      // add before and after text instead of axis title
      // move this styling into CSS
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


    const wrap = function wrap(text, width) {
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

    
    const policyText = this.svg.append("text")
      .attr("class","policy-title")
      .attr("transform",`translate(${xScale(xScale.domain()[1])},${yScale(200)})`)
      .style("font","16px sans-serif")
      .style("font-weight","bold")
      .style("font-family","Avenir")
      .attr("text-anchor","end")
      .text(policyType);
      //.call(wrap, 180);

    let filteredData = state.unpackedData.filter(d=>d.event_type === policyType);
    // add the dots to the plot

    const dots = this.svg
        .selectAll(".event")
        .data(filteredData)
        .join(enter =>
          enter
            .append("circle")
            .attr("class","event")
            .attr("id", (d,i) =>String(d.policy_id)+"_"+String(d.record_id))
            // EDIT: probably want to stylize with CSS to make it more flexible
            //.attr("fill",d=>state.logColors[d.event_type])
            .attr("fill",d=>colorScale( d[state.index_vars[state.selectedIndex]] ) )
            // EDIT: this opacity highlighting function can change if we're doing small multiples...
            .attr("opacity", 0.6)
            .attr("r", 0)
            .attr("cx", d=>xScale(d.days_since_first_case))
            .attr("cy", function(d,i) { 
              var parser = d3.timeParse("%Y-%m-%d");
              var start = parser(d.date_start);
              var cases = state.casesLookup[start].Cases;
              return yScale(cases);})
            .call(enter =>
              enter
              .transition()
              .duration(500)
              .attr("r", 4)
              .delay(function(d) {return state.lookupdates.indexOf(String(state.parser(d.date_start)))*10;} )

          ),
        update =>
          update
            .call(update=>
              update
              .transition()
              .duration(500)
              .attr('fill',d => d[state.index_vars[state.selectedIndex]] === null ? 'grey' : colorScale(d[state.index_vars[state.selectedIndex]]))
              //.attr('opacity',d => d[state.index_vars[state.selectedIndex]] === null ? 0.2 : 0.7)
              /*.attr("fill", function(d,i) { 
                if (state.selectedPolicyTypes.includes(d.event_type)) {return state.logColors[d["event_type"]];}
                else {return "#7C7B7B";}
              })
              .attr("r", function(d,i) { 
                if (state.selectedPolicyTypes.includes(d.event_type)) {return 7;}
                else {return 3.5;}
              })
              .attr("opacity", function(d,i) { 
                if (state.selectedPolicyTypes.includes(d.event_type)) {return 0.9;}
                else {return 0.25;}*/
              )
        );
      // Add the mouseover features
      dots.on("mouseover", function (d) {
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

        var html  =  "<b>" + d.country + "</b><br/>" +
                     //"<b> Policy ID: " + d.policy_id + "</b><br/>" +
                     //"<b> Record ID: " + d.record_id + "</b><br/>" +
                    days_case + "<br/>"+
                    days_pol + "</br>"+
                    "<b> Date start: </b>"+d.date_start + "<b> Date end: </b>" + date_end_clean + "<br/>"+
                    d.event_description + "<br/>"
                    //+ "<b> Compliance: </b>"+compliance_clean +
                    //"<br/><b> Enforcer: </b>"+d.enforcer 
    
        tooltip.html(html)
            .style("left", (d3.event.pageX + 15) + "px")
            .style("top", (d3.event.pageY - 28) + "px")
          .transition()
            .duration(400) // ms
            .style("opacity", .9) // started as 0!
      });
      
      dots.on("mouseout", function () {
        tooltip.transition()
        .duration(300) // ms
        .style("opacity", 0); // don't care about position!
      });    

  }
} ;
export { LogPlot };