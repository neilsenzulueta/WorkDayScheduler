$(function() {
  $(".saveBtn").click(function (event) {
    var parentId = $(this).parent().attr("id");
    var assignment = $("#" + parentId + " textarea").val(); // Change to .val() to get the textarea value
    localStorage.setItem(parentId, assignment);
  });
  $(".time-block").each(function () {
    var parentId = $(this).attr("id");
    var getHour = parseInt(parentId.slice(5));
    var targetDay = dayjs().format("dddd-MMMM-Do" + getHour);
    var targetHour = dayjs(targetDay);
    var today = dayjs().format("dddd-MMMM-Do HH");
    var difference = targetHour.diff(today, "hour");
    console.log(difference)

    if (difference === 0) {
      $(this).addClass("present");
    }
    if (difference < 0) {
      $(this).addClass("past");
    } else {
      $(this).addClass("future")
    }
  });
  $(".time-block").each(function () {
      var parentId = $(this).attr("id");
      var assignment = localStorage.getItem(parentId);

      if (assignment !== null) {
        $("#" + parentId + " textarea").val(assignment); // Change to .val() to set the textarea value
      }
  });

  var time = dayjs().format("dddd, MMMM Do");
  $("#currentDay").text(time);

});

