// Contact.jsx
import React from "react";

export default function Contact() {
  return (
    <div className="bg-white py-12 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Contact Info */}
          <div className="bg-gray-100 p-8 rounded-lg shadow">
            <h1 className="text-4xl font-extrabold text-gray-800">Get in touch:</h1>
            <p className="mt-2 text-lg text-gray-600">
              Fill in the form to start a conversation
            </p>

            <div className="mt-8 space-y-6 text-gray-600">
              <div className="flex items-center">
                <svg
                  className="w-6 h-6 text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span className="ml-4 font-semibold">Acme Inc, Street, State, Postal Code</span>
              </div>

              <div className="flex items-center">
                <svg
                  className="w-6 h-6 text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span className="ml-4 font-semibold">+44 1234567890</span>
              </div>

              <div className="flex items-center">
                <svg
                  className="w-6 h-6 text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span className="ml-4 font-semibold">info@acme.org</span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form className="p-6 bg-white shadow rounded-lg space-y-6">
            <div>
              <label htmlFor="name" className="sr-only">Full Name</label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Full Name"
                className="w-full py-3 px-4 border border-gray-300 rounded-lg shadow-sm focus:ring-orange-500 focus:border-orange-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="sr-only">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                className="w-full py-3 px-4 border border-gray-300 rounded-lg shadow-sm focus:ring-orange-500 focus:border-orange-500"
              />
            </div>
            <div>
              <label htmlFor="tel" className="sr-only">Phone Number</label>
              <input
                type="tel"
                name="tel"
                id="tel"
                placeholder="Phone Number"
                className="w-full py-3 px-4 border border-gray-300 rounded-lg shadow-sm focus:ring-orange-500 focus:border-orange-500"
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 px-6 bg-orange-700 text-white rounded-lg hover:bg-orange-800 transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}