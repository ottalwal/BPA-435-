document.addEventListener('DOMContentLoaded', () => {
    const productGrid = document.getElementById('product-grid');
    const cartItemsList = document.getElementById('cart-items');
    const cartTotalSpan = document.getElementById('cart-total');

    let cart = JSON.parse(localStorage.getItem('shoppingCart')) || {};

    const products = [
        { id: 'product1', name: 'Freight T-Shirt', price: 25, image: './res/tshirt.jpg' },
        { id: 'product2', name: 'Band Poster', price: 10, image: './res/poster.jpg' },
        { id: 'product3', name: 'Signed CD', price: 15, image: './res/cd.jpg' },
        { id: 'product4', name: 'Freight Hat', price: 20, image: './res/hat.jpg' },
        { id: 'product5', name: 'Vinyl Record', price: 30, image: './res/vinyl.jpg' },
        { id: 'product6', name: 'Sticker Pack', price: 5, image: './res/stickers.jpg' },
        { id: 'product7', name: 'Band Keychain', price: 8, image: './res/keychain.jpg' },
        { id: 'tourTicket1', name: 'New York Tour Ticket', price: 50, image: './res/tour1.jpg' },
        { id: 'tourTicket2', name: 'Los Angeles Tour Ticket', price: 60, image: './res/tour2.jpg' },
        { id: 'tourTicket3', name: 'Chicago Tour Ticket', price: 55, image: './res/tour3.jpg' },
        { id: 'tourTicket4', name: 'London Tour Ticket', price: 70, image: './res/tour4.jpg' },
    ];

    function renderProducts() {
        productGrid.innerHTML = '';
        products.forEach(product => {
            const productCard = document.createElement('div');
            productCard.classList.add('product-card');
            productCard.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <h3 class="product-title">${product.name}</h3>
                <p class="product-price">$${product.price.toFixed(2)}</p>
                <button class="add-to-cart" data-product-id="${product.id}">Add to Cart</button>
            `;
            productGrid.appendChild(productCard);
        });
    }

    function updateCartDisplay() {
        cartItemsList.innerHTML = '';
        let totalPrice = 0;
        for (const productId in cart) {
            const product = products.find(p => p.id === productId);
            if (product) {
                const cartItem = document.createElement('li');
                cartItem.classList.add('cart-item');
                cartItem.innerHTML = `
                    <span class="cart-item-title">${product.name}</span>
                    <div class="cart-item-quantity-controls">
                        <button class="remove-item" data-product-id="${productId}">-</button>
                        <span>${cart[productId]}x</span>
                    </div>
                    <span class="cart-item-price">$${(product.price * cart[productId]).toFixed(2)}</span>
                `;
                cartItemsList.appendChild(cartItem);
                totalPrice += product.price * cart[productId];
            }
        }
        cartTotalSpan.textContent = totalPrice.toFixed(2);
    }

    function addToCart(productId) {
        cart[productId] = (cart[productId] || 0) + 1;
        localStorage.setItem('shoppingCart', JSON.stringify(cart));
        updateCartDisplay();
    }

    function removeFromCart(productId) {
        if (cart[productId] > 1) {
            cart[productId]--;
        } else {
            delete cart[productId];
        }
        localStorage.setItem('shoppingCart', JSON.stringify(cart));
        updateCartDisplay();
    }

    function handleAddToCartFromUrl() {
        const urlParams = new URLSearchParams(window.location.search);
        const productId = urlParams.get('addToCart');
        if (productId) {
            addToCart(productId);
            window.history.replaceState({}, document.title, window.location.pathname);
        }
    }

    productGrid.addEventListener('click', event => {
        if (event.target.classList.contains('add-to-cart')) {
            const productId = event.target.dataset.productId;
            addToCart(productId);
        }
    });

    cartItemsList.addEventListener('click', event => {
        if (event.target.classList.contains('remove-item')) {
            const productId = event.target.dataset.productId;
            removeFromCart(productId);
        }
    });

    renderProducts();
    updateCartDisplay();
    handleAddToCartFromUrl();
});