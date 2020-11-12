let currentDay = $("#currentDay").text(luxon.DateTime.local().toFormat("ff"));
let $textFromUser = $("textarea");
let $hourOfCalendy = $(".currentHour");

let plansForDay = localStorage.getItem("plansForDay");
if (plansForDay){
    plansForDay = JSON.parse(plansForDay);
} else {
    plansForDay = [];
}

$(".saveBtn").on("click", function(e){
    plansForDay.push({
        currentHour: $(this).parent().attr("id").split("-")[1],
        currentText: $(this).siblings("textarea").val()
    });
    localStorage.setItem("plansForDay", JSON.stringify(plansForDay));
})

plansForDay.forEach(function(plan) {
    $("div[value='" + plan.currentHour + "']").children("textarea").text(plan.currentText);
});

$("#clear").on("click", function(){
    window.localStorage.clear();
    location.reload();

})
