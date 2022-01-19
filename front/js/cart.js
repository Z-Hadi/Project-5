/* Getting access to DOM elements */

const cartSection = document.getElementsByClassName('cart__items');
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
cartImage.setAttribute('src', '../images/product01.jpg');
cartImage.setAttribute('alt', 'Photo of a sofa');
quantityInput.setAttribute(' type ', 'number  ');
quantityInput.setAttribute(' class ', 'itemQuantity  ');
quantityInput.setAttribute('name  ', ' itemQuantity ');
quantityInput.setAttribute(' min ', ' 1 ');
quantityInput.setAttribute(' max ', ' 100 ');
quantityInput.setAttribute(' value ', ' 42 ');


/* Modifying Elements */

productName.textContent = 'Name of the product';
productColor.textContent = 'Green';
productPrice.textContent = '£ 42.00';
quantityParaghraph.textContent = 'Qté : ';
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