function getCart() {
    let cart = localStorage.getItem('basketContent')

    if (cart) {
        cart = JSON.parse(cart)
    } else {
        cart = []
    }

    return cart
};

function setCart(cart) {
    localStorage.setItem('basketContent', JSON.stringify(cart))
};

const cart = getCart();

for (let i = 0; i < cart.length; i++) {
    const product = cart[i];


    console.log(cart);
    const newProductID = localStorage.getItem('cartProductID');
    const newProductColor = localStorage.getItem('Product-Color');
    const newProductQuantity = localStorage.getItem('Product-Quantity');

    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');

    /* Getting access to DOM elements */

    const cartSection = document.getElementById('cart__items');
    const quantitySpan = document.getElementById('totalQuantity');
    const priceSpan = document.getElementById('totalPrice');
    const errorMessageParaghraph = document.getElementById('firstNameErrorMsg');

    /* Creating the missing elements */



    const cartArticale = document.createElement('articale');
    const cartImageDiv = document.createElement('div');
    const cartContentDiv = document.createElement('div');
    const cartDescriptionDiv = document.createElement('div');
    const cartSettingsDiv = document.createElement('div');
    const cartQuantityDiv = document.createElement('div');
    const cartDeleteDiv = document.createElement('div');
    const cartImage = document.createElement('img');
    const productName = document.createElement('h2');
    const productColor = document.createElement('p');
    const productPrice = document.createElement('p');
    const quantityParaghraph = document.createElement('p');
    const quantityInput = document.createElement('input');
    const deleteItemParaghraph = document.createElement('p');

    /* Setting elements attributes */

    cartArticale.setAttribute('class', 'cart__item');
    cartArticale.setAttribute('data-id', '{product-ID}');
    cartArticale.setAttribute('data-color', '{product-color}');
    cartImageDiv.setAttribute('class', 'cart__item__img');
    cartContentDiv.setAttribute('class', 'cart__item__content');
    cartDescriptionDiv.setAttribute('class', 'cart__item__content__description');
    cartSettingsDiv.setAttribute('class', 'cart__item__content__settings');
    cartQuantityDiv.setAttribute('class', 'cart__item__content__settings__quantity');
    cartDeleteDiv.setAttribute('class', 'cart__item__content__settings__delete');
    cartImage.setAttribute('src', product.imageUrl);
    cartImage.setAttribute('alt', product.altTxt);


    quantityInput.setAttribute('type', 'number');
    quantityInput.setAttribute('class', 'itemQuantity');
    quantityInput.setAttribute('name', ' itemQuantity');
    quantityInput.setAttribute('min', '1');
    quantityInput.setAttribute('max', '100');
    quantityInput.setAttribute('value', newProductQuantity);


    /* Modifying Elements */

    productName.textContent = product.name;
    productColor.textContent = product.colors;
    productPrice.textContent = product.name;
    quantityParaghraph.textContent = 'Qté :  ';
    deleteItemParaghraph.textContent = 'Delete ';

    quantitySpan.textContent = '2 ';
    priceSpan.textContent = '84.00 ';
    errorMessageParaghraph.textContent = 'ci est un message d erreur';

    /* Adding new elements to the  DOM */

    cartSection.appendChild(cartArticale);
    cartImageDiv.appendChild(cartImage);
    cartArticale.appendChild(cartImageDiv);
    cartDescriptionDiv.appendChild(productName);
    cartDescriptionDiv.appendChild(productColor);
    cartDescriptionDiv.appendChild(productPrice);
    cartContentDiv.appendChild(cartDescriptionDiv);
    cartArticale.appendChild(cartContentDiv);
    cartQuantityDiv.appendChild(quantityParaghraph);
    cartQuantityDiv.appendChild(quantityInput);
    cartSettingsDiv.appendChild(cartQuantityDiv);
    cartDeleteDiv.appendChild(deleteItemParaghraph);
    cartSettingsDiv.appendChild(cartDeleteDiv);
    cartContentDiv.appendChild(cartSettingsDiv);

};