import React from 'react';
import { motion } from 'framer-motion';
import { usedata } from '../../context/Context';

const Companyvalue = () => {
  const { name, image } = usedata();

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: 0.2, ease: 'easeInOut' },
    },
  };

  const headingVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, delay: 0.4, ease: 'easeOut' },
    },
  };

  const lineVariants = {
    hidden: { width: 0 },
    visible: {
      width: '50px',
      transition: { duration: 0.4, delay: 0.6, ease: 'easeOut' },
    },
  };

  const leftTextVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: 0.9, ease: 'easeOut' },
    },
  };

  const rightTextVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: 0.7, ease: 'easeOut' },
    },
  };

  return (
    <motion.div
      className="bg-black py-14 sm:py-16 md:py-20"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
        
        {/* Left Side */}
        <div>
          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4"
            variants={headingVariants}
          >
            OUR CORE VALUES
          </motion.h2>
          <motion.div
            className="bg-red-600 h-1 w-12 mb-6"
            variants={lineVariants}
          ></motion.div>

          <motion.p
            className="text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed"
            variants={leftTextVariants}
          >
            At <span className="text-red-600 font-semibold">Logistiq Xpress</span>, we believe that our values are the driving force
            behind our success. Safety, reliability, and cutting-edge solutions are at the heart 
            of everything we do. Whether delivering across the city or internationally, 
            we operate with integrity, speed, and precision.
          </motion.p>
        </div>

        {/* Right Side */}
        <div>
          <motion.p
            className="text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed"
            variants={rightTextVariants}
          >
            Our mission is to set new standards in logistics by combining advanced technology 
            with personalized customer care. With an experienced team and a commitment to 
            excellence, we ensure your shipments arrive safely, on time, and with complete transparency.
          </motion.p>
        </div>
      </div>
    </motion.div>
  );
};

export default Companyvalue;
