import React, { useEffect, useState } from "react";
import truck1 from '../../assets/Home/truck1.avif';
import truck2 from '../../assets/Home/truck2.jpg';
import truck3 from '../../assets/Home/truck3.jpeg';
import truck4 from "../../assets/Home/truck4.webp"

const images = [truck3,truck2,truck1,truck4];

const HomeSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative max-w-7xl mx-auto  w-screen h-[90vh] overflow-hidden">
      {images.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`Truck ${index + 1}`}
          className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-[1000ms] ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
    </div>
  );
};

export default HomeSection;
