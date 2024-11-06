// Navbar.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-blue-600">
            JobInsights
          </Link>

          {/* Menu Links */}
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-700 hover:text-blue-600">
              Home
            </Link>
            <Link to="/features" className="text-gray-700 hover:text-blue-600">
              Features
            </Link>
            <Link to="/pricing" className="text-gray-700 hover:text-blue-600">
              Pricing
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-blue-600">
              About
            </Link>
          </div>

          {/* Login/Signup Buttons */}
          <div className="hidden md:flex space-x-4">
            <Link
              to="/login"
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              Log In
            </Link>
            <Link
              to="/signup"
              className="px-4 py-2 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-600 hover:text-white"
            >
              Sign Up
            </Link>
          </div>

          {/* Hamburger Icon for Mobile */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu}>
              {isOpen ? (
                <FaTimes className="text-2xl text-blue-600" />
              ) : (
                <FaBars className="text-2xl text-blue-600" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="flex flex-col space-y-4 py-4">
              <Link
                to="/"
                onClick={toggleMenu}
                className="text-gray-700 hover:text-blue-600"
              >
                Home
              </Link>
              <Link
                to="/features"
                onClick={toggleMenu}
                className="text-gray-700 hover:text-blue-600"
              >
                Features
              </Link>
              <Link
                to="/pricing"
                onClick={toggleMenu}
                className="text-gray-700 hover:text-blue-600"
              >
                Pricing
              </Link>
              <Link
                to="/about"
                onClick={toggleMenu}
                className="text-gray-700 hover:text-blue-600"
              >
                About
              </Link>
              <Link
                to="/login"
                onClick={toggleMenu}
                className="px-4 py-2 bg-blue-600 text-white rounded-md text-center"
              >
                Log In
              </Link>
              <Link
                to="/signup"
                onClick={toggleMenu}
                className="px-4 py-2 border border-blue-600 text-blue-600 rounded-md text-center hover:bg-blue-600 hover:text-white"
              >
                Sign Up
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
