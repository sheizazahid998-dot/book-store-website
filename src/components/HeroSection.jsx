import React from "react";
import HeroBook from "../assets/images/HeroBook.png";

const HeroSection = () => {
  return (
    <div className="w-full min-h-[90vh] bg-gradient-to-br from-[#43C6AC]/90 to-[#2B5876]/90 p-6">
      <div className=" ml-[9rem] backdrop-blur-2xl bg-white/95 rounded-xl md:rounded-[2rem] shadow-lg md:shadow-2xl max-w-7xl  ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-10 lg:px-20 py-20 place-items-center">
          <div className="flex flex-col gap-6">
            <h1 className="text-5xl font-bold text-teal-900 leading-tight">
              <span class="text-transparent bg-clip-text bg-gradient-to-r from-[#2B5876] to-[#43C6AC]">
                Mindful
              </span>{" "}
              <br />{" "}
              <span class="font-light text-3xl sm:text-4xl md:text-5xl text-gray-800">
                Reading Experience
              </span>
            </h1>

            <p className="text-gray-700 text-base md:text-lg lg:text-xl leading-relaxed max-w-2xl">
              Curated knowledge journeys that challenge perceptions and inspire
              growth. Discover transformative content crafted for the modern
              intellect.
            </p>

            {/* <div className="flex items-center gap-3 w-full max-w-lg">
              <div className="flex items-center bg-white shadow-md px-5 rounded-lg md:rounded-xl flex-1 h-12 md:h-14">
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
                  className="w-4 h-4 md:w-5 md:h-5 text-gray-500"
                  aria-hidden="true"
                >
                  <path d="m21 21-4.34-4.34"></path>
                  <circle cx="11" cy="11" r="8"></circle>
                </svg>

                <input
                  type="text"
                  placeholder="Search Books..."
                  className="flex-1 ml-3 outline-none h-full"
                />
              </div>

              <button className="px-6 md:px-8 bg-gradient-to-r from-[#2B5876] to-[#43C6AC] text-white rounded-lg md:rounded-xl font-medium hover:shadow-lg transition-all duration-300 shadow-md flex items-center gap-2 justify-center h-12 md:h-14 text-sm md:text-base">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path d="M10.5 3a7.5 7.5 0 015.916 12.189l4.197 4.197a1 1 0 01-1.414 1.414l-4.197-4.197A7.5 7.5 0 1110.5 3z" />
                </svg>
              </button>
            </div> */}

            <div className="flex gap-10 pt-5 text-gray-700 font-semibold">
              <div className="flex flex-col items-start">
                <span className="text-xl md:text-2xl font-bold text-[#2B5876]">
                  50k+
                </span>
                <span className="text-gray-600 text-xs md:text-sm">Titles</span>
              </div>

              <div className="flex flex-col items-start">
                <span className="text-xl md:text-2xl font-bold text-[#2B5876]">
                  1.2M
                </span>
                <span className="text-gray-600 text-xs md:text-sm">
                  Readers
                </span>
              </div>

              <div className="flex flex-col items-start">
                <span className="text-xl md:text-2xl font-bold text-[#2B5876]">
                  240+
                </span>
                <span className="text-gray-600 text-xs md:text-sm">Topics</span>
              </div>
            </div>
          </div>

          <div>
            <img
              src={HeroBook}
              alt="Book"
              className="w-full  drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
