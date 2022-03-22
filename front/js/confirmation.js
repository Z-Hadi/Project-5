// Getting the order ID from the Localstorage
let orderIdNo = localStorage.getItem("OrderIdGenerator");

/* Getting access to DOM elements */
const orderIdSpan = document.getElementById('orderId');

/* Modifying orderIdSpan with the Order ID */
orderIdSpan.textContent = orderIdNo;