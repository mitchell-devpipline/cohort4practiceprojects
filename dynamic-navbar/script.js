function iconSwitch() {
  let toggle = true;

  document.querySelector(".fa-solid fa-bars").addEventListener("click", () => {
    document.body.style.i = toggle ? "fa-solid fa-bars" : "fa-solid fa-x";

    toggle = !toggle;
  });
}
