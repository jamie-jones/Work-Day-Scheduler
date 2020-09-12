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
var daysTime = moment().format("LT");
var past = $(".past");
var present = $(".present");
var future = $(".future");
// var m = moment();

console.log(daysTime);
// console.log(m);

// var timeArray = [
//   moment("9:00 AM", "h A"),
//   moment("10:00 AM", "h A"),
//   moment("11:00 AM", "h A"),
//   moment("12:00 PM", "h A"),
//   moment("1:00 PM", "h A"),
//   moment("2:00 PM", "h A"),
//   moment("3:00 PM", "h A"),
//   moment("4:00 PM", "h A"),
//   moment("5:00 PM", "h A"),
// ];
// console.log(timeArray[0]._i);

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
    if (localStorage.getItem(hoursArray[i]) != null) {
      textEl.text(localStorage.getItem(hoursArray[i]));
    }
    // if (hoursArray[i] < daysTime) {
    //   textEl.addClass("past");
    // } else if (hoursEl === daysTime) {
    //   textEl.addClass("present");
    // } else {
    //   textEl.addClass("future");
    // }
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

  // CONNECT ACTIVE CURRENT TIME TO THE HOUREL
  // setInterval

  // CONDITIONAL FOR THE ROW COLORS
  // if (hourEl < currentHour) {
  //   rowEl.addClass("past");
  // } else if (hourEl === currentHour) {
  //   rowEl.addClass("present");
  // } else {
  //   rowEl.addClass("future");
  // }
  // console.log(currentHour);
});

//   // $(".btn").on("click", function () {
//   // function mySave() {
