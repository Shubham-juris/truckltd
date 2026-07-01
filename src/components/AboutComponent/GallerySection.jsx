// import React from "react";
// import { motion } from "framer-motion";

// import img1 from "../../assets/about/img1.jpeg";
// import img2 from "../../assets/about/img2.jpeg";
// import img4 from "../../assets/about/img4.jpeg";
// import img5 from "../../assets/about/img5.jpeg";
// import img6 from "../../assets/about/img6.jpeg";

// const images = [img5, img2, img4];
// const bottomImages = [img1, img6];

// const GallerySection = () => {
//   return (
//     <section className="bg-black/90 py-16">
//       <div className="max-w-7xl mx-auto px-6">

//         {/* Heading */}
//         <div className="text-center mb-12">
//           <h2 className="text-3xl md:text-4xl font-bold text-white">
//             OUR GALLERY
//           </h2>
//           <div className="w-16 h-1 bg-red-600 mx-auto mt-4"></div>
//           <p className="text-gray-300 mt-6 max-w-2xl mx-auto">
//             Explore our logistics operations and global shipping processes.
//           </p>
//         </div>

//         {/* Top Row (3 Images) */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-6">
//           {images.map((img, index) => (
//             <motion.div
//               key={index}
//               className="overflow-hidden rounded-xl shadow-xl"
//               initial={{ opacity: 0, scale: 0.9 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.4 }}
//             >
//               <img
//                 src={img}
//                 alt="Gallery"
//                 className="w-full h-64 object-cover hover:scale-110 transition duration-500"
//               />
//             </motion.div>
//           ))}
//         </div>

//         {/* Bottom Row (2 Images 50-50) */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           {bottomImages.map((img, index) => (
//             <motion.div
//               key={index}
//               className="overflow-hidden rounded-xl shadow-xl"
//               initial={{ opacity: 0, scale: 0.9 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.4 }}
//             >
//               <img
//                 src={img}
//                 alt="Gallery"
//                 className="w-full h-72 object-cover hover:scale-110 transition duration-500"
//               />
//             </motion.div>
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// };

// export default GallerySection;

import React from "react";
import { motion } from "framer-motion";

import t1 from "../../assets/about/t1.png";
import img17 from "../../assets/about/img17.jpeg";
import t2 from "../../assets/about/t2.png";
// import img18 from "../../assets/about/img18.jpeg";
import img19 from "../../assets/about/img19.jpeg";
import t3 from "../../assets/about/t3.png";
import img20 from "../../assets/about/img20.jpeg";
import t4 from "../../assets/about/t4.png";
import img21 from "../../assets/about/img21.jpeg";
import t5 from "../../assets/about/t5.png";
import img22 from "../../assets/about/img22.jpeg";
import t6 from "../../assets/about/t6.png";
import img23 from "../../assets/about/img23.jpeg";
import t7 from "../../assets/about/t7.png";


const images = [
  t1,
  img17,
  t2,
  img19,
  t3,
  img20,
  t4,
  img21,
  t5,
  img22,
  t6,
  img23,
  t7
];

const GallerySection = () => {
  return (
    <section className="bg-black/90 py-16">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            OUR GALLERY
          </h2>
          <div className="w-16 h-1 bg-red-600 mx-auto mt-4"></div>
          <p className="text-gray-300 mt-6 max-w-2xl mx-auto">
            Explore our logistics operations and global shipping processes.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((img, index) => (
            <motion.div
              key={index}
              className="overflow-hidden rounded-xl shadow-xl"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
            >
              <img
                src={img}
                alt={`Gallery ${index + 1}`}
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
