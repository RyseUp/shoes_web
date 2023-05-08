// REPONSIVE MAIN HEADER
$(document).ready(function() {
    $('#toggle').click(function() {
        $('.header-main .container').slideToggle();
    });
})
// OPEN AND CLOSE CART
const cartIcon = document.querySelector("#cart-icon");
const cart = document.querySelector(".cart");
const cartClose = document.querySelector("#cart-close");

cartIcon.addEventListener("click", () => {
    cart.classList.add("active");
});

cartClose.addEventListener("click", () => {
    cart.classList.remove("active");
});

// Start when document is ready
if (document.readyState == "loading"){
    document.addEventListener('DOMContentLoaded',start);
}else{
    start();
}

// ================ START =================
function start(){
    addEvents();
}

// ================ UPDATE & RENDER ================
function update(){
    addEvents();
    updateTotal();  
}

// ================ ADD EVENTS =================
function addEvents(){
    // remove item from cart
    let cartRemove_btns = document.querySelectorAll(".cart-remove");
    console.log(cartRemove_btns);
    cartRemove_btns.forEach((btn) => {
        btn.addEventListener("click", handle_removeCartItem);
    });

    // change item quantity
    let quantity_input =  document.querySelectorAll(".cart-quantity");
    quantity_input.forEach(input => {
        input.addEventListener("change", handel_changeItemQuantity);
    })
}

//================ HANDLE FUNCTION =============
function handle_removeCartItem(){
    this.parentElement.remove();

    update();
}

function handel_changeItemQuantity(){
    if(isNaN(this.value) || this.value < 1){
        this.value = 1;
    }
    this.value = Math.floor(this.value);

    update();
}

//================ UPDATE AND RERENDER FUNCTION ============
function updateTotal(){
    let cartBoxes = document.querySelectorAll('.cart-box');
    const totalElement = cart.querySelector('.total-price');
    let total = 0;
    cartBoxes.forEach((cartBox) => {
        let priceElement = cartBox.querySelector(".cart-price");
        let price = parseFloat(priceElement.innerHTML.replace("$",""));
        let quantity = cartBox.querySelector(".cart-quantity").value;
        total += price*quantity;
    });
    total = total.toFixed(2);
    totalElement.innerHTML = "$" + total ;
}