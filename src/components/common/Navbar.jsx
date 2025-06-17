import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import logo from "../../assets/navbar/logo.jpg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white shadow-md w-full sticky top-0 z-50"> {/* full width here */}
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
        <Link to="/" className="flex items-center space-x-2">
          <img src={logo} alt="Logo" className="h-14 w-auto" />
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8 items-center">
          <Link to="/" className="text-red-500 font-semibold hover:underline">HOME</Link>
          <Link to="/about" className="text-black font-medium hover:text-cyan-500">COMPANY</Link>
          <Link to="/services" className="text-black font-medium hover:text-cyan-500">SERVICES</Link>
          <Link
            to="/contact"
            className="px-4 py-2 rounded-full text-sm font-semibold hover:bg-gray-800 transition"
          >
            CONTACT US
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-black focus:outline-none">
            {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Links */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 flex flex-col space-y-4 bg-white shadow-inner">
          <Link to="/" onClick={toggleMenu} className="text-cyan-500 font-semibold hover:underline">HOME</Link>
          <Link to="/about" onClick={toggleMenu} className="text-black font-medium hover:text-cyan-500">COMPANY</Link>
          <Link to="/services" onClick={toggleMenu} className="text-black font-medium hover:text-cyan-500">SERVICES</Link>
          <Link
            to="/contact"
            onClick={toggleMenu}
            className="bg-black text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-gray-800 transition"
          >
            CONTACT US
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
