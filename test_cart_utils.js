import { addItem, calculateSubtotal } from "./cart_utils.js";


const cart = [{ id: "sku-1", price: 10, quantity: 2 }];
const updated = addItem(cart, { id: "sku-1", price: 10, quantity: 3 });

if (updated[0].quantity !== 5) {
  throw new Error("addItem should merge quantities for an existing SKU");
}

if (calculateSubtotal(updated) !== 50) {
  throw new Error("calculateSubtotal should calculate the cart total");
}

const withNewItem = addItem(updated, { id: "sku-2", price: 7.5, quantity: 2 });

if (withNewItem.length !== 2 || calculateSubtotal(withNewItem) !== 65) {
  throw new Error("addItem should append a new SKU without changing existing items");
}

console.log("cart_utils checks passed");
