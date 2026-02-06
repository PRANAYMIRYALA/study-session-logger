let seconds = 0;
let timer = null;

function startSession() {
  if (timer !== null) return;

  seconds = 0;
  document.getElementById("result").innerText = "";

  timer = setInterval(function () {
    seconds++;

    let mins = Math.floor(seconds / 60);
    let secs = seconds % 60;

    document.getElementById("timer").innerText =
      mins + ":" + (secs < 10 ? "0" + secs : secs);
  }, 1000);
}

function endSession() {
  clearInterval(timer);
  timer = null;

  let subjectInput = document.getElementById("subject").value;
  let subject = subjectInput ? subjectInput : "Unknown subject";

  let mins = Math.floor(seconds / 60);
  let secs = seconds % 60;

  document.getElementById("result").innerText =
    "You studied " + subject + " for " + mins + " minutes and " + secs + " seconds.";
}
