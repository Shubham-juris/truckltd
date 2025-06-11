import React from "react";
import img from "../../assets/Home/state.webp"
const stats = [
  {
    icon: "🎖️", 
    value: "35",
    label: "+ Years of Experience",
  },
  {
    icon: "🌍",
    value: "528",
    label: "+ Cities Served Worldwide",
  },
  {
    icon: "👥",
    value: "475",
    label: "+ Satisfied Clients",
  },
  {
    icon: "🤝",
    value: "45",
    label: "+ Company We Help",
  },
];

export default function StatsSection() {
  return (
   <div className="relative bg-cover bg-center py-16 text-white" style={{ backgroundImage: `url(${img})` }}>
  <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/80"></div>

  <div className="relative max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-center px-4">
    {stats.map((item, idx) => (
      <div key={idx} className="flex flex-col items-center">
        <div className="text-3xl p-4 rounded shadow-lg mb-4">
          {item.icon}
        </div>
        <h3 className="text-2xl text-white font-bold">{item.value}</h3>
        <p className="text-sm text-white mt-1">{item.label}</p>
      </div>
    ))}
  </div>
</div>

  );
}
