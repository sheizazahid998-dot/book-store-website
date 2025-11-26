import React, { useState } from "react";
import { useCart } from "../Context/CartContext";
import book8 from "../assets/images/book8.png";
import book9 from "../assets/images/book9.png";
import book10 from "../assets/images/book10.png";
import book11 from "../assets/images/book11.png";
import book12 from "../assets/images/book12.png";
import book13 from "../assets/images/book13.png";
import book14 from "../assets/images/book14.png";
import book15 from "../assets/images/book15.png";
import book16 from "../assets/images/book16.png";
import book17 from "../assets/images/book17.png";
import book18 from "../assets/images/book18.png";
import book19 from "../assets/images/book19.png";
import book20 from "../assets/images/book20.png";
import book21 from "../assets/images/book21.png";
import book22 from "../assets/images/book22.png";
import book23 from "../assets/images/book23.png";

const books = [
  {
    id: 1,
    title: "Atomic Habits",
    author: "James Clear",
    desc: "Build better habits...",
    price: 203.0,
    image: book14,
    genre: "Self-Help",
  },
  {
    id: 2,
    title: "Beyond the Stars",
    author: "Michael Chen",
    desc: "A journey across galaxies...",
    price: 209.0,
    image: book11,
    genre: "Sci-Fi",
  },
  {
    id: 3,
    title: "Darkness Gathers",
    author: "Emma Elliot",
    desc: "A gripping thriller...",
    price: 325.0,
    image: book21,
    genre: "Thriller",
  },
  {
    id: 4,
    title: "Digital Fortress",
    author: "James Cooper",
    desc: "A battle of encryption...",
    price: 190.0,
    image: book9,
    genre: "Mystery",
  },
  {
    id: 5,
    title: "Gitanjali",
    author: "Rabindranath Tagore",
    desc: "Epic poem...",
    price: 449.0,
    image: book22,
    genre: "Drama",
  },
  {
    id: 6,
    title: "Mystic River",
    author: "Dennis Lehane",
    desc: "Story of friendship...",
    price: 180.0,
    image: book12,
    genre: "Mystery",
  },
  {
    id: 7,
    title: "The Alchemist",
    author: "Paulo Coelho",
    desc: "Journey of self-discovery...",
    price: 160.0,
    image: book13,
    genre: "Philosophy",
  },
  {
    id: 8,
    title: "The Author",
    author: "Raj Siddhi",
    desc: "Dystopian vision...",
    price: 399.0,
    image: book19,
    genre: "Sci-Fi",
  },
  {
    id: 9,
    title: "The Crossing",
    author: "Jason Mott",
    desc: "Psychological exploration...",
    price: 425.0,
    image: book17,
    genre: "Drama",
  },
  {
    id: 10,
    title: "The Design Of Books",
    author: "Debbie Bern",
    desc: "Gothic tale...",
    price: 379.0,
    image: book16,
    genre: "Thriller",
  },
  {
    id: 11,
    title: "The Doctor",
    author: "Oscar Patton",
    desc: "Journey through Hell...",
    price: 549.0,
    image: book20,
    genre: "Drama",
  },
  {
    id: 12,
    title: "The Last Orbit",
    author: "Emily Zhang",
    desc: "Humanity's final journey...",
    price: 202.0,
    image: book10,
    genre: "Sci-Fi",
  },
  {
    id: 13,
    title: "The Phoenix Of Destiny",
    author: "Geronimo Stilton",
    desc: "Fantasy adventure...",
    price: 499.0,
    image: book18,
    genre: "Fantasy",
  },
  {
    id: 14,
    title: "The Silent Echo",
    author: "Sarah Mitchell",
    desc: "Haunting tale...",
    price: 205.0,
    image: book8,
    genre: "Mystery",
  },
  {
    id: 15,
    title: "The Unwilling",
    author: "John Hart",
    desc: "Adventures of a nobleman...",
    price: 399.0,
    image: book23,
    genre: "Drama",
  },
  {
    id: 16,
    title: "Thinking, Fast and Slow",
    author: "Daniel Kahneman",
    desc: "Explore the two systems...",
    price: 219.0,
    image: book15,
    genre: "Psychology",
  },
];
const searchBooks = (books, term) => {
  if (!term) return books;
  // !term checks if the search term is empty, null, or undefined.
  // In that case, the function simply returns the full books array unmodified.
  const lowerTerm = term.toLowerCase();
  return books.filter(
    (book) =>
      book.title.toLowerCase().includes(lowerTerm) ||
      //Checks if the book title contains the search term.
      book.author.toLowerCase().includes(lowerTerm)
    //  Checks if the author name contains the search term.
    // The || operator means either title or author matches. If either is true, the book is included in the results.
  );
};
// Separate function for genre filter
const filterByGenre = (books, genre) => {
  if (genre === "All Genres") return books;
  return books.filter((book) => book.genre === genre);
  // checks if the genre property of the book exactly matches the selected genre.
};
// Separate function for sorting
const sortBooks = (books, sortOption) => {
  const sorted = [...books];
  switch (sortOption) {
    //switch statement check karta hai ke sortOption ka value kya hai aur uske hisaab se sorting logic apply karta hai.
    case "Price: Low to High":
      return sorted.sort((a, b) => a.price - b.price);
    // (a, b) => a.price - b.price ek compare function hai
    //Agar a.price - b.price negative hai → a pehle aayega.
    // Agar positive → b pehle aayega.
    case "Price: High to Low":
      return sorted.sort((a, b) => b.price - a.price);
    //Isse books descending order mein sort hoti hain, yani mehngi book pehle aur sasti book baad mein.
    case "Sort by Title":
    default:
      return sorted.sort((a, b) => a.title.localeCompare(b.title));
  }
};

