// Update html to display current day.
var today = moment().format('MMMM DD, YYYY');
console.log(today);
var currentHour = moment().format("HH");
function current(){
    var currentDay = document.getElementById('currentDay');
    currentDay.textContent = today;
    currentHour.textContent = currentHour
}

current();
console.log();

// Make save buttons functional
$(".saveBtn").click(function(t){
    // today.preventDefault();
    var currentDay=$(this).siblings(".time-block").val(),
    today=$(this).parent().attr("id").split("-")[1];
    localStorage.setItem(today,currentDay)
    console.log(currentDay, "saveBtn")
    }
);

// Identify timeblocks as past, present or future
// Change color based on past/present/future
$(".time-div").each(function(){
    // time blocks separated by 'hour-09' etc, split at the '-'
    var today=$(this).attr("id").split("-")[1];
    currentHour==today?($(this).addClass("present"),$(this).children(".description").addClass("white-text")):currentHour<today?($(this).removeClass("present"),$(this).addClass("future")):today<currentHour&&($(this).removeClass("future"),$(this).addClass("past"))
    }),
        $("#hour-09 .time-block").val(localStorage.getItem("09")),
        $("#hour-10 .time-block").val(localStorage.getItem("10")),
        $("#hour-11 .time-block").val(localStorage.getItem("11")),
        $("#hour-12 .time-block").val(localStorage.getItem("12")),
        $("#hour-13 .time-block").val(localStorage.getItem("13")),
        $("#hour-14 .time-block").val(localStorage.getItem("14")),
        $("#hour-15 .time-block").val(localStorage.getItem("15")),
        $("#hour-16 .time-block").val(localStorage.getItem("16")),
        $("#hour-17 .time-block").val(localStorage.getItem("17"));
