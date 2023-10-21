$(function() {
  $(".saveBtn").click(function (event) {
    var parentId = $(this).parent().attr("id");
    var getHour = parseInt(parentId.slice(5));
    var targetDay = dayjs().format("dddd-MMMM-Do" + getHour);
    var targetHour = dayjs(targetDay);
    var today = day.js().format("dddd-MMMM-Do HH");
    var difference = targetHour.diff(today, "hour");
    
    var assignment = document.querySelector("#" + parentId + "textarea").ariaValueMax;
    localStorage.setItem(parent, assignment);

});
  $(".time-block").each(function () {
    var parentId = $(this).attr("id");
    var getHour = parseInt(parentId.slice(5));
    var targetDay = dayjs().format("dddd-MMMM-Do" + getHour);
    var targetHour = dayjs(targetDay);
    var today = day.js().format("dddd-MMMM-Do HH");
    var difference = targetHour.diff(today, "hour");
    console.log(difference)

    if (difference === 0) {
      $(this).addClass("present");
    }
    if (difference < 0) {
      $(this).addClass("future");
    }
    if (difference > 0) {
      $(this).addClass("past")
    }
}
)
//current date using day.js
var currentDay = dayjs().format("dddd, MMMM Do")
$('#currentDate').text(time);
}

/*user story 
as an employee with a busy schedule 
i wanto add important events to a daily planner
so that i can mange my time effectively

Acceptance criteria 
Given I am using a daily planer to create a schedule 
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down 
THEN I am presented with time blocks for standard business hours of 9am to 5pm
WHEN I view the time blocks for that day 
THEN each time block is color coded to indicate whether it is in the past present or future 
WHEN I click into a time block 
THEN I can enter an event 
WHEN I click the save button for that time block 
THEN the text for that event is saved in local storage 
WHEN I refresh the page 
THEN the saved events persist 

create a 


// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});
