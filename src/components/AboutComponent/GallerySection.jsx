import React from "react";
import { motion } from "framer-motion";

// Import images from assets
import img1 from "../../assets/about/img1.jpeg";
import img2 from "../../assets/about/img2.jpeg";
//import img3 from "../../assets/about/img3.jpeg";
import img4 from "../../assets/about/img4.jpeg";
import img5 from "../../assets/about/img5.jpeg";
import img6 from "../../assets/about/img6.jpeg";

const images = [img1, img2, img4, img5, img6];

const GallerySection = () => {
  return (
    <section className="bg-black/90 py-16">
      <div className="container mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            OUR GALLERY
          </h2>

          <div className="w-16 h-1 bg-red-600 mx-auto mt-4"></div>

          <p className="text-gray-300 mt-6 max-w-2xl mx-auto">
            Explore our logistics operations, global shipping processes,
            and the dedicated team working behind every successful delivery.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

          {images.map((img, index) => (
            <motion.div
              key={index}
              className="overflow-hidden rounded-xl shadow-lg"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <img
                src={img}
                alt="Gallery"
                className="w-full h-64 object-cover hover:scale-110 transition duration-500"
              />
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default GallerySection;
