import React from "react";
import { motion } from "framer-motion";

const WarehousingDetails = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const details = [
    {
      title: "Product Availability – 99%",
      text: "We maintain near-perfect inventory accuracy with real-time tracking systems, ensuring products are always in stock and supply remains uninterrupted.",
    },
    {
      title: "Material Handling Equipment – 99%",
      text: "Equipped with forklifts, conveyor belts, and pallet movers, our warehouses enable faster loading/unloading and safer operations.",
    },
    {
      title: "Operational Transparency – 99%",
      text: "Clients have access to shipment tracking, order status, and inventory reports via our integrated dashboards for full visibility.",
    },
    {
      title: "On-Time Outgoing Shipments – 99%",
      text: "We ensure most orders are dispatched on time, with constant efforts to improve outbound logistics efficiency.",
    }
  ];

  return (
    <motion.div
      className="bg-black py-12 px-6 rounded-md shadow-md"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <motion.h2
        className="text-2xl font-bold text-white mb-4 text-center"
        variants={itemVariants}
      >
        Detailed Warehousing Performance
      </motion.h2>
      <motion.div
        className="w-20 h-1 bg-red-600 rounded-full mx-auto mb-8"
        variants={itemVariants}
      ></motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {details.map((item, index) => (
          <motion.div
            key={index}
            className="bg-gray-900 p-6 rounded-lg shadow hover:shadow-lg transition-shadow"
            variants={itemVariants}
          >
            <h3 className="text-lg font-semibold text-red-500 mb-2">{item.title}</h3>
            <p className="text-gray-300 text-sm">{item.text}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default WarehousingDetails;
