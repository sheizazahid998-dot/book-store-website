import React from "react";
import AboutUsImage from "../assets/images/AboutUsImage.png";
import SarahJohnson from "../assets/images/SarahJohnson.png";
import MichaelChen from "../assets/images/MichaelChen.png";
import EmmaWilliams from "../assets/images/EmmaWilliams.png";
import NewYork from "../assets/images/NewYork.jpg";
import London from "../assets/images/London.jpg";
import Tokyo from "../assets/images/Tokyo.jpg";
import Sydney from "../assets/images/Sydney.jpg";

const AboutUs = () => {
  return (
    <main className="bg-gradient-to-b from-[#e7f7ff] via-white to-[#e7f7ff]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
        <section className="text-center space-y-6">
          <h1 className="text-6xl  font-black bg-gradient-to-r from-[#43C6AC] to-[#2B5876] bg-clip-text text-transparent mb-6 leading-tight">
            Crafting Literary
          </h1>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-cyan-700">
            Futures
          </h2>

          <div className="flex justify-center">
            <span className="absolute  left-1/2 transform -translate-x-1/2 w-48 h-2 bg-gradient-to-r from-[#43C6AC] to-[#F8FFAE] rounded-full"></span>
          </div>

          <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-medium">
            Pioneering the next chapter in global storytelling. We bridge
            imagination with innovation through curated literary experiences.
          </p>
        </section>

        <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {/* 1 - Trophy */}
          <div className="bg-white/95 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-[#43C6AC]/10 transition-transform hover:-translate-y-2">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-[#43C6AC] to-[#F8FFAE] flex items-center justify-center mb-6 shadow-lg">
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
                class="lucide lucide-award h-8 w-8 text-white"
                aria-hidden="true"
              >
                <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path>
                <circle cx="12" cy="8" r="6"></circle>
              </svg>
            </div>

            <div className="text-5xl font-black text-[#2B5876]">25K+</div>
            <p className="text-lg font-medium text-gray-600">Awards Won</p>
          </div>

          {/* 2 - Users */}
          <div className="bg-white/95 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-[#43C6AC]/10 transition-transform hover:-translate-y-2">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-[#43C6AC] to-[#F8FFAE] flex items-center justify-center mb-6 shadow-lg">
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
                class="lucide lucide-users h-8 w-8 text-white"
                aria-hidden="true"
              >
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                <path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
                <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                <circle cx="9" cy="7" r="4"></circle>
              </svg>
            </div>

            <div className="text-5xl font-black text-[#2B5876]">1M+</div>
            <p className="text-lg font-medium text-gray-600">Active Readers</p>
          </div>

          {/* 3 - Books */}
          <div className="bg-white/95 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-[#43C6AC]/10 transition-transform hover:-translate-y-2">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-[#43C6AC] to-[#F8FFAE] flex items-center justify-center mb-6 shadow-lg">
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
                class="lucide lucide-book-open h-8 w-8 text-white"
                aria-hidden="true"
              >
                <path d="M12 7v14"></path>
                <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path>
              </svg>
            </div>

            <div className="text-5xl font-black text-[#2B5876]">100K+</div>
            <p className="text-lg font-medium text-gray-600">Books Available</p>
          </div>

          <div className="bg-white/95 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-[#43C6AC]/10 transition-transform hover:-translate-y-2">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-[#43C6AC] to-[#F8FFAE] flex items-center justify-center mb-6 shadow-lg">
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
                class="lucide lucide-star h-8 w-8 text-white"
                aria-hidden="true"
              >
                <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
              </svg>
            </div>

            <div className="text-5xl font-black text-[#2B5876]">4.9</div>
            <p className="text-lg font-medium text-gray-600">Average Rating</p>
          </div>
        </section>

        <section className="grid gap-10  items-center">
          <div className="relative group overflow-hidden rounded-[2.5rem] shadow-2xl">
            <img
              src={AboutUsImage}
              alt="Bookstore street"
              className="w-full h-auto object-cover transform transition duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#43C6AC]/30 to-transparent"></div>

            <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-[#2B5876]/80 to-transparent">
              <h3 class="text-2xl font-bold text-white">Since 2015</h3>
              <p className="text-gray-200">Pioneering Digital Literature</p>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-teal-600">
              Redefining Storytelling
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              We've transformed traditional publishing into a dynamic digital
              ecosystem.......
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8  mx-auto">
              <div className="p-6 bg-white/95 backdrop-blur-lg rounded-2xl shadow-xl border border-[#43C6AC]/10">
                <h3 className="text-2xl font-bold text-[#2B5876] mb-3">
                  Our Vision
                </h3>
                <p className="text-sm text-slate-600 truncate overflow-hidden text-ellipsis">
                  Create a global network...
                </p>
              </div>

              <div className="p-6 bg-white/95 backdrop-blur-lg rounded-2xl shadow-xl border border-[#43C6AC]/10">
                <h3 className="text-2xl font-bold text-[#2B5876] mb-3">
                  Our Mission
                </h3>
                <p className="text-sm text-slate-600 truncate overflow-hidden text-ellipsis">
                  Empower creators and inspire readers...
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="space-y-8">
          <div className="text-center space-y-3">
            <h2 className="text-5xl font-black bg-gradient-to-r from-[#43C6AC] to-[#2B5876] bg-clip-text text-transparent">
              Meet Your Literary Guides
            </h2>
            <div className="flex justify-center">
              <span className="h-1 w-24 rounded-full bg-gradient-to-r from-teal-400 via-lime-300 to-cyan-400"></span>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: "Sarah Johnson",
                role: "CEO & Founder",
                img: SarahJohnson,
              },
              {
                name: "Michael Chen",
                role: "CTO",
                img: MichaelChen,
              },
              {
                name: "Emma Williams",
                role: "Head Editor",
                img: EmmaWilliams,
              },
            ].map((member, index) => (
              <article
                key={index}
                className="group relative bg-white/95 backdrop-blur-lg rounded-[2rem] p-6 shadow-2xl border border-[#43C6AC]/10 transition-transform hover:-translate-y-3"
              >
                <div className="relative overflow-hidden rounded-2xl mb-6">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-80 object-cover transform transition duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#43C6AC]/40 to-transparent"></div>
                </div>

                <div className="px-6 pt-4 pb-6 flex flex-col gap-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-1">
                      {member.name}
                    </h3>
                    <p className="text-lg text-[#43C6AC] font-medium mb-6">
                      {member.role}
                    </p>
                  </div>

                  <div className="flex gap-3 text-teal-500 text-xl  justify-center ">
                    <button className="p-2 rounded-full bg-gradient-to-r from-[#43C6AC] to-[#F8FFAE] text-white hover:shadow-lg transition-all hover:scale-110">
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
                        class="lucide lucide-facebook h-6 w-6"
                        aria-hidden="true"
                      >
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                      </svg>
                    </button>

                    <button className="p-2 rounded-full bg-gradient-to-r from-[#43C6AC] to-[#F8FFAE] text-white hover:shadow-lg transition-all hover:scale-110">
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
                        class="lucide lucide-twitter h-6 w-6"
                        aria-hidden="true"
                      >
                        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                      </svg>
                    </button>

                    <button className="p-2 rounded-full bg-gradient-to-r from-[#43C6AC] to-[#F8FFAE] text-white hover:shadow-lg transition-all hover:scale-110">
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
                        class="lucide lucide-instagram h-6 w-6"
                        aria-hidden="true"
                      >
                        <rect
                          width="20"
                          height="20"
                          x="2"
                          y="2"
                          rx="5"
                          ry="5"
                        ></rect>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                      </svg>
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="space-y-8 pb-4">
          <div className="text-center space-y-3">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-teal-600">
              Our Literary Sanctuaries
            </h2>
            <div className="flex justify-center">
              <span className="h-1 w-24 rounded-full bg-gradient-to-r from-teal-400 via-lime-300 to-cyan-400"></span>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { city: "New York", time: "9AM - 9PM", img: NewYork },
              { city: "London", time: "8AM - 8PM", img: London },
              { city: "Tokyo", time: "10AM - 10PM", img: Tokyo },
              { city: "Sydney", time: "8AM - 8PM", img: Sydney },
            ].map((loc, idx) => (
              <article
                key={idx}
                className="bg-white/95 backdrop-blur-lg rounded-2xl p-6 shadow-2xl border border-[#43C6AC]/10 transition-transform hover:-translate-y-2"
              >
                <div className="relative h-56 rounded-xl overflow-hidden mb-6">
                  <img
                    src={loc.img}
                    alt={loc.city}
                    className="w-full h-full object-cover transform transition duration-500 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#43C6AC]/30 to-transparent"></div>
                </div>

                <div className="px-5 pt-4 pb-5 space-y-1 ">
                  <p className="flex items-center gap-2  text-xl font-semibold text-[#2B5876]">
                    {/* Location SVG */}
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
                      class="lucide lucide-map-pin h-6 w-6 text-[#43C6AC]"
                      aria-hidden="true"
                    >
                      <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                    <span>{loc.city}</span>
                  </p>

                  <p className="flex items-center space-x-3 text-gray-600">
                    {/* Clock SVG */}
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
                      class="lucide lucide-clock h-6 w-6 text-[#43C6AC]"
                      aria-hidden="true"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                    <span>{loc.time}</span>
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};

export default AboutUs;
