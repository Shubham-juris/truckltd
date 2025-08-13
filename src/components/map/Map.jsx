import React from "react";

const Map = () => {
  return (
    <div className="w-full h-[300px]">
      <iframe
        title="Location Map"
        className="w-full h-full border-0"
        src="https://www.google.com/maps?q=8500+84+Street+SE,+Calgary,+AB&output=embed"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Map;
