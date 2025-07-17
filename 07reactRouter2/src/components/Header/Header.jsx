// Header.jsx
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logoImage from "./assets/logo.png"; 

export default function Header() {
  return (
    <header className="shadow sticky top-0 z-50 bg-white">
      <nav className="border-b border-gray-200 px-4 lg:px-6 py-2.5">
        <div className="flex flex-wrap justify-between items-center max-w-7xl mx-auto">
          <Link to="/" className="flex items-center max-w-[140px]">
            <img
              src={logoImage}
              className="h-12 w-auto max-w-full object-contain"
              alt="Logo"
            />
          </Link>

          <div className="flex items-center lg:order-2 space-x-2">
            <Link
              to="#"
              className="text-gray-700 hover:bg-gray-100 px-4 py-2 rounded-md text-sm font-medium"
            >
              Log in
            </Link>
            <Link
              to="#"
              className="bg-orange-700 text-white hover:bg-orange-800 px-4 py-2 rounded-md text-sm font-medium"
            >
              Get started
            </Link>
          </div>

          <div className="hidden lg:flex lg:items-center lg:w-auto w-full lg:order-1">
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `block py-2 px-3 lg:p-0 border-b lg:border-none ${
                      isActive ? 'text-orange-700' : 'text-gray-700'
                    } hover:text-orange-700`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `block py-2 px-3 lg:p-0 border-b lg:border-none ${
                      isActive ? 'text-orange-700' : 'text-gray-700'
                    } hover:text-orange-700`
                  }
                >
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    `block py-2 px-3 lg:p-0 border-b lg:border-none ${
                      isActive ? 'text-orange-700' : 'text-gray-700'
                    } hover:text-orange-700`
                  }
                >
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
