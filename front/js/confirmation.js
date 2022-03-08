let orderIdNo = localStorage.getItem("OrderIdGenerator");

/* Getting access to DOM elements */
const orderIdSpan = document.getElementById('orderId');

/* Modifying Elements */
orderIdSpan.textContent = orderIdNo;