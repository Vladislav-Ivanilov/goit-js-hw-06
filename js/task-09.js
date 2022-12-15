function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeColorBtn = document.querySelector(".change-color");
const spanColor = document.querySelector(".color");

changeColorBtn.addEventListener("click", changeColor);

function changeColor() {
  let color = getRandomHexColor();
  document.body.style.backgroundColor = color;
  spanColor.textContent = color;
}
