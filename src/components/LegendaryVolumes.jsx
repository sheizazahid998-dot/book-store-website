import React from "react";
import { Link } from "react-router-dom";
import book5 from "../assets/images/book5.png";
import book6 from "../assets/images/book6.png";
import book7 from "../assets/images/book7.png";

const LegendaryVolumes = () => {
  const items = [
    {
      id: 1,
      image: book5,
      title: "The Midnight Library",
      author: "Matt Haig",
      desc: "Between life and death there is a library, and within that library, the shelves go on forever.",
    },
    {
      id: 2,
      image: book6,
      title: "Ancient Chronicles",
      author: "Lirael Morningstar",
      desc: "Discover the secrets of ancient civilizations through their own words.",
    },
    {
      id: 3,
      image: book7,
      title: "Coffee & Pages",
      author: "Evelyn Pagewright",
      desc: "A collection of short stories perfect for your morning coffee ritual.",
    },
  ];

  return (
    <div className="w-full py-20 px-6 md:px-16 ">
      
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#43C6AC] to-[#2B5876] bg-clip-text text-transparent mb-4">
          Legendary Volumes
        </h2>
        <div class="h-1 w-20 mx-auto bg-gradient-to-r from-[#43C6AC] to-[#F8FFAE] rounded-full"></div>
        <p className="mt-4 text-gray-600 text-center max-w-2xl mx-auto">
          Handpicked recommendations from our literary experts that you won't
          want to miss.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {items.map((item) => (
          <div
            key={item.id}
            className="bg-white border-2 border-[#43C6AC]/20 rounded-xl shadow-lg 
             hover:shadow-[#43C6AC]/20 hover:shadow-xl transition-all duration-300 group "
          >
            <div className="h-56 w-full overflow-hidden rounded-xl">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transform 
                 transition-transform duration-500 
                 group-hover:scale-105 group-hover:-translate-y-1 "
              />
            </div>

            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-1">
                {item.title}
              </h3>
              <p className="text-sm text-[#43C6AC] mb-3">{item.author}</p>

              <p className="text-gray-600 text-sm mb-4 flex-grow">
                {item.desc}
              </p>

              <Link
                to="/books"
                className="flex items-center gap-1 text-teal-600 font-semibold mt-5 "
              >
                Discover
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
                  className="lucide lucide-arrow-right ml-1 h-4 w-4"
                >
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LegendaryVolumes;
