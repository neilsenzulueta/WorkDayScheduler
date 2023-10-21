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
  });
  $(".time-block").each(function () {
      var parentId = $(this).attr("id");
      var getHour = parseInt(parentId.slice(5));
      var targetDay = dayjs().format("dddd-MMMM-Do " + getHour);
      var targetHour = dayjs(targetDay);
      var today = dayjs().format("dddd-MMMM-Do HH");
      var difference = targetHour.diff(today, "hour");
      var assignment = localStorage.getItem(parentId);

      if(assignment != null) {
        document.querySelector("#" + parentId + "textarea").value = assignment;
      }
  });

  var time = dayjs().format("dddd, MMMM Do");
  $("#currentDay").text(time);

});

