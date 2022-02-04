const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get('id');

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





        button.addEventListener('click', function() {

            function prepareProduct(product, type) {
                return {
                    _id: product._id,
                    type: type,
                    name: product.name,
                    price: product.price
                }
            }

            function getCart() {
                let cart = window.localStorage.getItem('basketContent')

                if (cart) {
                    cart = JSON.parse(cart)
                } else {
                    cart = []
                }

                return cart
            }

            function setCart(cart) {
                window.localStorage.setItem('basketContent', JSON.strinify(cart))
            }

            function addToCart(product, cart) {
                let productExists = false
                    // Add a product
                for (let i = 0; i < cart.length; i++) {
                    if (product._id === cart[i]._id && cart[i].type === product.type) {
                        cart[i].qunaity += product.qty
                        cart[i].price += product.price * product.qty
                        productExists = true
                        break
                    }
                }

                if (!productExists) {
                    cart.push(product)
                }

                return cart
            }
            const currentCart = getCart()
            const cart = addToCart({
                id: product.id,
                image: product.image,
                price: product.price,

            }, currentCart)
            setCart(cart)
        });


    });