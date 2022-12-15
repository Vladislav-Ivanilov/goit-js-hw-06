const inputSizeControl = document.getElementById("font-size-control");
const spanText = document.getElementById("text");

function handleInputRange(event) {
  spanText.style.fontSize = event.currentTarget.value + "px";
}

inputSizeControl.addEventListener("input", handleInputRange);
