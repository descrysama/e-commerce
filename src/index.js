let shopping_cart = [];
let response;
let getCart = document.getElementById('cart-container');
let cartCounter = document.getElementById('cart-counter')
let Cart_number = document.querySelectorAll('.cart-items').length;
let counter = localStorage.getItem('counter') || 0;
let counterlocal = 0;

for (counterlocal = 0; counterlocal <= localStorage.length; counter++) {
    getCart.appendChild(localStorage.getItem('value' + counterlocal))
}



function AddToCart(event) {
    let createA = document.createElement('a');
    response = event.target.value;
    shopping_cart.push(response);
    createA.setAttribute('onclick', 'DeleteElement()');
    createA.setAttribute('class', 'cart-items');
    createA.textContent = shopping_cart.at(-1);
    getCart.appendChild(createA);
    localStorage.setItem('value'+counter, event.target.value);
    counter++;
    cartCounter.textContent = "Votre panier : " + counter;
    localStorage.setItem('counter', counter)
}







