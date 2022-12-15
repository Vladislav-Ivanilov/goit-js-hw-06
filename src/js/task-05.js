const input = document.getElementById("name-input");
const nameOutput = document.getElementById("name-output");

function personIdentification() {
  if (input.value === "") {
    nameOutput.textContent = "Anonymous";
  } else {
    nameOutput.textContent = input.value;
  }
}

input.addEventListener("input", personIdentification);
