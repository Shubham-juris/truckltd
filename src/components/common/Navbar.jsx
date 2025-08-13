import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import logo from "../../assets/navbar/logo1.jpeg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpen]);

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
          {["/", "/about", "/services"].map((path, index) => {
            const labels = ["HOME", "COMPANY", "SERVICES"];
            return (
              <NavLink
                key={path}
                to={path}
                className={({ isActive }) =>
                  `${linkBase} ${isActive ? activeLink : inactiveLink}`
                }
              >
                {labels[index]}
              </NavLink>
            );
          })}
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

      {/* Mobile Menu with Slide Animation */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
        onClick={toggleMenu}
      >
        <div
          className="absolute right-0 top-0 h-full w-2/3 bg-white shadow-lg p-6 flex flex-col space-y-6"
          onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside menu
        >
          {["/", "/about", "/services"].map((path, index) => {
            const labels = ["HOME", "COMPANY", "SERVICES"];
            return (
              <NavLink
                key={path}
                to={path}
                onClick={toggleMenu}
                className={({ isActive }) =>
                  `${linkBase} ${isActive ? activeLink : inactiveLink}`
                }
              >
                {labels[index]}
              </NavLink>
            );
          })}
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
      </div>
    </nav>
  );
};

export default Navbar;
