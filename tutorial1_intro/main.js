// load in csv
d3.csv("data/mmad_reports.csv").then(data => {
    // once the data loads, console log it
    console.log("data", data);
  
    // select the `table` container in the HTML
    const table = d3.select("#d3-table");

    /** HEADER */
    const thead = table.append("thead");
    thead
      .append("tr")
      .append("th")
      .attr("colspan", "4")
      .text("");
      
    thead
      .append("tr")
      .selectAll("th")
      .data(data.columns)
      .join("td")
      .text(d => d);
  
    /** BODY */
    // rows
    const rows = table
      .append("tbody")
      .selectAll("tr")
      .data(data)
      .join("tr");
  
    // cells
    rows
      .selectAll("td")
      .data(d => Object.values(d))
      .join("td")
      // set a class attribute for all cells where text contains 'opponent'
      .attr("class", d => String(d).includes("opponent")  ? 'high' : null) 
      .text(d => d);

    // set a class attribute for all rows where 'issue' column contains 'revolution'
    const revolution_rows = rows
        .attr("class", d=> String(d["issue"]).includes("revolution") ? 'revol':null)
    
    // for rows with 'revol' class, select all cells and apply class 'revol' to format bg color
    revolution_rows
        .filter('.revol')
        .selectAll('td')
        .attr("class","revol")
   
  });
  