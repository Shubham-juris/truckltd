import React from "react";
import heroTruck from "../../assets/Home/truck3.jpeg"; 
import truckPark from "../../assets/service/img1.jpeg"; 
import truckWheel from "../../assets/service/img2.jpeg";

const ServiceHero = () => {
  return (
    <>
      <section className="relative bg-black text-white py-16 md:py-24 px-6 md:px-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
              Over the Road <br /> <span className="text-red-500">Trucking</span>
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed max-w-xl">
              At{" "}
              <span className="text-red-500 font-semibold">Logistiq Xpress</span>, 
              we provide innovative and reliable logistics solutions to keep your 
              business moving forward. Whether you need nationwide delivery, safe storage, 
              or specialized freight forwarding — we’ve got you covered.
            </p>
          </div>

          {/* Right Images */}
          <div className="grid grid-cols-2 gap-4">
            <img
              src={heroTruck}
              alt="Blue Truck"
              className="rounded-lg shadow-lg w-full h-64 object-cover col-span-2"
            />
            <img
              src={truckPark}
              alt="Truck Park"
              className="rounded-lg shadow-lg w-full h-40 object-cover"
            />
            <img
              src={truckWheel}
              alt="Truck Wheel"
              className="rounded-lg shadow-lg w-full h-40 object-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceHero;
