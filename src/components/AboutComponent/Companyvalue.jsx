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
      width: '40px',
      transition: { duration: 0.4, delay: 0.6, ease: 'easeOut' },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        staggerChildren: 0.1,
        delay: 0.7,
        ease: 'easeOut',
      },
    },
  };

  const buttonItemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
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

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4, delay: 1.0, ease: 'easeOut' },
    },
  };

  return (
    <motion.div
      className="bg-white py-10 sm:py-12 md:py-16"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
        
        {/* Left Side */}
        <div>
          <motion.h2
            className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-3"
            variants={headingVariants}
          >
            OUR CORE VALUES
          </motion.h2>
          <motion.div className="bg-red-600 h-1 w-10 mb-5" variants={lineVariants}></motion.div>

          <motion.div className="flex flex-wrap gap-2 mb-6" variants={buttonVariants}>
            {[].map((label) => (
              <motion.button
                key={label}
                className={`${
                  label === 'Excellence'
                    ? 'bg-red-600 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                } font-medium py-2 px-4 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-red-600`}
                variants={buttonItemVariants}
              >
                {label}
              </motion.button>
            ))}
          </motion.div>

          <motion.p
            className="text-gray-700 text-sm sm:text-base leading-relaxed"
            variants={leftTextVariants}
          >
            At <span className='text-red-600 font-semibold'>Logistiq Xpress</span>, we believe that our values are the driving force
            behind our success. Safety, reliability, and cutting-edge solutions are at the heart 
            of everything we do. Whether delivering across the city or internationally, 
            we operate with integrity, speed, and precision.
          </motion.p>
        </div>

        {/* Right Side */}
        <div className="flex flex-col justify-between h-full">
          <motion.p
            className="text-gray-700 text-sm sm:text-base mb-6 leading-relaxed"
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
