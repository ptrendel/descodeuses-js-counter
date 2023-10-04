const decreaseBtn = document.getElementById("decrease");
const increaseBtn = document.getElementById("increase");
const resetBtn = document.getElementById("reset");

const valueElt = document.getElementById("value");

let value = 0;

function displayValue() {
  valueElt.textContent = value;
  if (value < 0) {
    valueElt.style.color = "red";
  } else if (value > 0) {
    valueElt.style.color = "green";
  } else {
    valueElt.style.color = "black";
  }
}

function increaseValue() {
  value += 1;
  displayValue();
}
function decreaseValue() {
  value -= 1;
  displayValue();
}
function resetValue() {
  value = 0;
  displayValue();
}
increaseBtn.addEventListener("click", increaseValue);
decreaseBtn.addEventListener("click", decreaseValue);
resetBtn.addEventListener("click", resetValue);
