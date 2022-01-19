fetch('http://localhost:3000/api/products')
    .then(response => response.json())
    .then(products => {
        for (let i = 0; i < products.length; i++) {
            const product = products[i];
            console.log
                /* Getting access to DOM elements */

            const section = document.getElementById('items');

            /* Creating the missing elements */

            const newLink = document.createElement('a');
            const newArticale = document.createElement('article');
            const newImage = document.createElement('img');
            const newHeading = document.createElement('h3');
            const newParaghrapg = document.createElement('p');

            /* Setting elements attributes */

            newLink.setAttribute('href', './product.html?id=42');
            newImage.setAttribute('src', product.imageUrl);
            newImage.setAttribute('alt', 'Lorem ipsum dolor sit amet, Kanap name1');
            newHeading.classList.add('productName');
            newParaghrapg.classList.add('productDescription');

            /* Adding new elements to the  DOM */

            newArticale.appendChild(newImage);
            newArticale.appendChild(newHeading);
            newArticale.appendChild(newParaghrapg);
            section.appendChild(newLink);
            newLink.appendChild(newArticale);
        }
    });