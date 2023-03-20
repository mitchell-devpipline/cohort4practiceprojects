let count = 0;

function increase() {
  document.querySelector("#plus-one").addEventListener("click", () => {
  count += 1;
  console.log(count) 
})
}
increase()

function decrease() {
  document.querySelector("#minus-one").addEventListener("click", () => {
  count -= 1;
  console.log(count) 
})
}
decrease()

function reset() {
  document.querySelector("#reset").addEventListener("click", () => {
    count = 0; // => I tried exclusive equals on this but it didnt work. any idea why?
    console.log(count) 
})
}
reset()


const getRoot = document.getElementById("rootEl");

const findCounting = document.createElement("p");

const showText = document.createTextNode(
  `You have collected ${count} of Ryan's head(s)`
);

findCounting.appendChild(showText);
getRoot.appendChild(findCounting);
// findCounting.remove();
// getRoot.appendChild(findCounting);
