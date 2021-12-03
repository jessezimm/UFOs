// import the data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");

// Functions can call other functions
function doubleAddition(c, d) {
    var total = addition(c, d) * 2;
    return total;
  }
// For Loops
// let friends = ["Sarah", "Greg", "Cindy", "Jeff"];
// for (var i = 0; i < userList.length; i++) { console.log(userList[i]); }
// for i in user_list: print(i)

// let vegetables = ["Carrots", "Peas", "Lettuce", "Tomatoes"];
// for (var i = 0; i < vegetables.length; i++) {
   // console.log("I love " + vegetables[i]);
//}

//for (var i = 0; i < 5; i++) {
  //  console.log("I am " + i);
 //}

 // Need to clear data first so preexisting filters aren't applied again
 function buildTable(data) {
    tbody.html("");

    // Next loop through each object in the data and append a row and cells for each value in the row
    data.forEach((dataRow) => {
        let row = tbody.append("tr");
        
        // Loop through each field in the dataRow and add each value as a table cell (td)
        Object.values(dataRow).forEach((val) => {
            let cell = row.append("td");
            cell.text(val);
            }
        );
    });
 }

 // Date filter find in HTML tags
 function handleClick() {
     // Grab the datetime value from the filter
    let date = d3.select("#datetime").property("value");
    let filteredData = tableData;
    // Check to see if the date was entered and filter on that date.
    if (date) {
        filteredData = filteredData.filter(row => row.datetime === date);
      };
         // Rebuild the table using the filtered data
  // @NOTE: If no date was entered, then filteredData will
  // just be the original tableData.
  buildTable(filteredData);
};

// Attach an event to listen for the form button
d3.selectAll("#filter-btn").on("click", handleClick);

// Build the table when the page loads
buildTable(tableData);