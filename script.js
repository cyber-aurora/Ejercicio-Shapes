const limeTriangle = document.getElementById("lime-triangle");
const redCube = document.getElementById("red-cube");
const blueCircle = document.getElementById("blue-circle");
const resetButton = document.getElementById("reset-button");

function hoverEffect(element) {
  element.style.backgroundColor = "yellow";
  element.style.top = (parseInt(element.style.top) - 10) + "px";
}

function resetEffect(element) {
  element.style.backgroundColor = "";
  element.style.top = "";
}

limeTriangle.addEventListener("mouseover", () => hoverEffect(limeTriangle));
redCube.addEventListener("mouseover", () => hoverEffect(redCube));
blueCircle.addEventListener("mouseover", () => hoverEffect(blueCircle));

limeTriangle.addEventListener("click", () => limeTriangle.remove());
redCube.addEventListener("click", () => redCube.remove());
blueCircle.addEventListener("click", () => blueCircle.remove());

resetButton.addEventListener("click", () => {
  document.body.appendChild(limeTriangle);
  document.body.appendChild(redCube);
  document.body.appendChild(blueCircle);
  resetEffect(limeTriangle);
  resetEffect(redCube);
  resetEffect(blueCircle);
});
