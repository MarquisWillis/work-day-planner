/*
GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with timeblocks for standard business hours
WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future
WHEN I click into a timeblock
THEN I can enter an event
WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist
*/
/* 
    add selectors for:
        - currentDay (displays current day at the top of calendar in format: Thursday, September 5th)
        - hour (assign colors with conditional function)
        - textareas (to allow user to add to html of planner with input value, or change depending on the hour)
        - saveBtn (what allows user to save input to local storage and insert HTML content and allow it to persist even after refresh)
*/

// HTML static selectors
let currentDayEl = $("#currentDay");
let hourEl = $(".hour");
let textAreaEl = $("textarea");
let saveBtn = $(".saveBtn");

let today = moment();
let currentHour = today.hour();
let timeArray = [9, 10, 11, 12, 13, 14, 15, 16, 17];

let planEvent = localStorage.getItem("input");


// functions for above selectors
function displayCurrentDay() {
    currentDayEl.text(today.format('dddd, MMMM Do'));
}

function timeBlockColorDisplay() {
    for (let i = 0; i < timeArray.length; i++) {
        let currentTextEl = $("#" + timeArray[i]);
        
        if (currentHour > timeArray[i]) {
            currentTextEl.addClass("past");
        } else if (currentHour === timeArray[i]) {
            currentTextEl.addClass("present");
        } else {
            currentTextEl.addClass("future");
        }
    }
}

function saveContent () {
    console.log(textAreaEl);
}

displayCurrentDay();

// onclick event to save desired text content in text area and local storage
saveBtn.on("click", saveContent);