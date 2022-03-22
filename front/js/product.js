// URLSearchParams used to get the user selection from the home page
const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get('id');

// Using fetch to get the product details from the API
fetch('http://localhost:3000/api/products/' + productId)
    .then(response => response.json())
    .then(product => {
        /* Getting access to DOM elements */
        const articaleImage = document.querySelector('.item__img');
        const itemTitle = document.getElementById('title');
        const itemPrice = document.getElementById('price');
        const itemDescription = document.getElementById('description');
        const colorSelect = document.getElementById('colors');
        const button = document.getElementById('addToCart');
        const itemQuantity = document.getElementById('quantity');

        /* Creating the missing elements */

        const newImage = document.createElement('img');
        // For loop to call all the product's colors for the drop menu
        for (let i = 0; i < product.colors.length; i++) {
            const option = document.createElement('option');
            option.setAttribute('value', product.colors[i]);
            option.textContent = product.colors[i];
            colorSelect.appendChild(option);
        };


        /* Setting elements attributes */
        newImage.setAttribute('src', product.imageUrl);
        newImage.setAttribute('alt', product.altTxt);


        /* Modifying Elements */
        itemTitle.textContent = product.name;
        itemPrice.textContent = product.price;
        itemDescription.textContent = product.description;


        /* Adding new elements to the  DOM */

        articaleImage.appendChild(newImage);

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

        /** 
         *  Function to add a product to the cart, if the product specs are different from ones in the carts
         * if  a product with the same color exicts in the cart this function will increase the qty with the new input value
         */
        function addToCart(product, cart) {
            let productExists = false
                // Add a product to the cart 
            for (let i = 0; i < cart.length; i++) {
                if (product._id === cart[i]._id && cart[i].color === product.color) {
                    cart[i].quantity += product.quantity
                    cart[i].price += product.price * product.quantity
                    productExists = true
                    break
                }
            }
            if (!productExists) {
                cart.push(product)
            }

            return cart
        };

        // EventListener for "add to cart" button
        button.addEventListener('click', () => {
            if (colorSelect.value != 0 && parseInt(itemQuantity.value) > 0) {
                const currentCart = getCart()

                const cart = addToCart({
                    _id: product._id,
                    name: product.name,
                    altTxt: product.altTxt,
                    imageUrl: product.imageUrl,
                    price: product.price,
                    quantity: parseInt(itemQuantity.value),
                    color: colors.value
                }, currentCart)

                setCart(cart)
                document.location.href = "./cart.html";
            }

            // If statement to highlight the color field if the user clicked "Add to cart" button without adding valid color.
            if (!colorSelect.value) {
                colorSelect.style.border = " 2px red solid";
            }
            // If statement to highlight the quantity field if the user clicked "Add to cart" button without adding valid qty.
            if (parseInt(itemQuantity.value) <= 0) {
                itemQuantity.style.border = " 2px red solid";
            }


        });
        // EventListener for the quantity input changes
        itemQuantity.addEventListener('change', () => {

            if (parseInt(itemQuantity.value) > 0) {
                itemQuantity.style.border = " none";
            } else {
                itemQuantity.style.border = " 2px red solid";
            }
        });

        // EventListener for the color input changes
        colorSelect.addEventListener('change', () => {

            if (colorSelect.value != 0) {
                colorSelect.style.border = " none";
            } else {
                colorSelect.style.border = " 2px red solid";
            }
        });

    });