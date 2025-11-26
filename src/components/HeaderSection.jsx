import React from "react";
import Logo from "../assets/images/Logo.png";
import { Link } from "react-router-dom";
import { useCart } from "../Context/CartContext";

const HeaderSection = () => {
  const { cartItems } = useCart();

  // Total quantity of all items in cart
  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="w-full flex items-center justify-between px-10 py-5 bg-white/60 backdrop-blur-md shadow-sm">
      {/* Logo */}
      <div className="flex items-center gap-2 group cursor-pointer">
        <Link to="/" className="flex items-center gap-2 group cursor-pointer">
          <img src={Logo} alt="logo" className="w-10 h-10" />
          <h1 className="text-xl font-bold bg-gradient-to-r from-[#43C6AC] to-[#2B5876] bg-clip-text text-transparent">
            BOOKSHELL
          </h1>
        </Link>
      </div>

      {/* NAV LINKS */}
      <ul className="hidden md:flex items-center gap-10 font-medium text-gray-700">
        <li>
          <Link
            to="/"
            className="flex items-center gap-2 cursor-pointer hover:text-teal-700 transition-colors duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 9.75L12 3l9 6.75M4.5 10.5V21h15V10.5"
              />
            </svg>
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className="flex items-center gap-2 cursor-pointer group"
          >
            <span className="relative flex items-center justify-center w-6 h-6">
              <span className="absolute inset-0 bg-gradient-to-r from-purple-400 to-indigo-500 rounded-full opacity-0 blur group-hover:opacity-30 transition-opacity duration-500" />
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
                className="relative z-10 h-5 w-5 text-gray-600 transition-colors duration-300 group-hover:text-white"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M12 16v-4" />
                <path d="M12 8h.01" />
              </svg>
            </span>
            <span className="text-gray-800">About</span>
          </Link>
        </li>
        <li className="flex items-center gap-2 cursor-pointer group">
          <Link to="/books" className="flex items-center gap-2">
            <span className="relative flex items-center justify-center w-6 h-6">
              <span className="absolute inset-0 bg-gradient-to-r from-purple-400 to-indigo-500 rounded-full opacity-0 blur group-hover:opacity-30 transition-opacity duration-500" />
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
                className="lucide lucide-book-open relative h-5 w-5 text-gray-600 group-hover:text-white transition-colors duration-300 z-10"
                aria-hidden="true"
              >
                <path d="M12 7v14" />
                <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z" />
              </svg>
            </span>
            <span className="text-gray-800">Books</span>
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className="flex items-center gap-2 cursor-pointer group"
          >
            <span className="relative flex items-center justify-center w-6 h-6">
              <span className="absolute inset-0 bg-gradient-to-r from-rose-400 to-pink-600 rounded-full opacity-0 blur group-hover:opacity-30 transition-opacity duration-500" />
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
                className="relative h-5 w-5 text-gray-600 group-hover:text-white transition-colors duration-300 z-10"
                aria-hidden="true"
              >
                <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
                <rect x="2" y="4" width="20" height="16" rx="2" />
              </svg>
            </span>
            <span className="text-gray-800">Contact</span>
          </Link>
        </li>
      </ul>

      <div className="flex items-center gap-5 text-gray-700">
        {/* Cart Icon with badge */}
        <Link
          to="/cart"
          className="flex items-center justify-center w-6 h-6 group relative"
        >
          <span className="bg-gradient-to-r from-amber-500 to-orange-600 rounded-full opacity-0 blur-md group-hover:opacity-30 transition-opacity duration-500 absolute inset-0" />
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 640 512"
            className="relative h-5 w-5 text-gray-600 group-hover:text-red-600 transition-colors duration-300 z-10"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M423.3 440.7c0 25.3-20.3 45.6-45.6 45.6s-45.8-20.3-45.8-45.6 20.6-45.8 45.8-45.8c25.4 0 45.6 20.5 45.6 45.8zm-253.9-45.8c-25.3 0-45.6 20.6-45.6 45.8s20.3 45.6 45.6 45.6 45.8-20.3 45.8-45.6-20.5-45.8-45.8-45.8zm291.7-270C158.9 124.9 81.9 112.1 0 25.7c34.4 51.7 53.3 148.9 373.1 144.2 333.3-5 130 86.1 70.8 188.9 186.7-166.7 319.4-233.9 17.2-233.9z" />
          </svg>

          {/* badge */}
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 min-w-[18px] h-[18px] px-1 rounded-full bg-orange-500 text-[10px] text-white font-semibold flex items-center justify-center shadow-sm">
              {cartCount}
            </span>
          )}
        </Link>

        {/* Profile Icon */}
        <Link
          to="/signout" // change from /signin to /signout
          className="relative flex items-center justify-center w-6 h-6 group"
        >
          <span className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full opacity-0 blur-md group-hover:opacity-30 transition-opacity duration-500" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="relative w-6 h-6 cursor-pointer text-gray-600 group-hover:text-emerald-500 transition-colors duration-300 z-10"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 20.25a8.25 8.25 0 0115 0"
            />
          </svg>
        </Link>
      </div>
    </nav>
  );
};

export default HeaderSection;
