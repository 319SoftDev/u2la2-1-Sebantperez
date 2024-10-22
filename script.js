console.log("script running");

// New code to handle the shopping cart and pricing
const appleBtn = document.querySelector("#apple");
const bananaBtn = document.querySelector("#banana");
const mangoBtn = document.querySelector("#mango");
const orangeBtn = document.querySelector("#orange");

const shoppingCart = document.querySelector("#shopping-cart");
const totalSpan = document.querySelector("#total-span");
const clearCartBtn = document.querySelector("#clear-cart");

let total = 0;

// Variables to track quantities
let cartItems = {
  apple: 0,
  banana: 0,
  mango: 0,
  orange: 0,
};

// Function to add items to the cart
const addItemToCart = (itemName, itemPrice, itemKey) => {
  // Increment the quantity of the fruit
  cartItems[itemKey]++;

  // Check if item already exists in the cart, if yes, just update quantity
  let existingItem = document.querySelector(`#cart-${itemKey}`);
  if (existingItem) {
    existingItem.textContent = `${itemName} x${cartItems[itemKey]} - $${(cartItems[itemKey] * itemPrice).toFixed(2)}`;
  } else {
    // Create a new paragraph element for the item if not present
    const newItem = document.createElement("p");
    newItem.id = `cart-${itemKey}`;
    newItem.textContent = `${itemName} x1 - $${itemPrice.toFixed(2)}`;
    shoppingCart.appendChild(newItem);
  }

  // Update the total
  total += itemPrice;
  totalSpan.textContent = total.toFixed(2);
};

// Add event listeners to the buttons
appleBtn.addEventListener("click", () => {
  addItemToCart("Apple", 0.75, "apple");
});

bananaBtn.addEventListener("click", () => {
  addItemToCart("Banana", 0.30, "banana");
});

mangoBtn.addEventListener("click", () => {
  addItemToCart("Mango", 1.25, "mango");
});

orangeBtn.addEventListener("click", () => {
  addItemToCart("Orange", 0.50, "orange");
});

// Clear Cart Functionality
clearCartBtn.addEventListener("click", () => {
  // Clear the cart visually
  shoppingCart.innerHTML = '';

  // Reset total and quantities
  total = 0;
  totalSpan.textContent = total.toFixed(2);
  cartItems = {
    apple: 0,
    banana: 0,
    mango: 0,
    orange: 0,
  };
});
