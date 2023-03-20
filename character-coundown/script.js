// const searchRoot = document.getElementById("rootEl");

const inputBox = document.getElementById("char-limit");

function charCountdown() {
  inputBox.addEventListener("input", (event) => {
    const countDown = event.target.value;
    const stringLength = countDown.length;

    const getRoot = document.getElementById("rootEl");

    const findCounting = document.createElement("p");

    const showText = document.createTextNode(
      `You have used ${stringLength} characters.`
    );

    findCounting.appendChild(showText);
    getRoot.appendChild(findCounting);
    // findCounting.remove();
    // getRoot.appendChild(findCounting);
  });
}

charCountdown();
