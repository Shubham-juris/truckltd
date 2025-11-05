import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import logo from "../../assets/navbar/logo1.jpeg";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const footerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => {
      if (footerRef.current) {
        observer.unobserve(footerRef.current);
      }
    };
  }, []);

  return (
    <footer
      ref={footerRef}
      className={`relative py-10 transition-all duration-1000 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0">
        <div
          className="w-full h-full"
          style={{
            background: `linear-gradient(to top, rgba(0, 0, 0, 0.08), transparent)`,
          }}
        ></div>
      </div>

      {/* Footer Content */}
      <div className="relative max-w-7xl mx-auto px-4 grid md:grid-cols-4 gap-10 bg-white bg-opacity-95 rounded-lg shadow-sm">
        {/* Logo & Description */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <img
              src={logo}
              alt="Logistiq Xpress"
              className="w-10 h-10 object-contain"
            />
            <h2 className="text-xl font-bold text-red-500">Logistiq Xpress</h2>
          </div>
          <p className="text-sm text-gray-700">
            Delivering speed, reliability, and excellence in logistics and
            transport — across the nation and beyond.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-red-500 font-bold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/" className="text-gray-700 hover:text-red-500">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-gray-700 hover:text-red-500">
                Company
              </Link>
            </li>
            <li>
              <Link to="/services" className="text-gray-700 hover:text-red-500">
                Services
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-gray-700 hover:text-red-500">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-red-500 font-bold mb-3">Services</h3>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>Packaged Goods Transport</li>
            <li>National Road Transport</li>
            <li>Warehousing & Storage</li>
            <li>Logistics & Forwarding</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-red-500 font-bold mb-3">Contact Us</h3>
          <p className="text-sm text-gray-700 mb-2">
            📍{" "}
            <a
              href="https://www.google.com/maps?q=8500-84+Street+SE,+Calgary,+AB"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-500"
            >
              
             Slave Lake, Alberta,Canada <br></br>
              Calagry,Canada
            </a>
          </p>

          <p className="text-sm text-gray-700 mb-2">
            📧{" "}
            <a
              href="mailto:logistiqxpress.inc@gmail.com"
              className="hover:text-red-500"
            >
              logistiqxpress.inc@gmail.com
            </a>
          </p>
          <p className="text-sm text-gray-700 mb-4">
            📞{" "}
            <a href="tel:+18887555706" className="hover:text-red-500">
              +1 888-755-5706
            </a>
          </p>

          {/* Social Icons */}
          <div className="flex gap-3 mt-2">
            <a
              href="https://www.facebook.com/profile.php?id=61579332661327"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-blue-500 text-white rounded-full hover:bg-blue-700 transition-colors"
            >
              <FaFacebookF size={16} />
            </a>

            <a
              href="https://www.instagram.com/logistiqxpress/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-red-500 text-white rounded-full hover:bg-red-700 transition-colors"
            >
              <FaInstagram size={16} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="relative mt-10 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Logistiq Xpress. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
