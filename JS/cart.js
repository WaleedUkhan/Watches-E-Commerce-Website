// Cart Management
document.addEventListener('DOMContentLoaded', () => {
    displayCartItems();
});

function displayCartItems() {
    const cartContainer = document.querySelector('.cart-container');
    const cartSummary = document.querySelector('.cart-summary');
    cartContainer.innerHTML = '';

    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let total = 0;

    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        cartItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <div class="item-details">
                <h3>${item.name}</h3>
                <p>${item.price}</p>
                <button class="btn-remove">Remove</button>
            </div>
        `;
        cartContainer.appendChild(cartItem);

        const price = parseFloat(item.price.replace('$', ''));
        total += price;
    });

    cartSummary.innerHTML = `<h3>Total: $${total.toFixed(2)}</h3>`;

    // Attach event listeners to remove buttons
    const removeButtons = document.querySelectorAll('.btn-remove');
    removeButtons.forEach(button => {
        button.addEventListener('click', removeFromCart);
    });
}

function removeFromCart(event) {
    const button = event.target;
    const cartItem = button.closest('.cart-item');
    const itemName = cartItem.querySelector('h3').innerText;

    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart = cart.filter(item => item.name !== itemName);
    localStorage.setItem('cart', JSON.stringify(cart));

    displayCartItems();
}
