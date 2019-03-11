$("input[type=radio]").attr('disabled', true);

//variables for the clock: 
var time = 30;
var clockRunning = false;
currentTime = timeConverter(time);
function timeConverter(t) {

  //  Takes the  time in seconds and convert it to minutes and seconds (mm:ss).
  var minutes = Math.floor(t / 60);
  var seconds = t - (minutes * 60);

  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  if (minutes === 0) {
    minutes = "00";
  }

  else if (minutes < 10) {
    minutes = "0" + minutes;
  }

  return minutes + ":" + seconds;
}


//timer
document.getElementById("timer").innerHTML = "Seconds: 30";
$("#startButton").on("click", function () {
  var Timer = setInterval(function () {
    document.getElementById("timer").innerHTML = "Seconds: " + time;
    time--;
    $("input[type=radio]").attr('disabled', false);
    
    if (time <= 0) {
      $("input[type=radio]").attr('disabled', true);
      clearInterval(Timer);
      document.getElementById("timer").innerHTML = "Time Up!";
      alert("Time's up! Please press submit");
      
    }
  }, 1000);
});

var correct =0;
var losses =0;

function check() {
var ques1 = document.trivia.q1.value;
var ques2 = document.trivia.q2.value;
var ques3 = document.trivia.q3.value;
var ques4 = document.trivia.q4.value;
var ques5 = document.trivia.q5.value;
// var correct =0;
// var losses =0;

    if (ques1 === "green") {
      correct++;
  } 
  else{ 
    losses++;
  }
    if (ques2 === "coconuts") {
      correct++;
    } 
    else { 
      losses++;
    }
    if (ques3 === "honey") {
      correct++;
    } 
    else{ 
      losses++;
    }
    if (ques4 === "twelve") {
      correct++;
    } 
    else{ 
      losses++;
    }
    if (ques5 === "55 miles") {
      correct++;
    } 
    else{ 
      losses++;
    }
    
document.getElementById("button").style.visibility = "visible";
alert("Correct: " + correct + "Wrong: " + losses);
console.log("Correct: " + correct + " Wrong: " + losses);



}


