import React from "react";

const Map = () => {
  return (
    <div className="w-full h-[300px]">
      <iframe
        title="Location Map"
        className="w-full h-full border-0"
        src="https://www.google.com/maps?q=45+Right+Avenue,+Red+Deer,+AB+T4N7E5,+Canada&output=embed"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Map;
