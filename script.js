const priceDisplay = document.querySelector('.price-display');
const productDetails = document.querySelector('.price-details');
let price = 50;
let quantity = 0;

const setQuantity = () => {
    quantity = document.querySelector('#square-meter').value;
    displayPrice()
}

const displayPrice = () => {
    let totalPrice = price * quantity;
    priceDisplay.textContent = `$${totalPrice}`
}

const products = [
    base = {
        price: 50,
        title: 'Base Coat',
        description: "hellow testing 123"
    },
    finish1 = {
        price: 75, 
        title: 'Finish 1',
        description: 'goodbye testing 431'
    },
    finish2 = {
        price: 90,
        title: 'Finish 2',
        description: 'hello darkness my old friend'
    }
];



const rows = document.querySelectorAll('.product-row');

for (let i = 0; i < rows.length; i++) {
    rows[i].addEventListener("click", function() {
        rows[0].classList.remove('active');
        rows[1].classList.remove('active');
        rows[2].classList.remove('active');
        rows[i].classList.add("active");

        productDetails.textContent = products[i].description;
        let totalPrice = quantity * products[i].price;
        priceDisplay.textContent = `$${totalPrice}`;

    });    
}
