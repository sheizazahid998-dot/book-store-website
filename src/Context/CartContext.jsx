import React, { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (book) => {
    const ArrayCopy = [...cartItems];
    const bookExists = ArrayCopy.find((item) => item.id === book.id);

    if (bookExists) {
      toast.error("This book is already in your cart!");
      return;
    }

    const bookWithQuantity = { ...book, quantity: 1 };
    ArrayCopy.push(bookWithQuantity);
    setCartItems(ArrayCopy);

    toast.success("Book has been successfully added to your cart");
  };

  const updateQuantity = (id, qty) => {
    if (qty < 1) return;
    const ArrayCopy = [...cartItems];
    const bookIndex = ArrayCopy.findIndex((item) => item.id === id);
    if (bookIndex !== -1) {
      ArrayCopy[bookIndex].quantity = qty;

      setCartItems(ArrayCopy);
    }
  };
  const removeFromCart = (id) => {
    console.log("Remove button clicked for ID:", id);

    const updatedCart = cartItems.filter((item) => item.id !== id);

    setCartItems(updatedCart);

    toast.error("Item removed from cart");
  };

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const cartTotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        updateQuantity,
        removeFromCart,
        cartCount,
        cartTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
