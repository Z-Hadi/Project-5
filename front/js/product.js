/* Getting access to DOM elements */

const articaleImage = document.getElementsByClassName('item__img');
const itemTitle = document.getElementById('title');
const itemPrice = document.getElementById('price');
const itemDescription = document.getElementById('description');
const colorSelect = document.getElementById('colors');

/* Creating the missing elements */

const newImage = document.createElement('img');
const vertOption = document.createElement('option');
const blancOption = document.createElement('option');

/* Setting elements attributes */
newImage.setAttribute('src', '../images/logo.png');
newImage.setAttribute('alt', 'Photographie d un canapé');
vertOption.setAttribute('value', 'vert');
blancOption.setAttribute('value', 'blanc');

/* Modifying Elements */
itemTitle.textContent = 'Nom du produit';
itemPrice.textContent = '42';
itemDescription.textContent = 'Dis enim malesuada risus sapien gravida nulla nisl arcu.';

/* Adding new elements to the  DOM */

articaleImage.appendChild('newImage');
colorSelect.appendChild('vertOption');
colorSelect.appendChild('blancOption');