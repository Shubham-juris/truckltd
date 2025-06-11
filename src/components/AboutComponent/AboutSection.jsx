import React from "react";
import workerImg from "../../assets/about/worker.avif";

const AboutSection = () => {
  return (
    <div className="bg-white py-16 px-4 md:px-12">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-10">
        
        {/* Left Text Section */}
        <div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            We provide full range of transportation
          </h2>
          <p className="text-gray-600 mb-6">
            The efficiency and reliability of transport systems play a crucial role
            in connecting communities.
          </p>

          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-lg text-gray-800">🌍 Worldwide Service</h4>
              <p className="text-sm text-gray-600">
                We’re always providing people a complete solution focused on any business.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-lg text-gray-800">🚛 Local Service</h4>
              <p className="text-sm text-gray-600">
                We’re always providing people a complete solution focused on any business.
              </p>
            </div>
          </div>
{/* 
          <button className="mt-6 bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600 transition">
            Learn More
          </button> */}
        </div>

        <div className="flex justify-center">
          <img
            src={workerImg}
            alt="Worker"
            className="rounded shadow-lg max-w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
