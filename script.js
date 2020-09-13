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
var daysTime = moment().format("HH");
var past = $(".past");
var present = $(".present");
var future = $(".future");

console.log(daysTime);
// console.log(m);

var hoursArray = ["09", "10", "11", "12", "13", "14", "15", "16", "17"];

$(document).ready(function () {
  // DATE APPENDED TO TOP OF PAGE
  $("#currentDay").append(now);

  // DYNAMICALLY GENERATING
  for (var i = 0; i < hoursArray.length; i++) {
    var rowEl = $("<row>");
    rowEl.addClass("row time-block");
    calenderEl.append(rowEl);

    var hourEl = $("<div>");
    hourEl.addClass("time-block col-sm-2 hour");
    hourEl.text(hoursArray[i] + ":00");
    rowEl.append(hourEl);

    var textEl = $("<textarea>");
    textEl.addClass("textarea col-sm-8 description");
    textEl.attr("placeholder, enter your todo list");
    textEl.attr("data-hour", hoursArray[i]);

    if (textEl.attr("data-hour") < daysTime) {
      textEl.addClass("past");
    } else if (textEl.attr("data-hour") == daysTime) {
      textEl.addClass("present");
    } else {
      textEl.addClass("future");
    }

    // RETRIEVING LOCAL STORAGE
    if (localStorage.getItem(hoursArray[i]) != null) {
      textEl.text(localStorage.getItem(hoursArray[i]));
    }
    rowEl.append(textEl);

    var buttonEl = $("<button>");
    buttonEl.addClass("saveBtn col-sm-2");
    buttonEl.text("SAVE");
    buttonEl.attr("data-hour", hoursArray[i]);
    rowEl.append(buttonEl);
  }

  // LOCAL STORAGE
  $(".saveBtn").on("click", function () {
    var saveHour = $(this).attr("data-hour");
    console.log(saveHour);

    var saveText = $(this).siblings(".description").val();
    console.log(saveText);

    localStorage.setItem(saveHour, saveText);
  });
});
