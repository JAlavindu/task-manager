// components/Navbar.js
"use client";

import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-blue-600 p-4 ">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link className="text-white hover:text-gray-300 font-bold" href="/">
          TaskManager
        </Link>
        <div className="lg:flex hidden space-x-4">
          <Link className="text-white hover:text-gray-300" href="/">
            Home
          </Link>
          <Link className="text-white hover:text-gray-300" href="/about">
            About
          </Link>
          <Link className="text-white hover:text-gray-300" href="/services">
            Services
          </Link>
          <Link className="text-white hover:text-gray-300" href="/contact">
            Contact
          </Link>
        </div>
        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          &#9776;
        </button>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden flex flex-col space-y-4 mt-4">
          <Link className="text-white hover:text-gray-300" href="/">
            Home
          </Link>
          <Link className="text-white hover:text-gray-300" href="/about">
            About
          </Link>
          <Link className="text-white hover:text-gray-300" href="/services">
            Services
          </Link>
          <Link className="text-white hover:text-gray-300" href="/contact">
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
