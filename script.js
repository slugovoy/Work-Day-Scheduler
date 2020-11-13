// Create timeslots for each hour in planner
for(let hour = 9; hour < 18; hour++) {
    $(".container").append(createTimeSlot(hour));
}
// Actual function, responsible for creating timeslots
function createTimeSlot(hour) {
  const $timeSlot = $("<div>")
  .attr("id", `hour-${hour}`)
  .attr("value", hour)
  .attr("class", "row time-block");

  const $timeLabel = $("<div>")
  .attr("class", "col-md-1 hour")
  .addClass("currentHour");
// Because using military time, need to add AM or PM to hours
  if (hour > 12) {
    $timeLabel.text(`${hour - 12} PM`);
  } else if (hour === 12) {
    $timeLabel.text(`${hour} PM`);
  } else {
      $timeLabel.text(`${hour} AM`);
  }

  const $textArea = $("<textarea>")
  .attr("value", hour)
  .attr("class", "col-md-10 description");

  const $saveBtn = $("<button>")
  .attr("class", "btn saveBtn col-md-1")
  .append($("<i>").attr("class", "fas fa-save"));
// Append all created elements to timeslot
  $timeSlot.append($timeLabel, $textArea, $saveBtn);
  // Create variables for current time using Luxon library
  let currentTime = parseInt(luxon.DateTime.local().toFormat("H"));
// Use each function to iterate through hours, check if they before or after current hour and set background color based on this
  $(".container").each(function(){

      console.log($timeSlot.attr("value"));
      if($timeSlot.attr("value") < currentTime) {
          $textArea.addClass("past");
          } else if ($timeSlot.attr("value") == currentTime){
            $textArea.addClass("present");
          } else{
            $textArea.addClass("future");
          }
  });
  return $timeSlot;
}
    