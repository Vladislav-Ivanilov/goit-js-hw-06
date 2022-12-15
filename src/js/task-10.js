const refs = {
  inputElementCount: document.querySelector("#controls input"),
  createBtn: document.querySelector("button[data-create]"),
  destroyBtn: document.querySelector("button[data-destroy]"),
  boxesEL: document.getElementById("boxes"),
};
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const createBoxes = (amount) => {
  const elementAdd = [];

  for (let i = 0; i < amount; i++) {
    const div = document.createElement("div");
    div.style.width = `${30 + 10 * i}px`;
    div.style.height = `${30 + 10 * i}px`;
    div.style.backgroundColor = getRandomHexColor();
    elementAdd.push(div);
  }

  refs.boxesEL.append(...elementAdd);
};

const getInputValue = () => {
  const amount = refs.inputElementCount.value;
  createBoxes(amount);
  refs.inputElementCount.value = "";
};

refs.createBtn.addEventListener("click", getInputValue);

const destroyBoxes = () => {
  refs.boxesEL.innerHTML = "";
};

refs.destroyBtn.addEventListener("click", destroyBoxes);
