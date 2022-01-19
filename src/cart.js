let counter = 0;
for (counter = 0; counter <= localStorage.length; counter++) {
    GetItems = localStorage.getItem('value' + counter);
    console.log(GetItems);
    CreateLi = document.createElement('li');
    CreateLi.textContent = GetItems;
    CreateLi.setAttribute('class', 'cart_content');
    document.getElementById('cart-content').appendChild(CreateLi);
}