/**
 * Small dependency-free cart helpers for an e-commerce integration.
 */

export function addItem(cart, item) {
  if (!item?.id || item.quantity <= 0 || item.price < 0) {
    throw new Error("Item must have an id, a positive quantity, and a non-negative price.");
  }

  const existing = cart.find((entry) => entry.id === item.id);
  if (existing) {
    return cart.map((entry) =>
      entry.id === item.id
        ? { ...entry, quantity: entry.quantity + item.quantity }
        : entry
    );
  }

  return [...cart, { ...item }];
}

export function calculateSubtotal(cart) {
  return cart.reduce((total, item) => total + item.price * item.quantity, 0);
}
