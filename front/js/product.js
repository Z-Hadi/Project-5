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



        /* Modifying Elements */
        itemTitle.textContent = product.name;
        itemPrice.textContent = product.price;
        itemDescription.textContent = product.description;


        /* Adding new elements to the  DOM */

        articaleImage.appendChild(newImage);

        colors.addEventListener('change', function ($event) {
            const productColor = $event.target.value;
             console.log(productColor);
                     
                 });  


        itemQuantity.addEventListener('input', function ($event) {
        if ($event.target.value >=1 && $event.target.value <=100 ){
            const productQty = $event.target.value;
            console.log(productQty);
        }else{
            reject({error:"Not valid Qty!"});
        }
        console.log(productQty);
        });    


         
    });