import React, { useEffect, useRef, useState } from "react";

const stats = [
  { icon: "🎖️", value: 35, label: "+ Years of Experience" },
  { icon: "🌍", value: 528, label: "+ Cities Served Worldwide" },
  { icon: "👥", value: 475, label: "+ Satisfied Clients" },
  { icon: "🤝", value: 45, label: "+ Company We Help" },
];

export default function StatsSection() {
  const [startCount, setStartCount] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCount(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div ref={sectionRef} className="bg-white py-16 text-gray-900">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-center px-4">
        {stats.map((item, idx) => (
          <div key={idx} className="flex flex-col items-center">
            <div className="text-3xl p-4 rounded shadow-lg mb-4 bg-gray-100">
              {item.icon}
            </div>
            <h3 className="text-2xl font-bold">
              {startCount ? <CountUp end={item.value} /> : "0"}
            </h3>
            <p className="text-sm mt-1">{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

// Counter Component
function CountUp({ end }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000; // 2 seconds
    const incrementTime = 20;
    const step = Math.ceil(end / (duration / incrementTime));

    const counter = setInterval(() => {
      start += step;
      if (start >= end) {
        start = end;
        clearInterval(counter);
      }
      setCount(start);
    }, incrementTime);

    return () => clearInterval(counter);
  }, [end]);

  return count;
}
