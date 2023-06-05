var hour_txt = document.getElementById("hour-txt");
var min_txt = document.getElementById("min-txt");
var sec_txt = document.getElementById("sec-txt");
var msec_txt = document.getElementById("msec-txt");
var setBtn = document.getElementById("setBtn");

var hour;
var min;
var sec;
var interval;

function setValue() {
  hour = prompt("hours");
  min = prompt("min");
  sec = prompt("sec");
}

function renderValue() {
  hour_txt.innerHTML = hour;
  min_txt.innerHTML = min;
  sec_txt.innerHTML = sec;
}

function timer() {
  sec--;
  renderValue();
  if (sec == -1) {
    min--;
    sec = 59;
    renderValue();
    if (min == -1) {
      hour--;
      min = 59;
      if (hour == 0 && min == 0 && sec == 0) {
        stopWatch();
      }
      renderValue();
    }
  }
}

function startTimer() {
  interval = setInterval(timer, 1000);
  startBtn = document.getElementById("startBtn").disabled = true;
  setBtn = setBtn.disabled = true;

}

function stopTimer() {
  clearInterval(interval);
  startBtn = document.getElementById("startBtn").disabled = false;
}

function resetTimer() {
  hour = 0;
  min = 0;
  sec = 0;
  setBtn = document.getElementById("setBtn").disabled = false;
  startBtn = document.getElementById("startBtn").disabled = false;
  renderValue();
  stopWatch();
}
