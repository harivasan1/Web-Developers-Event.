// Select the form element
const form = document.querySelector("form");

// Handle form submission
form.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent page reload

  alert("Registration Successful! See you at the Web Developers Event.");

  // Reset form fields
  form.reset();
});
