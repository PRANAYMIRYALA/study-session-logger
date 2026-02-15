let seconds = 0;
let timer = null;
let totalSeconds = 0;
let history = [];

// START SESSION
function startSession() {
  const subject = document.getElementById("subject").value.trim();

  if (subject === "") {
    alert("Please enter a subject name");
    return;
  }

  if (timer !== null) return;

  seconds = 0;
  document.getElementById("result").innerText = "";

  timer = setInterval(() => {
    seconds++;

    // ⭐ Progress Bar Movement
    document.getElementById("progressBar").style.width =
      (seconds % 100) + "%";

    let mins = Math.floor(seconds / 60);
    let secs = seconds % 60;

    document.getElementById("timer").innerText =
      String(mins).padStart(2, "0") + ":" +
      String(secs).padStart(2, "0");

  }, 1000);
}

// END SESSION
function endSession() {
  if (timer === null) return;

  clearInterval(timer);
  timer = null;

  const subject = document.getElementById("subject").value.trim();

  let mins = Math.floor(seconds / 60);
  let secs = seconds % 60;

  document.getElementById("result").innerText =
    `You studied ${subject} for ${mins} minutes and ${secs} seconds.`;

  totalSeconds += seconds;

  updateTotalTime();
  addToHistory(subject, mins, secs);

  // reset progress bar
  document.getElementById("progressBar").style.width = "0%";
}

// UPDATE TOTAL TIME
function updateTotalTime() {
  let mins = Math.floor(totalSeconds / 60);
  let secs = totalSeconds % 60;

  document.getElementById("totalTime").innerText =
    `${mins} minutes ${secs} seconds`;
}

// ADD HISTORY
function addToHistory(subject, mins, secs) {
  history.push(`${subject} – ${mins}m ${secs}s`);

  const list = document.getElementById("history");
  list.innerHTML = "";

  history.forEach(item => {
    let li = document.createElement("li");
    li.innerText = item;
    list.appendChild(li);
  });
}

// DARK MODE
function toggleDarkMode() {
  document.body.classList.toggle("dark");
}
