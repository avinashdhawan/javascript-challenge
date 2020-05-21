// from data.js
var tableData = data;

var tbody = d3.select("tbody");
console.log(data);

data.forEach(function(UFOdata) {
  console.log(UFOdata);
  var row = tbody.append("tr");
  Object.entries(UFOdata).forEach(function([key, value]) {
    console.log(key, value);
    // Append a cell to the row for each value
    // in the UFO data object
    var cell = row.append("td");
    cell.text(value);
  });
});

// Getting a reference to the button on the page with the id property set to `click-me`
var button = d3.select("#filter-btn");
var form = d3.select("#filters");

// Create event handlers 
button.on("click", dataFilter);
form.on("submit",dataFilter);

function dataFilter() {
  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  console.log(inputValue);
  console.log(tableData);

  var filteredData = tableData.filter(tableDatum => tableDatum.datetime === inputValue);

  console.log(filteredData)
};


