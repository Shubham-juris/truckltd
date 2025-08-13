import React from "react";
import workerImg from "../../assets/about/worker.avif";

const AboutSection = () => {
  return (
    <div className="bg-white py-16 px-4 md:px-12">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-10">
        
        {/* Left Text Section */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Delivering Excellence in Transportation & Logistics
          </h2>
          <p className="text-gray-600 mb-6">
            At <span className="font-semibold text-red-600">Logistiq Xpress</span>, 
            we connect communities and businesses through reliable, fast, 
            and secure logistics solutions — locally and worldwide.
          </p>

          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-lg text-gray-800">🌍 Worldwide Service</h4>
              <p className="text-sm text-gray-600">
                Seamless global delivery solutions with advanced tracking and guaranteed timelines.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-lg text-gray-800">🚛 Local Service</h4>
              <p className="text-sm text-gray-600">
                Fast, secure, and cost-effective deliveries within your city and across the country.
              </p>
            </div>
          </div>

        
        </div>

        {/* Right Image */}
        <div className="flex justify-center">
          <img
            src={workerImg}
            alt="Logistics Worker"
            className="rounded shadow-lg max-w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
