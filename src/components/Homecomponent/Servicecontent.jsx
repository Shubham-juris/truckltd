// import React from 'react';
// import { motion } from "framer-motion";
// import { RiBox3Line } from "react-icons/ri";
// import { MdLocalShipping, MdWarehouse } from "react-icons/md";
// import { FiSend } from "react-icons/fi";
// import { Link } from "react-router-dom";

// const Servicecontent = () => {
//   const services = [
//     {
//       title: "Transport of Packaged Goods",
//       description:
//         "Safe, secure, and reliable transportation for all types of packaged goods — delivered on time, every time.",
//       icon: <RiBox3Line className="text-red-500" size={50} />,
//     },
//     {
//       title: "National Road Transport",
//       description:
//         "Covering major routes across the nation with a robust fleet to keep your supply chain moving efficiently.",
//       icon: <MdLocalShipping className="text-red-500" size={50} />,
//     },
//     {
//       title: "Warehousing & Storage",
//       description:
//         "Secure, temperature-controlled, and scalable storage solutions to meet your business needs.",
//       icon: <MdWarehouse className="text-red-500" size={50} />,
//     },
//     {
//       title: "Forwarding & Logistics",
//       description:
//         "End-to-end freight forwarding and logistics solutions designed to optimize delivery and reduce costs.",
//       icon: <FiSend className="text-red-500" size={50} />,
//     },
//   ];

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     show: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.2,
//       },
//     },
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 30 },
//     show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
//   };

//   return (
//     <section className="bg-black text-white py-20 px-4">
//       <div className="max-w-6xl mx-auto text-center">
        
//         {/* Section Header */}
//         <motion.div
//           className="mb-14"
//           initial={{ opacity: 0, y: -20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true, amount: 0.3 }}
//         >
//           <h2 className="text-3xl md:text-4xl font-bold">Our Services</h2>
//           <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-lg">
//             At <span className="text-red-500 font-semibold">Logistiq Xpress</span>, 
//             we provide innovative and reliable logistics solutions to keep your 
//             business moving forward. Whether you need nationwide delivery, safe storage, 
//             or specialized freight forwarding — we’ve got you covered.
//           </p>
//           <div className="h-1 w-12 mx-auto bg-red-500 mt-4 rounded"></div>
//         </motion.div>

//         {/* Services Grid */}
//         <motion.div
//           className="grid md:grid-cols-2 gap-16"
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: true, amount: 0.3 }}
//         >
//           {services.map((service, index) => (
//             <motion.div
//               key={index}
//               className="flex items-start gap-6"
//               variants={itemVariants}
//               whileHover={{ scale: 1.02 }}
//               transition={{ duration: 0.3 }}
//             >
//               {/* Icon */}
//               <motion.div
//                 whileHover={{ rotate: 10 }}
//                 transition={{ type: "spring", stiffness: 300 }}
//               >
//                 {service.icon}
//               </motion.div>

//               {/* Content */}
//               <div className="text-left">
//                 <h4 className="text-xl font-semibold mb-2">{service.title}</h4>
//                 <p className="text-sm text-gray-300 leading-relaxed">
//                   {service.description}
//                 </p>
//               </div>
//             </motion.div>
//           ))}
//         </motion.div>

//         {/* Call to Action */}
//         <motion.div
//           className="mt-16 bg-red-600 py-6 px-8 rounded-lg shadow-lg text-center"
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, ease: "easeOut" }}
//           viewport={{ once: true, amount: 0.3 }}
//         >
//           <h3 className="text-2xl font-semibold mb-3">Need a Custom Logistics Solution?</h3>
//           <p className="text-white/90 max-w-2xl mx-auto mb-5">
//             Our team specializes in tailored logistics strategies for businesses 
//             of all sizes. Let’s work together to make your operations faster, 
//             smarter, and more cost-effective.
//           </p>
//           <Link
//             to="/contact"
//             className="bg-white text-red-600 font-semibold px-6 py-3 rounded-lg hover:bg-gray-200 transition"
//           >
//             Get in Touch
//           </Link>
//         </motion.div>

//       </div>
//     </section>
//   );
// };

// export default Servicecontent;

import React from 'react';
import { motion } from "framer-motion";
import { RiBox3Line } from "react-icons/ri";
import { MdLocalShipping, MdWarehouse } from "react-icons/md";
import { FiSend } from "react-icons/fi";
import { Link } from "react-router-dom";

const Servicecontent = () => {
  const services = [
    {
      title: "Packaged Goods Transportation",
      description:
        "Reliable and secure transport of all types of packaged goods. We ensure your shipments arrive safely and on schedule, every time.",
      icon: <RiBox3Line className="text-red-500" size={50} />,
    },
    {
      title: "National Freight & Road Transport",
      description:
        "Efficient nationwide transport solutions using our robust fleet, covering major highways and routes to keep your supply chain moving seamlessly.",
      icon: <MdLocalShipping className="text-red-500" size={50} />,
    },
    {
      title: "Warehousing & Inventory Management",
      description:
        "State-of-the-art, secure, and scalable warehouse solutions with inventory tracking, climate control, and flexible storage options for your business.",
      icon: <MdWarehouse className="text-red-500" size={50} />,
    },
    {
      title: "Freight Forwarding & Logistics Solutions",
      description:
        "Comprehensive end-to-end logistics and freight forwarding services designed to optimize delivery, minimize costs, and ensure timely shipments.",
      icon: <FiSend className="text-red-500" size={50} />,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section className="bg-black text-white py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        
        {/* Section Header */}
        <motion.div
          className="mb-14"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold">Our Logistics Services</h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-lg">
            At <span className="text-red-500 font-semibold">Logistiq Xpress</span>, 
            we provide end-to-end logistics solutions for businesses of all sizes. 
            From nationwide freight, warehousing, and inventory management to specialized 
            freight forwarding — we make sure your supply chain operates efficiently and reliably.
          </p>
          <div className="h-1 w-12 mx-auto bg-red-500 mt-4 rounded"></div>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid md:grid-cols-2 gap-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="flex items-start gap-6"
              variants={itemVariants}
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
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="mt-16 bg-red-600 py-6 px-8 rounded-lg shadow-lg text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h3 className="text-2xl font-semibold mb-3">Need a Custom Logistics Solution?</h3>
          <p className="text-white/90 max-w-2xl mx-auto mb-5">
            Our team creates tailored logistics strategies to help businesses streamline operations, 
            reduce costs, and ensure on-time deliveries. Let us optimize your supply chain for maximum efficiency.
          </p>
          <Link
            to="/contact"
            className="bg-white text-red-600 font-semibold px-6 py-3 rounded-lg hover:bg-gray-200 transition"
          >
            Get in Touch
          </Link>
        </motion.div>

      </div>
    </section>
  );
};

export default Servicecontent;

