document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const errorMessage = document.getElementById('error-message');

  // Basic validation
  if (email === "" || password === "") {
      errorMessage.textContent = "Both email and password are required.";
  } else if (!validateEmail(email)) {
      errorMessage.textContent = "Please enter a valid email address.";
  } else {
      // Simulate login success (replace this with actual authentication logic)
      alert('Login successful!');
      errorMessage.textContent = ""; // Clear error message
      // Redirect or perform any action upon successful login
  }
});

// Simple email validation
function validateEmail(email) {
  const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  return regex.test(email);
}
