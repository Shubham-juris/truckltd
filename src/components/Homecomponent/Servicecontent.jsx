import React from 'react';
import { motion } from "framer-motion";
import { RiBox3Line } from "react-icons/ri";
import { MdLocalShipping, MdWarehouse } from "react-icons/md";
import { FiSend } from "react-icons/fi";

const Servicecontent = () => {
  const services = [
    {
      title: "Transport of Packaged Goods",
      description:
        "Safe, secure, and reliable transportation for all types of packaged goods — delivered on time, every time.",
      icon: <RiBox3Line className="text-red-500" size={50} />,
    },
    {
      title: "National Road Transport",
      description:
        "Covering major routes across the nation with a robust fleet to keep your supply chain moving efficiently.",
      icon: <MdLocalShipping className="text-red-500" size={50} />,
    },
    {
      title: "Warehousing & Storage",
      description:
        "Secure, temperature-controlled, and scalable storage solutions to meet your business needs.",
      icon: <MdWarehouse className="text-red-500" size={50} />,
    },
    {
      title: "Forwarding & Logistics",
      description:
        "End-to-end freight forwarding and logistics solutions designed to optimize delivery and reduce costs.",
      icon: <FiSend className="text-red-500" size={50} />,
    },
  ];

  return (
    <section className="bg-black text-white py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        {/* Section Header */}
        <div className="mb-14">
          <h2 className="text-3xl md:text-4xl font-bold">Our Services</h2>
          <p className="text-gray-400 mt-2 max-w-xl mx-auto">
            Discover how <span className="text-red-500 font-semibold">Logistiq Xpress</span> delivers excellence in logistics and transport services nationwide.
          </p>
          <div className="h-1 w-12 mx-auto bg-red-500 mt-4 rounded"></div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="flex items-start gap-6"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              {/* Icon */}
              <motion.div
                whileHover={{ rotate: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {service.icon}
              </motion.div>

              {/* Content */}
              <div className="text-left">
                <h4 className="text-xl font-semibold mb-2">{service.title}</h4>
                <p className="text-sm text-gray-300 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Servicecontent;
