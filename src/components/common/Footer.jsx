import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#0F172A] text-gray-300 py-10">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-4 gap-10">
        
        {/* Logo & Description */}
        <div>
          <h2 className="text-xl font-bold mb-3 text-red-500 ">Logistiq Xpress</h2>
          <p className="text-sm">
            Delivering speed, reliability, and excellence in logistics and transport — 
            across the nation and beyond.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/" className="hover:text-red-500">Home</Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-red-500">Company</Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-red-500">Services</Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-red-500">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-white font-semibold mb-3">Services</h3>
          <ul className="space-y-2 text-sm">
            <li>Packaged Goods Transport</li>
            <li>National Road Transport</li>
            <li>Warehousing & Storage</li>
            <li>Logistics & Forwarding</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-white font-semibold mb-3">Contact Us</h3>
          <p className="text-sm mb-2">
            📍{" "}
            <a
              href="https://www.google.com/maps?q=45+Right+Avenue,+Red+Deer,+AB+T4N7E5,+Canada"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-500"
            >
              45 Right Avenue, Red Deer, AB T4N7E5, Canada
            </a>
          </p>
          <p className="text-sm mb-2">
            📧{" "}
            <a
              href="mailto:logistiqxpress.inc@gmail.com"
              className="hover:text-red-500"
            >
              logistiqxpress.inc@gmail.com
            </a>
          </p>
          <p className="text-sm">
            📞{" "}
            <a href="tel:+11234567890" className="hover:text-red-500">
             +1 587-783-98746
            </a>
          </p>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="mt-10 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Logistiq Xpress. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
