console.log("Lexa deserved better");
// // Create the table so there are 9 rows and tree columns.
// //     time column, writing column, button?
// // middle column is an input column
// // three first rows are one ConvolverNode. 4th row is red for current HTMLSourceElement. final rows are other color for future
// // local Storage needed for each button

// VARIABLES
var currentDay = $("#currentDay");
var calenderEl = $(".container");
var now = moment().format("dddd, MMMM Do, YYYY");
var daysTimes = moment().format("LT");

var timeArray = [
  moment("9:00 AM", "h A"),
  moment("10:00 AM", "h A"),
  moment("11:00 AM", "h A"),
  moment("12:00 PM", "h A"),
  moment("1:00 PM", "h A"),
  moment("2:00 PM", "h A"),
  moment("3:00 PM", "h A"),
  moment("4:00 PM", "h A"),
  moment("5:00 PM", "h A"),
];
console.log(timeArray[0]._i);

$(document).ready(function () {
  $("#currentDay").append(now);

  // DYNAMICALLY GENERATING
  for (var j = 0; j < timeArray.length; j++) {
    var rowEl = $("<row>");
    rowEl.addClass("row time-block");
    // rowEl.text("am I here");
    calenderEl.append(rowEl);

    var hourEl = $("<div>");
    hourEl.addClass("time-block col-sm-2 hour");
    hourEl.text(timeArray[j]._i);
    rowEl.append(hourEl);

    var textEl = $("<textarea>");
    textEl.addClass("textarea col-sm-8");
    textEl.attr("placeholder, enter your todo list");
    rowEl.append(textEl);

    var buttonEl = $("<button>");
    buttonEl.addClass("saveBtn col-sm-2");
    buttonEl.text("SAVE");
    rowEl.append(buttonEl);
  }

  var plannedEvents = localStorage.setItem(textEl).value;
});

//   // $(".btn").on("click", function () {
//   // function mySave() {
