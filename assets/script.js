//This is executed when page is fully loaded.
$(function() {
  $(".saveBtn").click(function (event) {
    var parentId = $(this).parent().attr("id");
    var assignment = $("#" + parentId + " textarea").val();
    localStorage.setItem(parentId, assignment);
  });
  //A loop through each element with time-block.
  $(".time-block").each(function () {
    var parentId = $(this).attr("id");
    var getHour = parseInt(parentId.slice(5));
    var targetDay = dayjs().format("YYYY-MM-DD") + getHour;
    var targetHour = dayjs(targetDay);
    var today = dayjs().format("YYYY-MM-DD H");
    var difference = targetHour.diff(today, "hour");
  //Past,present,future color coded depending on time difference.
    if (difference === 0) {
      $(this).addClass("present");
    } else if (difference < 0) {
      $(this).addClass("past");
    } else {
      $(this).addClass("future")
    }
  });
  //A loop through each element with time-block
  $(".time-block").each(function () {
      var parentId = $(this).attr("id");
      var assignment = localStorage.getItem(parentId);
      //Display assignment if found in local storage.
      if (assignment !== null) {
        $("#" + parentId + " textarea").val(assignment);
      }
  });
  //Displaying current time and date in "currentDay".
  var time = dayjs().format("dddd, MMMM D, YYYY");
  $("#currentDay").text(time);

});

