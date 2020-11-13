//Creata variable for currend day using Luxon library
let currentDay = $("#currentDay").text(luxon.DateTime.local().toFormat("ff"));

// Variables for storing data
let $textFromUser = $("textarea");
let $hourOfCalendy = $(".currentHour");

// Get data from local storage when the page loads
let plansForDay = localStorage.getItem("plansForDay");
if (plansForDay){
    plansForDay = JSON.parse(plansForDay);
    // If no data - empty array
} else {
    plansForDay = [];
}
// Button to save data in local storage
$(".saveBtn").on("click", function(e){
    plansForDay.push({
        // Get value for hour and user's input using DOM
        currentHour: $(this).parent().attr("id").split("-")[1],
        currentText: $(this).siblings("textarea").val(),
    });
    // push data to local storage
    localStorage.setItem("plansForDay", JSON.stringify(plansForDay));
})
//When refreshing webpage, leave all saved data in assigned blocks
plansForDay.forEach(function(plan) {
    $("div[value='" + plan.currentHour + "']").children("textarea").text(plan.currentText);
});
// Button to clear textarea and local storage
$("#clear").on("click", function(){
    window.localStorage.clear();
    location.reload();

})
