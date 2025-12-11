import React from "react";

const Map = () => {
  return (
    <div className="w-full flex flex-col md:flex-row items-center justify-center gap-6 mt-6 px-4">
      {/* Map Box 1 — Slave Lake */}
      <div className="w-full md:w-1/2 h-[320px] border rounded-xl p-2 shadow-sm bg-white/5">
        <h4 className="text-sm text-white font-medium mb-2 px-2">Slave Lake Office</h4>
        <iframe
          title="Slave Lake Location"
          className="w-full h-[calc(100%_-_28px)] rounded-lg"
          src="https://www.google.com/maps?q=%23209%2C+215+Main+St+NE%2C+Slave+Lake%2C+AB+T0G0B9&output=embed"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      {/* Map Box 2 — Calgary */}
      <div className="w-full md:w-1/2 h-[320px] border rounded-xl p-2 shadow-sm bg-white/5">
        <h4 className="text-sm text-white font-medium mb-2 px-2">Calgary Office</h4>
        <iframe
          title="Calgary Location"
          className="w-full h-[calc(100%_-_28px)] rounded-lg"
          src="https://www.google.com/maps?q=Unit+13-G%2C+2115+27th+Ave+NE%2C+Calgary%2C+AB+T2E7E4&output=embed"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Map;
