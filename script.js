const decreaseBtn = document.getElementById("decrease");
const increaseBtn = document.getElementById("increase");
const resetBtn = document.getElementById("reset");

const valueElt = document.getElementById("value");

let value = 0;

function increaseValue() {
  value += 1;
  valueElt.textContent = value;
}
function decreaseValue() {
  value -= 1;
  valueElt.textContent = value;
}
function resetValue() {
  value = 0;
  valueElt.textContent = value;
}
increaseBtn.addEventListener("click", increaseValue);
decreaseBtn.addEventListener("click", decreaseValue);
resetBtn.addEventListener("click", resetValue);
