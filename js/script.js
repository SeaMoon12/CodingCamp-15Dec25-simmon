const form = document.getElementById("mes_us_form");

askName();

function askName() {
  let name = prompt("What is your name?");
  const welcomeMessage = document.getElementById("welcome-message");
  if (!name) {
    name = "Guest";
  }
  welcomeMessage.innerText = `Hello, ${name}!`;
}

function validateForm() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const message = document.getElementById("message").value;
  document.getElementById("name_val").textContent = `Name: ${name}`;
  document.getElementById("email_val").textContent = `Email: ${email}`;
  document.getElementById("phone_val").textContent = `Phone: ${phone}`;
  document.getElementById("mes_val").textContent = `Message: ${message}`;
}

form.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent the default form submission behavior
  validateForm();
});
