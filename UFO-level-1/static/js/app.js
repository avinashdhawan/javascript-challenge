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

// Getting a reference to the "Filter Table" button on the page with the id property set to `filter-btn`
var button = d3.select("#filter-btn");

// Getting a reference to the search box on the page with the id property set to `filter`
var form = d3.select("#filters");

// Create event handlers 
button.on("click", dataFilter);
form.on("submit",dataFilter);

function dataFilter() {
  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");


  // Get the value property of the input element
  var inputValue = inputElement.property("value");
  if(inputValue){
    console.log(inputValue);
  console.log(tableData);
  
// filter data and store in filtered data
  var filteredData = tableData.filter(tableDatum => tableDatum.datetime === inputValue);

  console.log(filteredData)
  tbody.html("")
  filteredData.forEach(function(UFOFiltereddata) {
    console.log(UFOFiltereddata);
    var row = tbody.append("tr");
    Object.entries(UFOFiltereddata).forEach(function([fkey, fvalue]) {
      console.log(fkey, fvalue);

      var fcell = row.append("td");
      fcell.text(fvalue);
});

});


  }
  
}
