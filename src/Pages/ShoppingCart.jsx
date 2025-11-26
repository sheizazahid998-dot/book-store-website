import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../Context/CartContext";

const ShoppingCart = () => {
  const { cartItems, updateQuantity, removeFromCart, cartTotal, cartCount } =
    useCart();

  // ---------- EMPTY CART UI ----------
  if (!cartItems.length) {
    return (
      <main className="w-full min-h-screen bg-white flex flex-col items-center py-10 px-4">
        <div className="flex flex-col items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-shopping-bag h-7 w-7 md:h-9 md:w-9 text-emerald-600"
            aria-hidden="true"
          >
            <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path>
            <path d="M3 6h18"></path>
            <path d="M16 10a4 4 0 0 1-8 0"></path>
          </svg>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-2 md:mb-3 flex items-center justify-center gap-2 md:gap-3">
            Shopping Cart
          </h1>

          <p className="text-gray-600 text-sm md:text-base lg:text-lg">
            0 items in your cart
          </p>
        </div>

        {/* Empty Cart Box */}
        <div className="mt-10 bg-white border border-gray-100 shadow-md rounded-2xl p-10 w-full max-w-md text-center">
          <div className="flex justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-shopping-bag h-12 w-12 md:h-16 md:w-16 text-emerald-600"
              aria-hidden="true"
            >
              <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path>
              <path d="M3 6h18"></path>
              <path d="M16 10a4 4 0 0 1-8 0"></path>
            </svg>
          </div>

          <h2 className="text-xl font-semibold mt-4 text-gray-800">
            Your cart feels lonely
          </h2>

          <p className="text-gray-500 mt-2 text-sm leading-relaxed">
            Discover our collection of premium books and start your reading
            journey.
          </p>

          <Link to="/books">
            <button className="mt-6 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-6 py-3 rounded-full inline-flex items-center gap-2 transition">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-book-open h-4 w-4 md:h-5 md:w-5"
                aria-hidden="true"
              >
                <path d="M12 7v14"></path>
                <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path>
              </svg>
              Browse Collection
            </button>
          </Link>
        </div>
      </main>
    );
  }

  // ---------- CART WITH ITEMS UI ----------
  return (
    <main className="w-full min-h-screen bg-white flex flex-col items-center py-10 px-4">
      <div className="flex flex-col items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-shopping-bag h-7 w-7 md:h-9 md:w-9 text-emerald-600"
          aria-hidden="true"
        >
          <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path>
          <path d="M3 6h18"></path>
          <path d="M16 10a4 4 0 0 1-8 0"></path>
        </svg>

        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-2 md:mb-3 flex items-center justify-center gap-2 md:gap-3">
          Shopping Cart
        </h1>

        <p className="text-gray-600 text-sm md:text-base lg:text-lg"></p>
      </div>

      <div className="mt-10 w-full max-w-6xl grid grid-cols-1 lg:grid-cols-[2fr,1fr] gap-8">
        <section className="space-y-4">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="bg-white border border-gray-100 shadow-md rounded-2xl p-5 flex gap-4 items-start"
            >
              {/* Image */}
              <div className="w-28 h-28 rounded-xl overflow-hidden border border-gray-100">
                <img
                  className="w-full h-full object-cover"
                  src={item.image}
                  alt={item.title}
                />
              </div>

              {/* Content */}
              <div className="flex-1 flex flex-col gap-2">
                <div className="flex justify-between gap-4">
                  <div>
                    <h2 className="text-lg font-semibold text-gray-900">
                      {item.title}
                    </h2>
                    <p className="mt-1 text-xs md:text-sm text-gray-500">
                      {item.author}
                    </p>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-gray-400 hover:text-red-500"
                    title="Remove item"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-trash-2"
                    >
                      <path d="M3 6h18"></path>
                      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"></path>
                      <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                      <line x1="10" y1="11" x2="10" y2="17"></line>
                      <line x1="14" y1="11" x2="14" y2="17"></line>
                    </svg>
                  </button>
                </div>

                {/* Quantity & per-item total */}
                <div className="flex items-center justify-between mt-3">
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      disabled={item.quantity <= 1}
                      className="h-8 w-8 border border-gray-300 rounded-full flex items-center justify-center text-gray-700 disabled:opacity-40"
                    >
                      -
                    </button>

                    <span className="w-8 text-center text-sm">
                      {item.quantity}
                    </span>

                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="h-8 w-8 border border-gray-300 rounded-full flex items-center justify-center text-gray-700"
                    >
                      +
                    </button>

                    {/* 🔥 TOTAL PRICE PER ITEM */}
                    <p className="text-base md:text-lg font-semibold text-gray-900">
                      ₹{item.price * item.quantity}
                    </p>
                  </div>

                  {/* 🔥 SINGLE BOOK PRICE */}
                  <p className="text-gray-500">₹{item.price} each</p>
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* RIGHT: Order Summary */}
        <aside className="bg-white border border-gray-100 shadow-md rounded-2xl p-6 h-fit">
          <h2 className="text-lg font-semibold mb-4">Order Summary</h2>

          <div className="space-y-3 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600 text-sm md:text-base">
                Subtotal ({cartItems.length} items)
              </span>
              <span className="text-gray-900 font-medium text-sm md:text-base">
                ₹{cartTotal}
              </span>
            </div>
            <div className="flex justify-between">
              <span>Shipping</span>
              <span className="text-emerald-600">Free</span>
            </div>
            <div className="flex justify-between">
              <span>Taxes</span>
              <span className="text-gray-500 text-xs">
                Calculated at checkout
              </span>
            </div>
          </div>

          <hr className="my-4" />

          <div className="flex justify-between items-center mb-4">
            <span className="font-semibold text-gray-900">Total</span>
            <span className="text-emerald-600 text-2xl font-bold">
              ₹{cartTotal}
            </span>
          </div>

          {/* <button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 rounded-xl mb-3 flex items-center justify-center gap-2">
            Checkout Now
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-arrow-right"
            >
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </button> */}

          <Link
            to="/books"
            className="w-full border border-gray-300 text-gray-700 font-medium py-3 rounded-xl flex items-center justify-center gap-2 hover:bg-gray-50"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-book-open"
            >
              <path d="M12 7v14"></path>
              <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path>
            </svg>
            Continue Shopping
          </Link>
        </aside>
      </div>
    </main>
  );
};

export default ShoppingCart;
