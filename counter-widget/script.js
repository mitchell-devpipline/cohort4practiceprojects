let count = 0;

function displayLogic(count){
  const getRoot = document.getElementById("rootEl");
  const findCounting = document.createElement("p");
  const showText = document.createTextNode(`You have collected ${count} of Ryan's head(s)`);

  findCounting.appendChild(showText);
  return getRoot.appendChild(findCounting);
  
}

function increase(count) {
  document.querySelector("#plus-one").addEventListener("click", () => {
    count++
    displayLogic(count)
  })
}
increase(count)

function decrease() {
  document.querySelector("#minus-one").addEventListener("click", () => {
    count--
    displayLogic(count)
  })
}
decrease()

function reset() {
  document.querySelector("#reset").addEventListener("click", () => {
    count = 0;
    console.log(count) 
    displayLogic(count)
  })
}
reset()

// findCounting.remove();
// getRoot.appendChild(findCounting);
