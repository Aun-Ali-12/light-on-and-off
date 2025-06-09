let circle = document.getElementById("circle");
let body = document.getElementById("onn");
let on = document.getElementById("onn-btn");
function bulb() {
  circle.style.backgroundColor = "yellow";
  let offBtn = document.createElement("button");
  offBtn.innerText = "Off";
  offBtn.style.padding = "0.5rem 0.6rem 0.5rem 0.6rem";
  body.append(offBtn);
  on.style.display = "none";
  offBtn.onclick = function () {
    circle.style.backgroundColor = "white";
    offBtn.style.display = "none";
    on.style.display = "block";
  };
}
