let seconds = 0;
let timer = null;
let totalSeconds = 0;
let history = [];

function startSession() {
  const subject = document.getElementById("subject").value.trim();

  // INPUT VALIDATION
  if (subject === "") {
    alert("Please enter a subject name");
    return;
  }

  if (timer !== null) return;

  seconds = 0;
  document.getElementById("result").innerText = "";

  timer = setInterval(() => {
    seconds++;

    let mins = Math.floor(seconds / 60);
    let secs = seconds % 60;

    document.getElementById("timer").innerText =
      mins + ":" + (secs < 10 ? "0" + secs : secs);
  }, 1000);
}

function endSession() {
  if (timer === null) return;

  clearInterval(timer);
  timer = null;

  const subject = document.getElementById("subject").value.trim();
  let mins = Math.floor(seconds / 60);
  let secs = seconds % 60;

  // RESULT MESSAGE
  document.getElementById("result").innerText =
    `You studied ${subject} for ${mins} minutes and ${secs} seconds.`;

  // DAILY TOTAL
  totalSeconds += seconds;
  updateTotalTime();

  // SESSION HISTORY
  history.unshift(`${subject} – ${mins}m ${secs}s`);
  if (history.length > 5) history.pop();
  updateHistory();

  seconds = 0;
  document.getElementById("timer").innerText = "00:00";
}

function updateTotalTime() {
  let mins = Math.floor(totalSeconds / 60);
  let secs = totalSeconds % 60;
  document.getElementById("totalTime").innerText =
    `${mins} minutes ${secs} seconds`;
}

function updateHistory() {
  const list = document.getElementById("history");
  list.innerHTML = "";

  history.forEach(item => {
    const li = document.createElement("li");
    li.innerText = item;
    list.appendChild(li);
  });
}

// DARK MODE
function toggleDarkMode() {
  document.body.classList.toggle("dark");
}
