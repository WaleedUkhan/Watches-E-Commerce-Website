document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("login-form");
  const logoutButton = document.getElementById("logout-button");

  // Check if user is already logged in
  const user = JSON.parse(localStorage.getItem("user"));
  if (user) {
    loginForm.style.display = "none"; 
    logoutButton.style.display = "block"; 
  }

  // Handle login form submission
  loginForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Simple validation for demo purposes
    if (username && password) {
      localStorage.setItem("user", JSON.stringify({ username: username }));
      window.location.href = "index.html"; // Redirect to home page after login
    } else {
      alert("Please enter both username and password.");
    }
  });

  // Add event listener to the logout button
  document.getElementById("logout-button").addEventListener("click", () => {
    localStorage.removeItem("user");
    // Redirect to home or login page after logout
    window.location.href = "login.html"; //'login.html'
  });

  // Handle logout button click
  logoutButton.addEventListener("click", function () {
    localStorage.removeItem("user"); // Remove user data from local storage
    alert("Logged out successfully.");
    window.location.href = "login.html"; // Redirect to login page after logout
  });
});
