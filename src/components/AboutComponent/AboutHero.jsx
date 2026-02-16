import React from "react";
import bgTruckImage from "../../assets/Home/img9.jpeg";

const AboutHero = () => {
  return (
    <div
      className="w-full h-[70vh] bg-cover bg-center relative flex items-center justify-center"
      style={{ backgroundImage: `url(${bgTruckImage})` }}
    >
      <div className="absolute inset-0 bg-black opacity-60"></div>{" "}
      <div className="relative z-10 text-center w-full flex justify-start text-white px-4">
        <h1 className="text-4xl md:text-5xl font-bold">About Us</h1>
        <p className="mt-2 text-sm md:text-lg text-gray-200"></p>
      </div>
    </div>
  );
};

export default AboutHero;
