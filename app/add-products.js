import './add-products.scss';
document.addEventListener("DOMContentLoaded", () => {
    const cartContainer = document.getElementById('cartlist');
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    if (cart.length === 0) {
        cartContainer.innerHTML = '<p class="text-center">Your cart is empty.</p>';
        return;
    }

    cart.forEach(product => {

        const cardDiv = document.createElement('div');
        cardDiv.classList.add('col');

        const card = document.createElement('div');
        card.classList.add('card', 'h-100');

        const img = document.createElement('img');
        img.classList.add('card-img-top');
        img.src = product.image;
        img.alt = product.name;
        img.style.maxWidth = '100%'; 
        img.style.maxHeight = '200px';
        img.style.objectFit = 'cover';

        const cardBody = document.createElement('div');
        cardBody.classList.add('card-body');

        const title = document.createElement('h5');
        title.classList.add('card-title');
        title.textContent = product.name;

        const description = document.createElement('p');
        description.classList.add('card-text');
        description.textContent = product.description;

        cardBody.appendChild(title);
        cardBody.appendChild(description);

        card.appendChild(img);
        card.appendChild(cardBody);

        cardDiv.appendChild(card);
        cartContainer.appendChild(cardDiv);
    });
});
