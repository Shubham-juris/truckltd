import React, { useState, useEffect } from 'react';

const ProgressBar = ({ label, value }) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setWidth(value);
    }, 300);
    return () => clearTimeout(timer);
  }, [value]);

  return (
    <div className="mb-4">
      <div className="text-sm text-gray-700 mb-1">
        {label} {value}%
      </div>
      <div className="bg-gray-200 rounded-full h-4 relative overflow-hidden">
        <div
          className="bg-red-600 h-full rounded-full absolute left-0 top-0 transition-all duration-500"
          style={{ width: `${width}%` }}
        >
          <div
            className="absolute top-1/2 left-full -translate-y-1/2 w-2 h-2 rounded-full bg-white shadow"
            style={{ marginLeft: '-0.5rem' }}
          ></div>
        </div>
      </div>
    </div>
  );
};

const WarehousingSolutions = () => {
  return (
    <div className="bg-white py-8 px-6 rounded-md shadow-md">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">
        Warehousing Solutions
      </h2>
      <p className="text-gray-600 text-sm mb-6">
        At <span className="font-semibold text-red-600">Logistiq Xpress</span>, 
        we offer secure, scalable, and technology-driven warehousing facilities. 
        With advanced inventory management, climate control, and efficient handling, 
        we ensure your products are always in perfect condition and ready for dispatch.
      </p>
      <div>
        <ProgressBar label="Product Availability" value={98} />
        <ProgressBar label="Material Handling Equipment" value={80} />
        <ProgressBar label="Operational Transparency" value={70} />
        <ProgressBar label="On-Time Outgoing Shipments" value={65} />
      </div>
    </div>
  );
};

const OtherServices = () => {
  return (
    <div className="bg-white py-8 px-6 rounded-md shadow-md mt-8">
      <h2 className="text-xl font-semibold text-gray-800 mb-4 text-center">
        OTHER SERVICES
      </h2>
      <div className="w-16 h-1 bg-red-600 rounded-full mx-auto mb-6"></div>
      <p className="text-gray-600 text-sm text-center">
        Beyond warehousing, we specialize in nationwide transport, global freight forwarding, 
        customs clearance, and last-mile delivery. Our goal is to provide 
        <span className="text-red-600 font-medium"> end-to-end supply chain solutions </span> 
        that keep your business running smoothly and efficiently.
      </p>
    </div>
  );
};

const Services = () => {
  return (
    <div className="container mx-auto py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <WarehousingSolutions />
        <OtherServices />
      </div>
    </div>
  );
};

export default Services;
