const inputBox = document.getElementById("char-limit");
inputBox.addEventListener("input", (event) => {
  countDown = event.target.value;
  const stringLength = countDown.length;
});

function charCountdown() {}