const handleSearchChange = (e, setSearchTerm) => {
  debugger;
  setSearchTerm(e.target.value);
};

const handleGenreChange = (e, setSelectedGenre) => {
  setSelectedGenre(e.target.value);
};

const handleSortChange = (e, setSortOption) => {
  setSortOption(e.target.value);
};

const ViewAllBooks = () => {
  const { addToCart } = useCart();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("All Genres");
  const [sortOption, setSortOption] = useState("Sort by Title");

  // Apply search, filter, and sort
  let displayedBooks = searchBooks(books, searchTerm);
  displayedBooks = filterByGenre(displayedBooks, selectedGenre);
  displayedBooks = sortBooks(displayedBooks, sortOption);

  return (
    <div className="w-full bg-[#eefaf7] px-6 md:px-16 py-10">
      <div className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-bold text-transparent pb-4 bg-clip-text bg-gradient-to-r from-[#1A237E] to-[#43C6AC]">
          Literary Universe
        </h1>
        <p className="mt-3 text-gray-600 text-base md:text-xl max-w-3xl mx-auto px-2">
          Explore our curated collection spanning genres and perspectives
        </p>
      </div>

      <input
        type="text"
        placeholder="Search titles, authors..."
        value={searchTerm}
        onChange={(e) => handleSearchChange(e, setSearchTerm)}
        className="w-full pl-12 md:pl-16 pr-6 py-4 bg-white/90 border-0 rounded-2xl shadow-lg focus:ring-2 focus:ring-[#43C6AC]/30 text-lg placeholder-gray-400 text-gray-700 transition-all mb-6"
      />

      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-10">
        <div className="flex gap-3">
          <select
            value={selectedGenre}
            onChange={(e) => handleGenreChange(e, setSelectedGenre)}
            className="px-5 py-3 bg-white/90 backdrop-blur-sm border-0 rounded-xl shadow-lg text-gray-700 focus:ring-2 focus:ring-[#43C6AC]/30"
          >
            <option>All Genres</option>
            <option>Mystery</option>
            <option>Thriller</option>
            <option>Sci-Fi</option>
            <option>Drama</option>
            <option>Philosophy</option>
            <option>Self-Help</option>
            <option>Psychology</option>
            <option>Fantasy</option>
          </select>

          <select
            value={sortOption}
            onChange={(e) => handleSortChange(e, setSortOption)}
            className="px-5 py-3 bg-white/90 backdrop-blur-sm border-0 rounded-xl shadow-lg text-gray-700 focus:ring-2 focus:ring-[#43C6AC]/30"
          >
            <option>Sort by Title</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
          </select>
        </div>

        <p className="text-gray-600 text-sm md:text-base whitespace-nowrap">
          Showing {displayedBooks.length} results
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {displayedBooks.map((b) => (
          <div
            key={b.id}
            className="bg-white/90 backdrop-blur-sm rounded-xl md:rounded-2xl p-4 md:p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col"
          >
            <div className="h-60 w-full rounded-xl overflow-hidden">
              <img
                src={b.image}
                className="w-full h-full object-cover hover:scale-105 transition duration-300"
                alt={b.title}
              />
            </div>

            <h2 className="mt-4 text-lg font-semibold text-gray-800">
              {b.title}
            </h2>
            <p className="text-sm text-gray-500">by {b.author}</p>
            <p className="text-gray-600 text-sm mt-2 line-clamp-2">{b.desc}</p>

            <div className="flex items-center justify-between mt-3">
              <p className="text-base md:text-lg font-bold text-[#1A237E]">
                ₹{b.price.toFixed(2)}
              </p>
              <button
                onClick={() => addToCart(b)}
                className="flex items-center gap-2 bg-gradient-to-r from-[#1A237E] to-[#43C6AC] text-white rounded-lg md:rounded-xl text-sm md:text-base font-medium px-4 py-2 hover:shadow-md hover:scale-[1.02] transition-all"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewAllBooks;
