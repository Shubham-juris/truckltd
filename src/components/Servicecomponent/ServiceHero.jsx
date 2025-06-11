import React from 'react'
import bgTruckImage from "../../assets/service/home.jpg";

const ServiceHero = () => {
  return (
    <>
    <div
      className="w-full h-[70vh] bg-cover bg-center relative flex items-center justify-center"
      style={{ backgroundImage: `url(${bgTruckImage})` }}
    >
      <div className="absolute inset-0 bg-black opacity-60"></div>{" "}
      <div className="relative z-10 text-center text-white w-full flex justify-start px-4">
        <h1 className="text-4xl md:text-5xl font-bold">Services</h1>
        <p className="mt-2 text-sm md:text-lg text-gray-200"></p>
      </div>
    </div>
    </>
  )
}

export default ServiceHero
