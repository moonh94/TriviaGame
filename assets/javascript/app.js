//write out a various questions
    //answers in a string that are linked to buttons
//set a timer and have the time show via .text
//have the timer start with a click event for start. 
//hide questions until start is pressed
//or set alert to warn the player the game is about to start.
//set booleans for the answer choices, increase correct or incorrect
//when time runs out, show score, no longer can click on the answers


//variables for the clock: 
var time = 60000;
var clockRunning = false;
$("#display").html("01:00");


//functions for the clock: 
if (!clockRunning){
    var currentTime = timeConverter(time);
    time.decrement(1000);
    $("#startButton").on("click", function() {
        $("#display").text(currentTime);
    }
    )}

//shows the amount of time to start with
$("#display").text("01:00");
function count() {
    //decrease time
      decrement.time;
   //get current time
      var currentTime = timeConverter(time);
    //  TODO: Use the variable you just created to show the converted time in the "display" div.
      $("#display").text(currentTime);

var answerChoicesQ1 = ["green", "white", "blue", ];
var answerChoicesQ2 = ["bananas", "coconuts", "pineapples"];
var answerChoicesQ3 = ["pickles", "honey", "flour"],

$("#1").append("<button>green</button>");