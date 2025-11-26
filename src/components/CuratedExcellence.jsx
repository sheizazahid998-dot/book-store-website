import React, { useState } from "react";
import { useCart } from "../Context/CartContext";
import img1 from "../assets/images/img1.png";
import img2 from "../assets/images/img2.png";
import img3 from "../assets/images/img3.png";
import img4 from "../assets/images/img4.png";
import img5 from "../assets/images/img5.png";
import img6 from "../assets/images/img6.png";
import img7 from "../assets/images/img7.png";
import img8 from "../assets/images/img8.png";

const books = [
  {
    id: 1,
    title: "The World Versus Everything Beyond",
    author: "Like & Michael Cahn",
    desc: "Jane McLane's latest masterpiece challenges conventional storytelling. Explore transformative narratives that...",
    price: 250.2,
    image: img1,
    bg: "bg-gradient-to-br from-[#fce3ec] to-[#ffe8d4]",
  },
  {
    id: 2,
    title: "The World Versus Everything Beyond",
    author: "Like & Michael Cahn",
    desc: "Jane McLane's latest masterpiece challenges conventional storytelling. Explore transformative narratives that...",
    price: 350.2,
    image: img2,
    bg: "bg-gradient-to-br from-[#e2f0cb] to-[#ffe6e6]",
  },
  {
    id: 3,
    title: "Twilight Fortress",
    author: "Oregory Barrett",
    desc: "Jane McLane's latest masterpiece challenges conventional storytelling. Explore transformative narratives that...",
    price: 190.99,
    image: img3,
    bg: "bg-gradient-to-br from-[#d0e6f6] to-[#f3e5f5]",
  },
  {
    id: 4,
    title: "The Silent Echo",
    author: "Sarah Mitchell",
    desc: "Jane McLane's latest masterpiece challenges conventional storytelling. Explore transformative narratives that...",
    price: 220.99,
    image: img4,
    bg: "bg-gradient-to-br from-[#fff1c1] to-[#ffd3b4]",
  },
  {
    id: 5,
    title: "Mystic River",
    author: "Dennis Lehane",
    desc: "Jane McLane's latest masterpiece challenges conventional storytelling. Explore transformative narratives that...",
    price: 182.99,
    image: img5,
    bg: "bg-gradient-to-br from-[#e1f7d5] to-[#ffccbc] ",
  },
  {
    id: 6,
    title: "The Alchemist",
    author: "Paulo Coelho",
    desc: "Jane McLane's latest masterpiece challenges conventional storytelling. Explore transformative narratives that...",
    price: 166.0,
    image: img6,
    bg: "bg-gradient-to-br from-[#f0f4c3] to-[#b2dfdb]",
  },
  {
    id: 7,
    title: "Atomic Habits",
    author: "James Clear",
    desc: "Jane McLane's latest masterpiece challenges conventional storytelling. Explore transformative narratives that...",
    price: 209.0,
    image: img7,
    bg: "bg-gradient-to-br from-[#ede7f6] to-[#e1bee7]",
  },
  {
    id: 8,
    title: "Thinking, Fast and Slow",
    author: "Daniel Kahneman",
    desc: "Jane McLane's latest masterpiece challenges conventional storytelling. Explore transformative narratives that...",
    price: 218.0,
    image: img8,
    bg: "bg-gradient-to-br from-[#dcedc8] to-[#fff9c4]",
  },
];

// ⭐ STAR COMPONENT (Lucide SVG)
const Star = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="currentColor"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-amber-400 fill-amber-400 h-4 w-4 md:h-5 md:w-5"
  >
    <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
  </svg>
);

const Arrow = ({ direction, onClick }) => (
  <button
    onClick={onClick}
    className="w-10 h-10 rounded-full shadow-md bg-white flex items-center justify-center hover:bg-gray-100"
  >
    {direction === "left" ? (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="lucide lucide-chevron-left text-[#1A237E]"
        aria-hidden="true"
      >
        <path d="m15 18-6-6 6-6"></path>
      </svg>
    ) : (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="lucide lucide-chevron-right text-[#1A237E]"
        aria-hidden="true"
      >
        <path d="m9 18 6-6-6-6"></path>
      </svg>
    )}
  </button>
);

const CuratedExcellence = () => {
  const [index, setIndex] = useState(0);
  const { addToCart } = useCart();
  const CARDS_PER_VIEW = 4;

  const nextSlide = () => {
    if (index < books.length - CARDS_PER_VIEW) setIndex(index + 1);
  };

  const prevSlide = () => {
    if (index > 0) setIndex(index - 1);
  };

  return (
    <div className="px-10 py-14 w-full">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-4xl font-bold">
            <span className="bg-gradient-to-r from-[#1A237E] to-[#43C6AC] bg-clip-text text-transparent">
              Curated Excellence
            </span>
          </h1>
          <p className="text-gray-600 text-base md:text-lg">
            Top Rated by Our Readers
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Arrow direction="left" onClick={prevSlide} />
          <Arrow direction="right" onClick={nextSlide} />
        </div>
      </div>

      <div className="overflow-hidden w-full">
        <div
          className="flex gap-6 transition-transform duration-500"
          style={{ transform: `translateX(-${index * 26}%)` }}
        >
          {books.map((b) => (
            <div
              key={b.id}
              className={`w-1/4 min-w-[24%] min-h-[590px] rounded-xl p-6 shadow-md bg-gradient-to-br ${b.bg} relative flex flex-col
    transition-all duration-300 transform hover:shadow-xl md:hover:shadow-2xl group`}
            >
              {/* ⭐ Top Content */}
              <div className="mb-4">
                <div className="flex gap-1 mb-3">
                  {Array(5)
                    .fill(0)
                    .map((_, i) => (
                      <Star key={i} />
                    ))}
                </div>
                <h2 className="text-xl font-bold text-gray-900 mb-1">
                  {b.title}
                </h2>
                <p className="text-xs md:text-sm font-medium text-gray-600 mb-5">
                  {b.author}
                </p>
                <p className="text-gray-600 text-xs md:text-sm leading-relaxed">
                  {b.desc}
                </p>
              </div>

              {/* ⭐ Price + Button ABOVE Image */}
              <div className="absolute bottom-[200px] left-6 flex flex-col gap-3 z-10">
                <p className="text-xl md:text-2xl font-bold text-gray-900">
                  ₹{b.price}
                </p>
                <button
                  onClick={() => addToCart(b)}
                  className="flex items-center gap-2 
  bg-gradient-to-r from-[#1A237E] to-[#43C6AC]
  text-white px-[15px] py-[15px] rounded-md text-sm transition-all duration-200"
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
                    className="lucide lucide-shopping-cart"
                  >
                    <circle cx="8" cy="21" r="1"></circle>
                    <circle cx="19" cy="21" r="1"></circle>
                    <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path>
                  </svg>
                  Add to Collection
                </button>
              </div>

              {/* ⭐ Image Fixed Bottom Right with lift on hover */}
              <img
                src={b.image}
                alt={b.title}
                className="absolute bottom-3 right-3 w-20 h-28 md:w-[120px] md:h-[180px] object-cover rounded-lg md:rounded-xl border-2 md:border-4 border-white shadow-xl md:shadow-2xl
      transition-transform duration-300 group-hover:-translate-y-2"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CuratedExcellence;
