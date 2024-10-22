console.log("script running");

// Original code (kept for your reference)
const appleButton = document.querySelector("#banana");

console.log(appleButton);

// Removed the alert function entirely
const addApple = () => {
  // No alert or popup
};
appleButton.addEventListener("click", addApple); 

// New code to handle the shopping cart and pricing
const appleBtn = document.querySelector("#apple");
const bananaBtn = document.querySelector("#banana");
const mangoBtn = document.querySelector("#mango");

const shoppingCart = document.querySelector("#shopping-cart");
const totalSpan = document.querySelector("#total-span");

let total = 0;

// Function to add items to the cart
const addItemToCart = (itemName, itemPrice) => {
  // Create a new paragraph element for the item
  const newItem = document.createElement("p");
  newItem.textContent = `${itemName} - $${itemPrice.toFixed(2)}`; 
  
  // Append the new item to the shopping cart
  shoppingCart.appendChild(newItem);

  // Update the total
  total += itemPrice;
  totalSpan.textContent = total.toFixed(2);
};

// Add event listeners to the buttons
appleBtn.addEventListener("click", () => {
  addItemToCart("Apple", 0.75);
});

bananaBtn.addEventListener("click", () => {
  addItemToCart("Banana", 0.30); // 
});

mangoBtn.addEventListener("click", () => {
  addItemToCart("Mango", 1.25); // 
});
