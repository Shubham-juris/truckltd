import React, { useEffect, useState } from "react";
import truck1 from "../../assets/Home/truck1.avif";
import truck2 from "../../assets/Home/truck2.jpg";
import truck3 from "../../assets/Home/truck3.jpeg";
import truck4 from "../../assets/Home/truck4.webp";

const images = [truck3, truck2, truck1, truck4];

const HomeSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[90vh] overflow-hidden">
      {/* Background Slideshow */}
      {images.map((src, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full bg-cover bg-center transition-opacity duration-[1200ms] ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url(${src})` }}
        ></div>
      ))}

      {/* Dark Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/70 bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Fast, Reliable & Nationwide Logistics
        </h1>
        <p className="max-w-2xl text-lg md:text-xl text-gray-200 mb-6">
          At <span className="text-red-500 font-semibold">Logistiq Xpress</span>, 
          we deliver speed, safety, and efficiency — ensuring your goods reach 
          their destination on time, every time.
        </p>
        <a
          href="/services"
          className="bg-red-500 hover:bg-red-600 px-6 py-3 rounded-lg font-semibold text-white transition-all duration-300"
        >
          Explore Our Services
        </a>
      </div>
    </div>
  );
};

export default HomeSection;
