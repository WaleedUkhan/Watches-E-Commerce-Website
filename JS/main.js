// Add to Cart Functionality
const addToCartButtons = document.querySelectorAll(".btn");

addToCartButtons.forEach((button) => {
  button.addEventListener("click", addToCart);
});

function addToCart(event) {
  const button = event.target;
  const product = button.closest(".product-card");
  const productName = product.querySelector("h3").innerText;
  const productPrice = product.querySelector("p").innerText;
  const productImage = product.querySelector("img").src;

  // an object having name,price and image
  const cartItem = {
    name: productName,
    price: productPrice,
    image: productImage,
  };

  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push(cartItem);
  localStorage.setItem("cart", JSON.stringify(cart));

  alert(`${productName} has been added to the cart!`);
}

// Cart Management

function displayCartItems() {
  const cartContainer = document.querySelector(".cart-container");
  const cartSummary = document.querySelector(".cart-summary");
  cartContainer.innerHTML = "";

  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let total = 0;

  cart.forEach((item) => {
    const cartItem = document.createElement("div");
    cartItem.classList.add("cart-item");
    cartItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <div class="item-details">
                <h3>${item.name}</h3>
                <p>${item.price}</p>
                <button class="btn-remove">Remove</button>
            </div>
        `;
    cartContainer.appendChild(cartItem);

    const price = parseFloat(item.price.replace("$", ""));
    total += price;
  });

  cartSummary.innerHTML = `<h3>Total: $${total.toFixed(2)}</h3>`;

  // Attach event listeners to remove buttons
  const removeButtons = document.querySelectorAll(".btn-remove");
  removeButtons.forEach((button) => {
    button.addEventListener("click", removeFromCart);
  });
}

function removeFromCart(event) {
  const button = event.target;
  const cartItem = button.closest(".cart-item");
  const itemName = cartItem.querySelector("h3").innerText;

  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart = cart.filter((item) => item.name !== itemName);
  localStorage.setItem("cart", JSON.stringify(cart));

  displayCartItems();
}


// User Login 

document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("login-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      const username = document.getElementById("username").value;
      const password = document.getElementById("password").value;

      if (username && password) {
        alert("Login successful!");
        localStorage.setItem("user", JSON.stringify({ username: username }));
        window.location.href = "index.html";
      } else {
        alert("Invalid credentials. Please try again.");
      }
    });
});

// Check user login status

function checkLoginStatus() {
  const user = JSON.parse(localStorage.getItem("user"));
  const loginLink = document.getElementById("login-link");
  const logoutButton = document.getElementById("logout-button");

  if (user) {
    // User is logged in
    loginLink.style.display = "none"; // Hide login link
    logoutButton.style.display = "block"; // Show logout button
  } else {
    // User is not logged in
    loginLink.style.display = "block"; // Show login link
    logoutButton.style.display = "none"; // Hide logout button
  }
}

// Initialize functions

document.addEventListener("DOMContentLoaded", () => {
  if (window.location.pathname.endsWith("cart.html")) {
    displayCartItems();
  }
  checkLoginStatus();
});
