// USing fetch to get the products details from the API
fetch('http://localhost:3000/api/products')
    .then(response => response.json())
    .then(products => {
        for (let i = 0; i < products.length; i++) {
            const product = products[i];

            /* Getting access to DOM elements */

            const section = document.getElementById('items');

            /* Creating the missing elements */
            const newLink = document.createElement('a');
            const newArticale = document.createElement('article');
            const newImage = document.createElement('img');
            const newHeading = document.createElement('h3');
            const newParaghrapg = document.createElement('p');

            /* Setting elements attributes */
            const productId = product._id;
            newLink.setAttribute('href', './product.html?id=' + productId);
            newImage.setAttribute('src', product.imageUrl);
            newImage.setAttribute('alt', product.altTxt);
            newHeading.classList.add('productName');
            newParaghrapg.classList.add('productDescription');

            /* Modifying Elements */
            newHeading.textContent = product.name;
            newParaghrapg.textContent = product.description;


            /* Adding new elements to the DOM */
            newArticale.appendChild(newImage);
            newArticale.appendChild(newHeading);
            newArticale.appendChild(newParaghrapg);
            section.appendChild(newLink);
            newLink.appendChild(newArticale);
        }
    });