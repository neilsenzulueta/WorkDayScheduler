$(function() {
  $(".saveBtn").click(function (event) {
    var parentId = $(this).parent().attr("id");
    var assignment = $("#" + parentId + " textarea").val();
    localStorage.setItem(parentId, assignment);
  });
  $(".time-block").each(function () {
    var parentId = $(this).attr("id");
    var getHour = parseInt(parentId.slice(5));
    var targetDay = dayjs().format("YYYY-MM-DD") + getHour;
    var targetHour = dayjs(targetDay);
    var today = dayjs().format("YYYY-MM-DD H");
    var difference = targetHour.diff(today, "hour");

    if (difference === 0) {
      $(this).addClass("present");
    } else if (difference < 0) {
      $(this).addClass("past");
    } else {
      $(this).addClass("future")
    }
  });
  $(".time-block").each(function () {
      var parentId = $(this).attr("id");
      var assignment = localStorage.getItem(parentId);

      if (assignment !== null) {
        $("#" + parentId + " textarea").val(assignment);
      }
  });

  var time = dayjs().format("dddd, MMMM D, YYYY");
  $("#currentDay").text(time);

});

