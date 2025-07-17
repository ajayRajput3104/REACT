// Footer.jsx
import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-100 py-6 mt-12 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-600">
        <p>&copy; {new Date().getFullYear()} React Project. All rights reserved.</p>
        <div className="flex space-x-4 mt-4 sm:mt-0">
          <a href="#" className="hover:text-orange-700">Privacy Policy</a>
          <a href="#" className="hover:text-orange-700">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
