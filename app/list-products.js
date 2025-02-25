import './list-products.scss';

// images
import product1 from "./assets/images/product1.jpg";
import product2 from "./assets/images/product2.jpg";
import product3 from "./assets/images/product3.jpg";
import product4 from "./assets/images/product4.jpg";
import product5 from "./assets/images/product5.jpg";
import product6 from "./assets/images/product6.jpg";
import product7 from "./assets/images/product7.jpg";
import product8 from "./assets/images/product8.jpg";
import product9 from "./assets/images/product9.jpg";
import product10 from "./assets/images/product10.jpg";
import product11 from "./assets/images/product11.jpg";
import product12 from "./assets/images/product12.jpg";

document.addEventListener("DOMContentLoaded", () => {

    const productsContainer = document.getElementById('productslist');

    const products = [
        {
            name: 'Product 1',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            image: product1
        },
        {
            name: 'Product 2',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            image: product2
        },
        {
            name: 'Product 3',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            image: product3
        },
        {
            name: 'Product 4',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            image: product4
        },
        {
            name: 'Product 5',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            image: product5
        },
        {
            name: 'Product 6',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            image: product6
        },
        {
            name: 'Product 7',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            image: product7
        },
        {
            name: 'Product 8',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            image: product8
        },
        {
            name: 'Product 9',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            image: product9
        },
        {
            name: 'Product 10',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            image: product10
        },
        {
            name: 'Product 11',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            image: product11
        },
        {
            name: 'Product 12',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            image: product12
        },
        
    ];

    products.forEach(product => {
        const cardDiv = document.createElement('div');
        cardDiv.classList.add('card');
        
        const img = document.createElement('img');
        img.classList.add('card-img-top');
        img.src = product.image;
        img.alt = product.name;
        img.style.maxWidth = '100%'; 
        img.style.maxHeight = '200px';
        img.style.objectFit = 'cover'

        const cardBody = document.createElement('div');
        cardBody.classList.add('card-body');

        const title = document.createElement('h4');
        title.classList.add('card-title');
        title.textContent = product.name;

        const description = document.createElement('p');
        description.classList.add('card-text');
        description.textContent = product.description;

        const addToCart = document.createElement('button');
        addToCart.classList.add('btn');
        addToCart.classList.add('btn-success');
        addToCart.classList.add('float-end');
        addToCart.textContent = "Add to cart";

        addToCart.addEventListener('click', () => {
            const cart = JSON.parse(localStorage.getItem('cart')) || [];
            const productExists = cart.some(item => item.name === product.name); // Verifica se o produto já existe
        
            if (!productExists) {
                const productToSave = {
                    name: product.name,
                    description: product.description,
                    image: img.src
                };
                cart.push(productToSave);
                localStorage.setItem('cart', JSON.stringify(cart));
                alert(`${product.name} added to cart!`);
            } else {
                alert(`${product.name} is already in the cart!`);
            }
        });

        cardBody.appendChild(title);
        cardBody.appendChild(description);
        cardBody.appendChild(addToCart);
        cardDiv.appendChild(img);
        cardDiv.appendChild(cardBody);

        productsContainer.appendChild(cardDiv);
    });
});