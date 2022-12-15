let counterValue = 0;

const incrementButton = document.querySelector('[data-action="increment"]');
const decrementButton = document.querySelector('[data-action="decrement"]');
const value = document.getElementById("value");

const increment = () => {
  counterValue += 1;

  value.textContent = counterValue;
};
const decrement = () => {
  counterValue -= 1;

  value.textContent = counterValue;
};

incrementButton.addEventListener("click", increment);
decrementButton.addEventListener("click", decrement);
