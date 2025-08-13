import React from "react";
import { motion } from "framer-motion";

const steps = [
  {
    label: "Step 01",
    title: "Order Placement",
    description:
      "Customers book their shipments online or through our support team, providing all required delivery details.",
  },
  {
    label: "Step 02",
    title: "Secure Warehousing",
    description:
      "Goods are safely stored in our secure warehouses, ready for sorting and timely dispatch.",
  },
  {
    label: "Step 03",
    title: "Real-Time Tracking",
    description:
      "Our advanced tracking system keeps customers updated on their shipment’s exact location and status.",
  },
  {
    label: "Step 04",
    title: "On-Time Delivery",
    description:
      "We ensure your cargo reaches its destination safely and on schedule, anywhere in the world.",
  },
];

const CargoSteps = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 },
    },
  };

  const stepVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <motion.div
      className="bg-white py-20 px-4"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="text-center mb-16">
        <motion.h4
          className="text-sm font-semibold text-red-500 tracking-wide uppercase mb-2"
          variants={stepVariants}
        >
          Our Process
        </motion.h4>
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-gray-800"
          variants={stepVariants}
        >
          Easy Steps to Ship with <span className="text-red-600 font-bold">Logistiq Xpress</span>
        </motion.h2>
      </div>

      <div className="relative border-t border-gray-300 max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-4">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            className="relative text-center pt-16"
            variants={stepVariants}
          >
            <p className="text-sm font-medium text-gray-500 mb-1">
              {step.label}
            </p>

            <div className="w-3 h-3 bg-red-500 rounded-full mx-auto mb-3"></div>

            <h4 className="font-semibold text-lg text-gray-800 mt-4">
              {step.title}
            </h4>
            <p className="text-sm text-gray-600 mt-2">{step.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default CargoSteps;
