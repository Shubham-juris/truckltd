import React from 'react'

const Map = () => {
  return (
    <>
        <div className="w-full h-[300px]">
      <iframe
        title="Location Map"
        className="w-full h-full border-0"
        src="https://www.google.com/maps?q=11909%20149%20Ave%20SE,%20Calgary&output=embed"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
    </>
  )
}

export default Map
