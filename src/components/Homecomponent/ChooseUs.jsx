import React from "react";
import img from "../../assets/Home/img5.jpeg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

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
        {/* Heading */}
        <motion.h1
          className="text-2xl sm:text-5xl font-bold leading-tight"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          Excellence in Logistics <br />
          <span className="text-red-400">Reliable, Timely & Efficient Deliveries</span>
        </motion.h1>

        {/* Paragraph */}
        <motion.p
          className="text-gray-200 max-w-2xl mt-6 text-lg sm:text-xl leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          At <strong>Logistiq Xpress</strong>, we deliver more than shipments — we deliver trust.  
          With advanced tracking systems, secure warehousing, and a dedicated logistics team, 
          we ensure your cargo moves efficiently across local, regional, and international routes.  
          Partner with us for precision, reliability, and peace of mind in every delivery.
        </motion.p>

        {/* Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <Link
            to="/contact"
            className="mt-6 inline-block bg-red-600 hover:bg-red-700 text-white px-6 py-3 font-semibold rounded shadow"
          >
            Contact Our Logistics Team
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default ChooseUs;
