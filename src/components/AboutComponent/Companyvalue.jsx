import React from 'react';
import { motion } from 'framer-motion';
import { usedata } from '../../context/Context';

const Companyvalue = () => {
  const {name,image}=usedata();
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

  const dotVariants = {
    hidden: { opacity: 0, scale: 0.7 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3, staggerChildren: 0.2, delay: 1.2, ease: 'easeOut' },
    },
  };

  const dotItemVariants = {
    hidden: { opacity: 0, scale: 0.7 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <>
       
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
          <motion.div className="bg-[#34ccff] h-1 w-10 mb-5" variants={lineVariants}></motion.div>

          <motion.div className="flex flex-wrap gap-2 mb-6" variants={buttonVariants}>
            {['Safety', 'Trust', 'Innovation', 'Excellence'].map((label, index) => (
              <motion.button
                key={label}
                className={`${
                  label === 'Excellence'
                    ? 'bg-[#34ccff] text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                } font-medium py-2 px-4 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-[#34ccff]`}
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
            At Kargon Logistics, we believe that strong values create a strong foundation.
            Our commitment to safety, trust, and forward-thinking solutions ensures that we deliver exceptional results — every time.
            Whether it's across the city or across borders, our services are backed by integrity and reliability.
          </motion.p>
        </div>

        {/* Right Side */}
        <div className="flex flex-col justify-between h-full">
          <motion.p
            className="text-gray-700 text-sm sm:text-base mb-6 leading-relaxed"
            variants={rightTextVariants}
          >
            We aim to revolutionize the logistics industry by blending modern technology with personalized customer service.
            With years of experience and a dedicated team, we guarantee smooth, timely, and transparent deliveries.
            Your cargo is our priority — we deliver with precision and care.
          </motion.p>

          <div className="flex items-center justify-start sm:justify-end">
            <div className="text-left">
              <motion.p
                className="font-semibold text-gray-800 text-sm"
                variants={rightTextVariants}
              >
                {name}
              </motion.p>
             
            </div>
            <motion.div
              className="ml-4 w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden"
              variants={imageVariants}
            >
              <img
                src={image}
                alt="Valeria Thomas"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
    </>
  )
}

export default Companyvalue
