fetch('http://localhost:3000/api/products')
    .then(response => response.json())
    .then(products => {
        for (let i = 0; i < products.length; i++) {
            const product = products[i];
            /* Getting access to DOM elements */

            const articaleImage = document.querySelector('.item__img');
            const itemTitle = document.getElementById('title');
            const itemPrice = document.getElementById('price');
            const itemDescription = document.getElementById('description');
            const colorSelect = document.getElementById('colors');
            const button = document.getElementById('addToCart');

            /* Creating the missing elements */

            const newImage = document.createElement('img');
            const vertOption = document.createElement('option');
            const blancOption = document.createElement('option');

            /* Setting elements attributes */
            newImage.setAttribute('src', '../images/logo.png');
            newImage.setAttribute('alt', product.altTxt);
            vertOption.setAttribute('value', 'vert');
            blancOption.setAttribute('value', 'blanc');

            /* Modifying Elements */
            itemTitle.textContent = product.name;
            itemPrice.textContent = product.price;
            itemDescription.textContent = product.description;
            vertOption.textContent = 'vert';
            blancOption.textContent = 'blanc';



            /* Adding new elements to the  DOM */

            articaleImage.appendChild(newImage);
            colorSelect.appendChild(vertOption);
            colorSelect.appendChild(blancOption);
        }
    });