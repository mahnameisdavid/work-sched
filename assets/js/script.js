// the variable for the button class will now be switched to javascript
var saveButton = $(".saveBtn")

//  display the current day in the bottom of the header
$("#currentDay").text(moment().format('dddd MMMM Do YYYY'));

// we need to ge the block of color to change depending on what tense it is
function timeBlockColor() {

}

// when saved the color will change
$(".saveBtn").on("click", function() {
    var time = $(this).siblings(".hour").text();
    var plan = $(this).siblings(".description").val();
    //console.log("text")
    localStorage.setItem(time, plan)
});