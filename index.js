// Your code here
let dodger = document.getElementById("dodger");
document.addEventListener("keydown", function (event) {
  if (event.key === "ArrowRight") {
    moveDodgerRight();
  } else if (event.key === "ArrowLeft") {
    moveDodgerLeft();
  }
});

function moveDodgerLeft() {
  const leftNumbers = dodger.style.left.replace("px", "");
  const left = parseInt(leftNumbers, 10);
  console.log(left);
  if (left > 0) {
    dodger.style.left = `${left - 1}px`;
  }
}

function moveDodgerRight() {
  const leftNumbers = dodger.style.left.replace("px", "");
  const left = parseInt(leftNumbers, 10);
  console.log(left);
  if (left < 360) {
    dodger.style.left = `${left + 1}px`;
  }
}
