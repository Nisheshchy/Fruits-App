/** @format */

import React, { createContext, useContext, useState, useCallback } from "react";

const CartContext = createContext(null);

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used inside CartProvider");
  return ctx;
};

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  const addToCart = useCallback((product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, qty: item.qty + 1 }
            : item
        );
      }
      return [...prev, { ...product, qty: 1 }];
    });
  }, []);

  const removeFromCart = useCallback((id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  }, []);

  const updateQty = useCallback((id, qty) => {
    if (qty < 1) return;
    setCartItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, qty } : item))
    );
  }, []);

  const clearCart = useCallback(() => setCartItems([]), []);

  const cartCount = cartItems.reduce((sum, item) => sum + item.qty, 0);

  const cartTotal = cartItems.reduce(
    (sum, item) => sum + item.numericPrice * item.qty,
    0
  );

  const openCart = () => setIsCartOpen(true);
  const closeCart = () => setIsCartOpen(false);
  const openCheckout = () => {
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };
  const closeCheckout = () => setIsCheckoutOpen(false);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        cartCount,
        cartTotal,
        isCartOpen,
        isCheckoutOpen,
        addToCart,
        removeFromCart,
        updateQty,
        clearCart,
        openCart,
        closeCart,
        openCheckout,
        closeCheckout,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
