import React from "react";
import { motion } from "framer-motion";
import workerImg from "../../assets/about/worker.avif";

const AboutSection = () => {
  const textVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <div className="bg-black py-16 px-4 md:px-12">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-10">

        {/* Left Text Section */}
        <motion.div
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Delivering Excellence in Transportation & Logistics
          </h2>
          <p className="text-gray-300 mb-6">
            At <span className="font-semibold text-red-500">Logistiq Xpress</span>, 
            we connect communities and businesses through reliable, fast, 
            and secure logistics solutions — locally and worldwide.
          </p>

          <div className="space-y-4">
            <motion.div variants={textVariants}>
              <h4 className="font-semibold text-lg text-red-500">🌍 Worldwide Service</h4>
              <p className="text-sm text-gray-300">
                Seamless global delivery solutions with advanced tracking and guaranteed timelines.
              </p>
            </motion.div>
            <motion.div variants={textVariants}>
              <h4 className="font-semibold text-lg text-red-500">🚛 Local Service</h4>
              <p className="text-sm text-gray-300">
                Fast, secure, and cost-effective deliveries within your city and across the country.
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          className="flex justify-center"
          variants={imageVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <img
            src={workerImg}
            alt="Logistics Worker"
            className="rounded shadow-lg max-w-full h-auto"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default AboutSection;
