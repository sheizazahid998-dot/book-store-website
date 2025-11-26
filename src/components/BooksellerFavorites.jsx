// src/components/BooksellerFavorites.jsx
import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../Context/CartContext";
import book1 from "../assets/images/book1.png";
import book2 from "../assets/images/book2.png";
import book3 from "../assets/images/book3.png";
import book4 from "../assets/images/book4.png";

const BooksellerFavorites = () => {
  const { cartItems, addToCart, updateQuantity, removeFromCart } = useCart();

  const books = [
    {
      id: 1,
      title: "Harry Potter",
      author: "J.K. Rowling",
      price: 255.2,
      desc: "J.K. Rowling best author in this week",
      image: book1,
      rating: "3.5",
    },
    {
      id: 2,
      title: "Hygge",
      author: "Meik Wiking",
      price: 289.2,
      desc: "Meik Wiking best author in this week",
      image: book2,
      rating: "4.0",
    },
    {
      id: 3,
      title: "Fifty Shades Darker",
      author: "E. L. James",
      price: 325.2,
      desc: "E. L. James best author in this week",
      image: book3,
      rating: "5.0",
    },
    {
      id: 4,
      title: "The Two Towers",
      author: "J.R.R. Tolkien",
      price: 425.2,
      desc: "J.R.R. Tolkien best author in this week",
      image: book4,
      rating: "4.5",
    },
  ];

  const handleAddToCart = (book) => {
    addToCart(book);
  };

  return (
    <section className="w-full py-20 bg-gradient-to-br from-[#43C6AC] to-[#F8FFAE] relative">
      <div
        className="bg-white mx-auto shadow-xl rounded-2xl p-10"
        style={{ maxWidth: "94rem" }}
      >
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#43C6AC] to-[#2B5876] bg-clip-text text-transparent mb-4">
            Bookseller Favorites
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-[#43C6AC] to-[#F8FFAE] rounded-full mx-auto" />
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {books.map((b) => {
            // const cartItem = cartItems.find((item) => item.id === b.id);
            // const quantity = cartItem?.quantity ?? 0;

            return (
              <div
                key={b.id}
                className="bg-white rounded-2xl hover:shadow-lg transition-all duration-300 flex flex-col"
              >
                {/* IMAGE */}
                <div className="w-full h-72 overflow-hidden rounded-2xl border-4 border-[#43C6AC]/20 mb-4 relative">
                  <img
                    src={b.image}
                    alt={b.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />

                  {/* Rating pill (top-right) */}
                  <div className="absolute top-3 right-3 bg-white/90 px-3 py-1 rounded-full flex items-center gap-1 shadow-sm">
                    <span className="text-[11px] font-semibold text-gray-700">
                      {b.rating}
                    </span>
                    <span className="text-[11px] text-emerald-500">★★★★☆</span>
                  </div>
                </div>

                {/* CONTENT */}
                <div className="flex flex-col flex-grow mt-1">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {b.title}
                  </h3>
                  <p className="text-xs text-gray-500 mt-0.5">{b.author}</p>
                  <p className="text-gray-600 text-sm mt-1 leading-relaxed flex-grow truncate overflow-hidden whitespace-nowrap">
                    {b.desc}
                  </p>
                  <p className="text-lg font-bold text-[#43C6AC] mt-1">
                    ₹{b.price.toFixed(1)}
                  </p>

                  {/* BOTTOM AREA: Add to Cart OR Qty controls */}

                  <button
                    className="mt-4 w-full bg-gradient-to-r from-[#43C6AC] to-[#F8FFAE] text-black py-2 rounded-full font-medium flex items-center justify-center gap-2 hover:opacity-90 duration-300"
                    onClick={() => handleAddToCart(b)}
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
                      className="lucide lucide-shopping-cart h-5 w-5"
                      aria-hidden="true"
                    >
                      <circle cx="8" cy="21" r="1" />
                      <circle cx="19" cy="21" r="1" />
                      <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
                    </svg>
                    Add to Cart
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* View all books button */}
        <div className="flex justify-center mt-12">
          <Link
            to="/books"
            className="group inline-flex items-center justify-center px-6 py-3 rounded-full border-2 border-[#43C6AC] text-[#43C6AC] hover:bg-[#43C6AC]/10 transition-all"
          >
            <span>View All Books</span>
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
              className="lucide lucide-arrow-right ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BooksellerFavorites;
