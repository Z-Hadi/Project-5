function getCart() {
    let cart = localStorage.getItem("basketContent");

    if (cart) {
        cart = JSON.parse(cart);
    } else {
        cart = [];
    }

    return cart;
}

let cart = getCart();
displayCart(cart);

function setCart(cart) {
    localStorage.setItem("basketContent", JSON.stringify(cart));
};

function updateTotal(cost, quantity) {
    const quantitySpan = document.getElementById("totalQuantity");
    const priceSpan = document.getElementById("totalPrice");
    quantitySpan.textContent = quantity;
    priceSpan.textContent = cost;
};


function getTotal(cart) {
    let cost = 0;
    let quantity = 0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        cost += product.price * product.quantity;
        quantity += product.quantity;

    };
    return { cost, quantity };
};

function deleteCartItem(cart, index) {
    cart.splice(cart.indexOf(cart[index]), 1);
    setCart(cart);
    const total = getTotal(cart);
    displayCart(cart)

    updateTotal(total.cost, total.quantity);
};






function displayCart(cart) {

    let cost = 0;
    let quantity = 0;

    const quantitySpan = document.getElementById("totalQuantity");
    const priceSpan = document.getElementById("totalPrice");
    /* Getting access to DOM elements */
    const cartSection = document.getElementById("cart__items");
    cartSection.innerHTML = ''

    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];



        cost += product.price * product.quantity;
        quantity += product.quantity;
        quantitySpan.textContent = quantity;
        priceSpan.textContent = cost;

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

        /* Setting elements attributes */

        cartArticale.setAttribute("class", "cart__item");
        cartArticale.setAttribute("data-id", product._id);
        cartArticale.setAttribute("data-color", product.color);
        cartImageDiv.setAttribute("class", "cart__item__img");
        cartContentDiv.setAttribute("class", "cart__item__content");
        cartDescriptionDiv.setAttribute("class", "cart__item__content__description");
        cartSettingsDiv.setAttribute("class", "cart__item__content__settings");
        cartQuantityDiv.setAttribute("class", "cart__item__content__settings__quantity");
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

        /* Adding new elements to the  DOM */


        const productIDs = [];
        productIDs.push = (cart[i]._id);



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
            deleteCartItem(cart, i)
        });

        quantityInput.addEventListener("change", () => {
            let newQuantity = parseInt(quantityInput.value);
            if (newQuantity >= 1 && newQuantity <= 100) {
                product.quantity = parseInt(quantityInput.value);

                const total = getTotal(cart);
                updateTotal(total.cost, total.quantity);
                if ((parseInt(quantityInput.value)) === 0) {
                    deleteCartItem(cart, i)
                }
                setCart(cart);
            }
        });
        quantityInput.addEventListener("blur", () => {
            let newQuantity = parseInt(quantityInput.value);

            if (newQuantity < 1) {
                deleteCartItem(cart, i)
                const total = getTotal(cart);
                updateTotal(total.cost, total.quantity);
                return setCart(cart);
            }
            if (newQuantity > 100) {
                console.dir(quantityInput)
                quantityInput.value = quantityInput.max;

            }

            product.quantity = parseInt(quantityInput.value);
            const total = getTotal(cart);
            updateTotal(total.cost, total.quantity);

            setCart(cart);
        });
    }

}

//Checking the Form Fields Input

const firstName = document.getElementById('firstName');
const firstNameErrorMsg = document.getElementById("firstNameErrorMsg");
firstName.setAttribute('pattern', "[a-zA-Z]{1,20}");

const lastName = document.getElementById("lastName");
const lastNameErrorMsg = document.getElementById("lastNameErrorMsg");
lastName.setAttribute('pattern', "[a-zA-Z]{1,20}");

const address = document.getElementById("address");
const addressErrorMsg = document.getElementById("addressErrorMsg");
address.setAttribute('pattern', "[a-zA-Z0-9,./' '-]{1,50}");

const city = document.getElementById("city");
const cityErrorMsg = document.getElementById("cityErrorMsg");
city.setAttribute('pattern', "[a-zA-Z]{1,20}");

const email = document.getElementById("email");
const emailErrorMsg = document.getElementById("emailErrorMsg");
email.setAttribute('pattern', "[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}");

const form = document.querySelector('.cart__order__form');
form.setAttribute('novalidate', true)


const productIDs = [cart.map(product => product._id)]


// Submit Event listner

form.addEventListener('submit', function(event) {
    event.preventDefault()


    if (!firstName.checkValidity()) {
        firstNameErrorMsg.textContent = "Please provide a valid first name";
    } else { firstNameErrorMsg.textContent = ""; };

    if (!lastName.checkValidity()) {
        lastNameErrorMsg.textContent = "Please provide a valid last name";
    } else { lastNameErrorMsg.textContent = ""; };

    if (!address.checkValidity()) {
        addressErrorMsg.textContent = "Please provide a valid address";
    } else { addressErrorMsg.textContent = ""; };

    if (!city.checkValidity()) {
        cityErrorMsg.textContent = "Please provide a valid city name";
    } else { cityErrorMsg.textContent = ""; };

    if (!email.checkValidity()) {
        emailErrorMsg.textContent = "Please provide a valid email address";
    } else { emailErrorMsg.textContent = ""; };



    if (form.checkValidity()) {
        const formData = new FormData(form)
        const firstName = formData.get('firstName')
        const lastName = formData.get('lastName')
        const address = formData.get('address')
        const city = formData.get('city')
        const email = formData.get('email')

        const finalData = {
            firstName: formData.get('firstName'),
            lastName: formData.get('lastName'),
            address: formData.get('address'),
            city: formData.get('city'),
            email: formData.get('email'),
            product: productIDs
        }

        console.log(finalData)

        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(finalData),
        };

        fetch('http://localhost:3000/api/products/order', options)

        // Converting to JSON
        .then(response => response.json())

        // Displaying results to console
        .then(json => console.log(json));

    } else {
        event.stopPropagation()
    }
}, false)