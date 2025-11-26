import React from "react";

const ContactUs = () => {
  return (
    <div className="w-full px-6 md:px-16 py-16 bg-gray-50">
      <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-900">
        Contact Us
      </h1>
      <p className="text-center text-gray-600 mt-2">
        Have questions or feedback? We'd love to hear from you.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-[0.3fr_0.7fr] gap-10 mt-14">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">
            Contact Information
          </h2>

          <div className="flex items-start gap-4 mb-6">
            <span className="text-teal-500 mt-1">
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
            </span>

            <div>
              <h3 className="font-semibold text-gray-800">Our Location</h3>
              <p className="text-gray-600">
                123 Book Street, Library City, LC 10001
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 mb-6">
            <span className="text-teal-500 mt-1">
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
                class="lucide lucide-mail h-6 w-6 text-[#43C6AC]"
                aria-hidden="true"
              >
                <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                <rect x="2" y="4" width="20" height="16" rx="2"></rect>
              </svg>
            </span>

            <div>
              <h3 className="font-semibold text-gray-800">Email Us</h3>
              <p className="text-gray-600">contact@bookshell.com</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <span className="text-teal-500 mt-1">
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
                class="lucide lucide-phone h-6 w-6 text-[#43C6AC]"
                aria-hidden="true"
              >
                <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path>
              </svg>
            </span>

            <div>
              <h3 className="font-semibold text-gray-800">Call Us</h3>
              <p className="text-gray-600">+1 (555) 123-4567</p>
            </div>
          </div>
        </div>

        <div className="bg-white shadow-md rounded-xl p-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">
            Send us a message via WhatsApp
          </h2>

          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="text-gray-700 font-medium">
                  Name<span className="text-red-500">*</span>
                </label>
                <div className="relative mt-1">
                  <span className="absolute left-3 top-2.5 text-gray-400">
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
                      class="lucide lucide-user absolute left-3  w-5 text-gray-400"
                      aria-hidden="true"
                    >
                      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                  </span>

                  <input
                    type="text"
                    className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-teal-400 outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="text-gray-700 font-medium">
                  Email<span className="text-red-500">*</span>
                </label>
                <div className="relative mt-1">
                  <span className="absolute left-3 top-2.5 text-gray-400">
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
                      class="lucide lucide-mail absolute left-3  w-5 text-gray-400"
                      aria-hidden="true"
                    >
                      <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                      <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                    </svg>
                  </span>

                  <input
                    type="email"
                    className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-teal-400 outline-none"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="text-gray-700 font-medium">
                  Phone (optional)
                </label>
                <div className="relative mt-1">
                  <span className="absolute left-3 top-2.5 text-gray-400">
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
                      class="lucide lucide-phone absolute left-3  w-5 text-gray-400"
                      aria-hidden="true"
                    >
                      <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path>
                    </svg>
                  </span>

                  <input
                    type="text"
                    className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-teal-400 outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="text-gray-700 font-medium">
                  Subject (optional)
                </label>
                <div className="relative mt-1">
                  <span className="absolute left-3 top-2.5 text-gray-400"></span>

                  <input
                    type="text"
                    className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-teal-400 outline-none"
                  />
                </div>
              </div>
            </div>

            <div className="relative">
              <label className="text-gray-700 font-medium">
                Message<span className="text-red-500">*</span>
              </label>

              <div className="relative">
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
                  class="lucide lucide-message-square absolute left-3 top-3 h-5 w-5 text-gray-400"
                  aria-hidden="true"
                >
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                </svg>

                <textarea
                  rows="4"
                  className="w-full mt-1 pl-10 pr-4 py-2 border rounded-lg focus:ring-2 
                 focus:ring-teal-400 outline-none resize-none"
                ></textarea>
              </div>
            </div>

            <button
              type="button"
              className="w-full bg-teal-500 text-white font-semibold py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-teal-600 transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M22 2L11 13" />
                <path d="M22 2l-7 20-4-9-9-4 20-7z" />
              </svg>
              Send via WhatsApp
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
