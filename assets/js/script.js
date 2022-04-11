// the variable for the button class will now be switched to javascript
var saveButton = $(".saveBtn")

//  display the current day in the bottom of the header
$("#currentDay").text(moment().format('dddd MMMM Do YYYY'));

// this will give the button class
$(".saveBtn").on("click", function() {
    var time = $(this).siblings(".hour").text();
    var plan = $(this).siblings(".col-10").val();
    console.log("hey")
    localStorage.setItem(time, plan)
})