let shopping_cart = [];
let response;
let getCart = document.getElementById('cart-container');
let cartCounter = document.getElementById('cart-counter')


function AddToCart(event) {
    let createA = document.createElement('a');
    response = event.target.value;
    shopping_cart.push(response)
    createA.setAttribute('onclick', 'DeleteElement()')
    createA.textContent = shopping_cart.at(-1);
    getCart.appendChild(createA)
    cartCounter.textContent = shopping_cart.length
}







