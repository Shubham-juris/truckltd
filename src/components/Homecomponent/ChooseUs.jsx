import React from "react";
import img from "../../assets/Home/choose.webp";
import { Link } from "react-router-dom";

const ChooseUs = () => {
  return (
    <>
      <div
        className="relative bg-cover bg-center h-[90vh] flex items-center text-white"
        style={{
          backgroundImage: `url(${img})`,
        }}
      >
        <div className="absolute inset-0 bg-black opacity-80"></div>{" "}
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 text-left">
          <h1 className="text-2xl sm:text-5xl font-bold leading-tight">
            We Are Proud to Excellence <br />
            <span className="text-[#f54748]">Deliver Success</span>
          </h1>

          <p className="text-gray-200 max-w-lg mt-4">
            Our company has grown into a dynamic force in transportation across
            the world. Equipped with state-of-the-art technologies, warehouse
            services, carrier-partners and dedicated employees.
          </p>

          <Link
            to="/contact"
            className="mt-6 inline-block bg-[#f54748] hover:bg-[#e63738] text-white px-6 py-3 font-semibold rounded shadow"
          >
            CONTACT US
          </Link>
        </div>
      </div>
    </>
  );
};

export default ChooseUs;
