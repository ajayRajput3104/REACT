import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <section className="grid md:grid-cols-2 items-center gap-10">
        <div className="space-y-6 text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl font-bold">
            Download Now
            <span className="block text-orange-700 text-3xl sm:text-4xl mt-2">
              Lorem Ipsum
            </span>
          </h1>
          <p className="text-gray-600 text-lg">
            A beautiful and responsive React project built with passion.
          </p>
          <Link
            to="/"
            className="inline-flex items-center px-6 py-3 bg-orange-700 text-white rounded-lg hover:bg-orange-800 transition duration-300"
          >
            <svg
              fill="white"
              width="24"
              height="24"
              xmlns="https://images.pexels.com/photos/6937932/pexels-photo-6937932.jpeg"
              className="mr-2"
              viewBox="0 0 24 24"
            >
              <path d="M1.571 23.664l10.531-10.501 3.712 3.701-12.519 6.941c-.476.264-1.059.26-1.532-.011l-.192-.13zm9.469-11.56l-10.04 10.011v-20.022l10.04 10.011zm6.274-4.137l4.905 2.719c.482.268.781.77.781 1.314s-.299 1.046-.781 1.314l-5.039 2.793-4.015-4.003 4.149-4.137zm-15.854-7.534c.09-.087.191-.163.303-.227.473-.271 1.056-.275 1.532-.011l12.653 7.015-3.846 3.835-10.642-10.612z" />
            </svg>
            Download Now
          </Link>
        </div>

        <div className="flex justify-center">
          <img
            src="https://images.pexels.com/photos/6937932/pexels-photo-6937932.jpeg"
            alt="Promo Illustration"
            className="w-64 sm:w-80 md:w-96"
          />
        </div>
      </section>

      {/* Secondary Image */}
      <div className="flex justify-center mt-20">
        <img
          src="https://images.pexels.com/photos/6937932/pexels-photo-6937932.jpeg"
          alt="Supporting Visual"
          className="w-48 sm:w-64 md:w-80"
        />
      </div>

      <h1 className="text-center text-3xl sm:text-5xl py-10 font-semibold">
        Lorem Ipsum Yojo
      </h1>
    </div>
  );
}
