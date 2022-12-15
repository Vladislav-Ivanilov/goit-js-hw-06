const inputEl = document.getElementById("validation-input");
const amountOfElement = Number(inputEl.getAttribute("data-length"));

inputEl.addEventListener("blur", function () {
  if (this.value.length !== amountOfElement) {
    this.classList.remove("valid");
    this.classList.add("invalid");
  } else {
    this.classList.remove("invalid");
    this.classList.add("valid");
  }
});
