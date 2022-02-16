function getCart() {
    let cart = localStorage.getItem("basketContent");

    if (cart) {
        cart = JSON.parse(cart);
    } else {
        cart = [];
    }

    return cart;
}

function setCart(cart) {
    localStorage.setItem("basketContent", JSON.stringify(cart));
}

let cart = getCart();

let totalCost = 0;
let tolalQuantity = 0;

for (let i = 0; i < cart.length; i++) {
    const product = cart[i];

    console.log(cart);

    /* Getting access to DOM elements */

    const cartSection = document.getElementById("cart__items");
    const quantitySpan = document.getElementById("totalQuantity");
    const priceSpan = document.getElementById("totalPrice");
    const errorMessageParaghraph = document.getElementById("firstNameErrorMsg");
    const submitOrder = document.getElementById("order");


const firstNameInput = document.getElementById('firstName');
const lastNameInput = document.getElementById('lastName');
const addressInput = document.getElementById('address');
const cityInput = document.getElementById('city');
const emailInput = document.getElementById('email');


    
    const newTry = document.getElementsByClassName("itemQuantity");

    /* Creating the missing elements */

    const cartArticale = document.createElement("articale");
    const cartImageDiv = document.createElement("div");
    const cartContentDiv = document.createElement("div");
    const cartDescriptionDiv = document.createElement("div");
    const cartSettingsDiv = document.createElement("div");
    const cartQuantityDiv = document.createElement("div");
    const cartDeleteDiv = document.createElement("div");
    const cartImage = document.createElement("img");
    const productName = document.createElement("h2");
    const productColor = document.createElement("p");
    const productPrice = document.createElement("p");
    const quantityParaghraph = document.createElement("p");
    const quantityInput = document.createElement("input");
    const deleteItem = document.createElement("p");
const url =  'http://localhost:3000/api/products' ;
    /* Setting elements attributes */

    cartArticale.setAttribute("class", "cart__item");
    cartArticale.setAttribute("data-id", product._id);
    cartArticale.setAttribute("data-color", product.color);
    cartImageDiv.setAttribute("class", "cart__item__img");
    cartContentDiv.setAttribute("class", "cart__item__content");
    cartDescriptionDiv.setAttribute("class", "cart__item__content__description");
    cartSettingsDiv.setAttribute("class", "cart__item__content__settings");
    cartQuantityDiv.setAttribute("class", "cart__item__content__settings__quantity" );
    cartDeleteDiv.setAttribute("class", "cart__item__content__settings__delete");
    cartImage.setAttribute("src", product.imageUrl);
    cartImage.setAttribute("alt", product.altTxt);

    quantityInput.setAttribute("type", "number");
    quantityInput.setAttribute("class", "itemQuantity");
    quantityInput.setAttribute("name", " itemQuantity");
    quantityInput.setAttribute("min", "1");
    quantityInput.setAttribute("max", "100");
    quantityInput.setAttribute("value", product.quantity);

    /* Modifying Elements */

    productName.textContent = product.name;
    productColor.textContent = product.color;
    productPrice.textContent = "£ " + product.price;
    quantityParaghraph.textContent = "Qty :  ";
    deleteItem.textContent = "Delete ";
    totalCost += product.price * product.quantity;
    tolalQuantity += product.quantity;
    quantitySpan.textContent = tolalQuantity;
    priceSpan.textContent = totalCost;
    errorMessageParaghraph.textContent = "ci est un message d erreur";

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
    cartDeleteDiv.appendChild(deleteItem);
    cartSettingsDiv.appendChild(cartDeleteDiv);
    cartContentDiv.appendChild(cartSettingsDiv);

    /* Event Listeners */
   
    deleteItem.addEventListener("click", () => {
    cart.splice(cart.indexOf(cart[i]), 1);
    setCart(cart);
    location.reload(true);
    });


    quantityInput.addEventListener("change", () => {
        product.quantity= parseInt(quantityInput.value);
        if ( product.quantity === 0 ){
            cart.splice(cart.indexOf(cart[i]), 1);
            setCart(cart);
            location.reload(true); }else{
         setCart(cart);}
          });

         
}
