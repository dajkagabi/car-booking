import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '/src/assets/lg.png';  

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
 <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md text-black py-1.8 px-4 shadow-sm transition-all duration-300">

      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex justify-end items-center w-auto"> 
          <img 
            src={logo} 
            alt="BookaCar" 
            className="h-16 -mt-2" 
          /> 
        </Link>

        {/* Desktop  */}
        <div className="hidden md:flex space-x-6 items-center">
          <Link to="/" className="hover:text-gray-600 transition duration-300">HOME</Link>
          <Link to="/cars" className="hover:text-gray-600 transition duration-300">CARS</Link>
          <Link to="/about" className="hover:text-gray-600 transition duration-300">ABOUT</Link>
          <Link to="/contact" className="hover:text-gray-600 transition duration-300">CONTACT</Link>
     
          <Link
            to="/book-test-drive"
            className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition duration-300 shadow-md"
          >
            BOOK TEST DRIVE
          </Link>
        </div>

        {/* Hamburger  */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-black focus:outline-none">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobil  */}
      {isOpen && (
        <div className="md:hidden mt-4 bg-white rounded-md shadow-lg py-2">
          <Link
            to="/"
            className="block px-4 py-2 text-black hover:bg-gray-100 transition duration-300"
            onClick={() => setIsOpen(false)}
          >
            HOME
          </Link>
          <Link
            to="/cars"
            className="block px-4 py-2 text-black hover:bg-gray-100 transition duration-300"
            onClick={() => setIsOpen(false)}
          >
            CARS
          </Link>
          <Link
            to="/about"
            className="block px-4 py-2 text-black hover:bg-gray-100 transition duration-300"
            onClick={() => setIsOpen(false)}
          >
            ABOUT
          </Link>
          <Link
            to="/contact"
            className="block px-4 py-2 text-black hover:bg-gray-100 transition duration-300"
            onClick={() => setIsOpen(false)}
          >
            CONTACT
          </Link>
          <Link
            to="/book-test-drive"
            className="block px-4 py-2 text-white bg-blue-600 hover:bg-blue-700 text-center mx-4 my-2 rounded-md transition duration-300"
            onClick={() => setIsOpen(false)}
          >
            BOOK TEST DRIVE
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;