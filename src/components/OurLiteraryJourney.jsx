import React from "react";
import Bookshelf from "../assets/images/Bookshelf.png";
import { Link } from "react-router-dom"

const OurLiteraryJourney = () => {
  return (
    <div className="w-full px-6 md:px-16 py-20 bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
        <div className="w-full">
          <img
            src={Bookshelf}
            alt="Bookshelf"
            className="w-full h-auto rounded-xl transition-transform duration-700 hover:rotate-1"
          />
        </div>

        <div>
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#43C6AC] to-[#2B5876] bg-clip-text text-transparent mb-4">
            Our Literary Journey
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-[#43C6AC] to-[#F8FFAE] rounded-full"></div>

          <p className="text-gray-600 leading-relaxed">
            Founded with a passion for literature, BookShell has evolved into a
            sanctuary for book lovers. We curate exceptional reading
            experiences, connecting readers with stories that inspire, educate,
            and transport them to new worlds.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10">
            <div className="bg-white shadow-lg rounded-xl p-6 text-center border-2 border-[#43C6AC]/20 ">
              <div className="w-12 h-12 mx-auto bg-[#F8FFAE] rounded-full flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-book-open h-6 w-6 text-[#43C6AC]"
                  aria-hidden="true"
                >
                  <path d="M12 7v14"></path>
                  <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mt-3">10K+</h3>
              <p className="text-gray-500 text-sm mt-1">Books Collection</p>
            </div>

            <div className="bg-white shadow-lg rounded-xl p-6 text-center border-2 border-[#43C6AC]/20">
              <div className="w-12 h-12 mx-auto bg-[#F8FFAE] rounded-full flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-users h-6 w-6 text-[#43C6AC]"
                  aria-hidden="true"
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                  <path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mt-3">50K+</h3>
              <p className="text-gray-500 text-sm mt-1">Happy Readers</p>
            </div>

            {/* Card 3 */}
            <div className="bg-white shadow-lg rounded-xl p-6 text-center border-2 border-[#43C6AC]/20">
              <div className="w-12 h-12 mx-auto bg-[#F8FFAE] rounded-full flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-award h-6 w-6 text-[#43C6AC]"
                  aria-hidden="true"
                >
                  <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path>
                  <circle cx="12" cy="8" r="6"></circle>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mt-3">15+</h3>
              <p className="text-gray-500 text-sm mt-1">Industry Awards</p>
            </div>
          </div>

         <Link to="/about">
  <button className="mt-10 group inline-flex items-center justify-center px-6 py-3 rounded-full bg-gradient-to-r from-[#43C6AC] to-[#F8FFAE] text-black font-medium shadow-sm hover:shadow-[#43C6AC]/25 transition-all duration-300">
    <span>Learn More About Us</span>
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
      aria-hidden="true"
    >
      <path d="M5 12h14"></path>
      <path d="m12 5 7 7-7 7"></path>
    </svg>
  </button>
</Link>
        </div>
      </div>
    </div>
  );
};

export default OurLiteraryJourney;
