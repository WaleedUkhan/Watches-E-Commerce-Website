// Example static data for products

document.addEventListener('DOMContentLoaded', () => {
    displayProducts();
});

function displayProducts() {
    const productsContainer = document.querySelector('.products-container');
    productsContainer.innerHTML = '';

    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <div class="product-details">
                <h3>${product.name}</h3>
                <p>${product.price}</p>
                <p>${product.description}</p>
                <button class="btn-add-to-cart" data-id="${product.id}">Add to Cart</button>
            </div>
        `;
        productsContainer.appendChild(productCard);
    });

    // Attach event listeners to add-to-cart buttons
    const addToCartButtons = document.querySelectorAll('.btn-add-to-cart');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', addToCart);
    });
}
