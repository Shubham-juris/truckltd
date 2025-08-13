import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import logo from "../../assets/navbar/logo1.jpeg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  // Common link styles
  const linkBase = "font-medium transition";
  const activeLink = "text-red-500 font-semibold underline";
  const inactiveLink = "text-black hover:text-red-500";

  return (
    <nav className="bg-white shadow-md w-full sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
        
        {/* Logo */}
        <NavLink to="/" className="flex items-center space-x-2">
          <img src={logo} alt="Logo" className="h-14 w-auto" />
        </NavLink>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8 items-center">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `${linkBase} ${isActive ? activeLink : inactiveLink}`
            }
          >
            HOME
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `${linkBase} ${isActive ? activeLink : inactiveLink}`
            }
          >
            COMPANY
          </NavLink>
          <NavLink
            to="/services"
            className={({ isActive }) =>
              `${linkBase} ${isActive ? activeLink : inactiveLink}`
            }
          >
            SERVICES
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `px-4 py-2 rounded-full text-sm font-semibold border border-red-500 ${
                isActive
                  ? "bg-red-500 text-white"
                  : "text-red-500 hover:bg-red-500 hover:text-white"
              }`
            }
          >
            CONTACT US
          </NavLink>
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
          <NavLink
            to="/"
            onClick={toggleMenu}
            className={({ isActive }) =>
              `${linkBase} ${isActive ? activeLink : inactiveLink}`
            }
          >
            HOME
          </NavLink>
          <NavLink
            to="/about"
            onClick={toggleMenu}
            className={({ isActive }) =>
              `${linkBase} ${isActive ? activeLink : inactiveLink}`
            }
          >
            COMPANY
          </NavLink>
          <NavLink
            to="/services"
            onClick={toggleMenu}
            className={({ isActive }) =>
              `${linkBase} ${isActive ? activeLink : inactiveLink}`
            }
          >
            SERVICES
          </NavLink>
          <NavLink
            to="/contact"
            onClick={toggleMenu}
            className={({ isActive }) =>
              `px-4 py-2 rounded-full text-sm font-semibold border border-red-500 ${
                isActive
                  ? "bg-red-500 text-white"
                  : "text-red-500 hover:bg-red-500 hover:text-white"
              }`
            }
          >
            CONTACT US
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
