// Using HTML, Bootstrap, and JavaScript create a single page website that contains the following:
// A Bootstrap styled table representing your choice of data.
// A Bootstrap styled form that allows a user to add a new row to the table when clicking on submit.

//let button = document.getElementById(addRowButton);
//instantiating a variable and connecting it to the button in HTML
const addRowButton = document.getElementById("addRowButton");
//variable listens for click event from HTML button
//onclick function creates new table row and cells
addRowButton.addEventListener("click", () => {
  //using DOM to get table data
  let table = document.getElementById("saddleTable");
  //declaring and initializing variables using insert method to create new rows with three cells each
  let row = table.insertRow(1);
  let cell1 = row.insertCell(0);
  let cell2 = row.insertCell(1);
  let cell3 = row.insertCell(2);
  // creating variables to get form data by DOM id
  let innerText1 = document.getElementById("saddleBrand").value;
  let innerText2 = document.getElementById("saddleNumber").value;
  let innerText3 = document.getElementById("saddleSize").value;
  // using innerText method to pull data from variables to specific cells
  cell1.innerText = innerText1;
  cell2.innerText = innerText2;
  cell3.innerText = innerText3;

  //clear data in table onclick
  document.getElementById("saddleBrand").value = "";
  document.getElementById("saddleNumber").value = "";
  document.getElementById("saddleSize").value = "";
});
