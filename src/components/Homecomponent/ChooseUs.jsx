import React from "react";
import img from "../../assets/Home/choose.webp";
import { Link } from "react-router-dom";

const ChooseUs = () => {
  return (
    <div
      className="relative bg-cover bg-center h-[90vh] flex items-center text-white"
      style={{
        backgroundImage: `url(${img})`,
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black opacity-80"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 text-left">
        <h1 className="text-2xl sm:text-5xl font-bold leading-tight">
          Driving Excellence in Logistics <br />
          <span className="text-red-400">Delivering with Speed & Trust</span>
        </h1>

        <p className="text-gray-200 max-w-lg mt-4">
          At <strong>Logistiq Xpress</strong>, we redefine logistics with speed,
          precision, and reliability. From local to international deliveries,
          our state-of-the-art technology, secure warehousing, trusted carrier
          network, and dedicated team ensure your cargo reaches its destination
          safely and on time — every time.
        </p>

        <Link
          to="/contact"
          className="mt-6 inline-block bg-red-600 hover:bg-red-700 text-white px-6 py-3 font-semibold rounded shadow"
        >
          CONTACT US
        </Link>
      </div>
    </div>
  );
};

export default ChooseUs;
