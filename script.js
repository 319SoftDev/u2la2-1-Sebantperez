console.log("script running");

// Original code
const appleButton = document.querySelector("#apple-button");

console.log(appleButton);

const appleDropdownContainer = document.querySelector("#apple-dropdown-container");
const appleDropdown = document.querySelector("#apple-dropdown");

// New code to handle the shopping cart and pricing
const bananaBtn = document.querySelector("#banana");
const mangoBtn = document.querySelector("#mango");
const orangeBtn = document.querySelector("#orange");

const shoppingCart = document.querySelector("#shopping-cart");
const totalSpan = document.querySelector("#total-span");
const itemCountSpan = document.querySelector("#item-count");
const clearCartBtn = document.querySelector("#clear-cart");

let total = 0;
let itemCount = 0;
let cartItems = {};

// Function to show the apple dropdown
const toggleAppleDropdown = () => {
    appleDropdownContainer.classList.toggle("is-hidden");
};

// Function to add items to the cart
const addItemToCart = (itemName, itemPrice, quantity = 1) => {
    // Update item count
    itemCount += quantity;
    itemCountSpan.textContent = itemCount;

    // If item already in cart, update quantity
    if (cartItems[itemName]) {
        cartItems[itemName].quantity += quantity;
    } else {
        cartItems[itemName] = { price: itemPrice, quantity: quantity };
    }

    // Clear shopping cart display and sort items
    shoppingCart.innerHTML = "";
    Object.keys(cartItems).sort().forEach(item => {
        const { price, quantity } = cartItems[item];
        const newItem = document.createElement("div");
        newItem.className = "cart-item";
        newItem.innerHTML = `${item} x${quantity} - $${(price * quantity).toFixed(2)} <button class="remove-item" data-item="${item}">x</button>`;
        shoppingCart.appendChild(newItem);
    });

    // Update the total
    total += itemPrice * quantity;
    totalSpan.textContent = total.toFixed(2);
};

// Add event listeners to the buttons
appleButton.addEventListener("click", () => {
    toggleAppleDropdown();
});

appleDropdown.addEventListener("change", (e) => {
    const selectedApple = e.target.value;
    addItemToCart(selectedApple.charAt(0).toUpperCase() + selectedApple.slice(1), 0.75);
    appleDropdownContainer.classList.add("is-hidden"); // Hide dropdown after selection
});

bananaBtn.addEventListener("click", () => {
    addItemToCart("Banana", 0.30);
});

mangoBtn.addEventListener("click", () => {
    addItemToCart("Mango", 1.25);
});

orangeBtn.addEventListener("click", () => {
    addItemToCart("Orange", 0.50);
});

// Clear cart functionality
clearCartBtn.addEventListener("click", () => {
    shoppingCart.innerHTML = "";
    total = 0;
    itemCount = 0;
    totalSpan.textContent = "0.00";
    itemCountSpan.textContent = "0";
    cartItems = {};
});

// Event delegation for removing items
shoppingCart.addEventListener("click", (e) => {
    if (e.target.classList.contains("remove-item")) {
        const itemName = e.target.dataset.item;
        total -= cartItems[itemName].price * cartItems[itemName].quantity;
        totalSpan.textContent = total.toFixed(2);
        itemCount -= cartItems[itemName].quantity;
        itemCountSpan.textContent = itemCount;

        delete cartItems[itemName]; // Remove item from cart

        // Rebuild the cart display
        shoppingCart.innerHTML = "";
        Object.keys(cartItems).sort().forEach(item => {
            const { price, quantity } = cartItems[item];
            const newItem = document.createElement("div");
            newItem.className = "cart-item";
            newItem.innerHTML = `${item} x${quantity} - $${(price * quantity).toFixed(2)} <button class="remove-item" data-item="${item}">x</button>`;
            shoppingCart.appendChild(newItem);
        });
    }
});
