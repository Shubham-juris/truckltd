import React from "react";
import bgVideo from "../../assets/service/video.mov";
import bgFallback from "../../assets/service/video.mov";

const Services = () => {

 
  return (
   <>
    <section className="relative min-h-[60vh] sm:min-h-[70vh] md:min-h-[80vh] flex items-center justify-center text-center text-white">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src={bgVideo}
        autoPlay
        loop
        muted
        playsInline
        poster={bgFallback}
      ></video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl px-4 sm:px-6 md:px-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
          Network of Carriers
        </h2>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed text-gray-200">
          With extensive experience spanning over three decades in the logistics
          industry, Traffic Tech has established strong partnerships with more
          than 15,000 small to midsize carriers across the United States,
          Mexico, and Canada. This network enables us to harness the power of
          strong partnerships, boasting over 600,000 of our suppliers’ trucks
          readily available at our disposal.
        </p>
      </div>
    </section>
   </>
  );
};

export default Services;
