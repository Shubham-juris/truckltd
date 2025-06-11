import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#0F172A] text-gray-300 py-10">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-4 gap-10">
        {/* Logo & Description */}
        <div>
          <h2 className="text-white text-xl font-bold mb-3">TruckWorld</h2>
          <p className="text-sm">
            Reliable logistics and transport services across the nation. Safe.
            Secure. On time.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/" className="hover:text-cyan-400">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-cyan-400">
                Company
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-cyan-400">
                Services
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-cyan-400">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-white font-semibold mb-3">Services</h3>
          <ul className="space-y-2 text-sm">
            <li>Packaged Goods Transport</li>
            <li>Road Transport</li>
            <li>Warehousing</li>
            <li>Logistics & Forwarding</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-white font-semibold mb-3">Contact Us</h3>
          <p className="text-sm mb-2">📍 11909 149 ave Se Calgary</p>
          <p className="text-sm">
            📧{" "}
            <a
              href="mailto:logistiqxpress.inc@gmail.com"
              className="hover:text-cyan-400 "
            >
              logistiqxpress.inc@gmail.com
            </a>
          </p>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="mt-10 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} TruckWorld. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
