function btnclick() {
  if (checkEmpty()) {
    label.textContent = "du må legg inn tall";
  }
  addNum();
}
function checkEmpty() {
  if (getFirstNum() === "" || getSecondNum() === "") {
    return true;
  } else {
    return false;
  }
}
function addNum() {
  sum = Number(firstNum) + Number(secondNum);
  label.textContent = "summen er: " + sum;
}
function getFirstNum() {
  return (firstNum = inputs[0].value);
}
function getSecondNum() {
  return (secondNum = inputs[1].value);
}

const inputs = document.querySelectorAll("input");
const button = document.querySelector("button");
let label = document.querySelector("p");
button.addEventListener("click", btnclick);
