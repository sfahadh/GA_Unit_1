
// Get the element with an ID of 'first' using querySelector
// document.querySelector("#first");
// Get the elements with a class of 'second' with querySelector
// document.querySelectorAll(".second");
// Try the above prompt with querySelectorAll. What's the difference between what these two methods return?
// document.querySelectorAll("#first");
// Get the span element using querySelector
// document.querySelector("span");
// Get multiple span elements using querySelectorAll
// document.querySelectorAll("div > a");
// Select only "a" tags *directly inside* of a div (no grandchildren).

// Select all elements that contain a "data-target" attribute

// Select all elements where the data-target attribute equals "#false"

// document.getElementById("okButton")
//         .addEventListener("click", function() {
//   document.getElementsByClassName("second").hidden = true;
// //   document.getElementsByClassName("second").hidden = false;
// }, false);

var span = document.querySelector("span");
var classes = span.classList;
classes.add("d");
span.textContent = classes;