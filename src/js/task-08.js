const formEl = document.querySelector(".login-form");

formEl.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("Будь ласка заповніть усі поля!");
  }

  const userData = { email: email.value, password: password.value };

  console.log(userData);

  event.currentTarget.reset();
}
