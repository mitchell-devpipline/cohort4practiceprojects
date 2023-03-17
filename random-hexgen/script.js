function hexRandom() {
  let hexOptions = "abcdef0123456789";
  let hexDesignator = "#";
  for (let i = 0; i < 6; i++) {
    hexDesignator += hexOptions[Math.floor(Math.random() * hexOptions.length)];
  }
  document.body.style.backgroundColor = hexDesignator;
  console.log(hexDesignator);
  return hexDesignator;
}
// let hexDesignator = hexRandom();

// console.log(hexDesignator);

function appendHexDecimal() {
  const h = document.createElement("p");

  const txt = document.createTextNode("Hello World!!");

  h.appendChild(txt);

  document.body.appendChild(h);
}

function showPanel(returnedHexDesignator) {
  const grabHexNum = document.getElementById("hex-num");
  const hexColorNum = document.createTextNode(returnedHexDesignator);
  grabHexNum.removeChild(grabHexNum.firstChild);

  grabHexNum.appendChild(hexColorNum);
}
