const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get('id');

fetch('http://localhost:3000/api/products/' + productId)
    .then(response => response.json())
    .then(product => {
        /* Getting access to DOM elements */
        console.log(product);

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
        // itemQuantity.setAttribute('','required')



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

        function addToCart(product, cart) {
            let productExists = false
                // Add a product
            for (let i = 0; i < cart.length; i++) {
                if (product._id === cart[i]._id && cart[i].color === product.color ) {
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
        button.addEventListener('click', () => {
            if (  colorSelect.value != 0  ){
                console.log(colorSelect);
                if ( parseInt(itemQuantity.value) > 0){
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
        } else {
            window.alert("Please select a quantity !");;}
        } else {
            window.alert("Please select a color !");

        }
        });

    });