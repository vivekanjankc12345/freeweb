"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

// Example CMS Fetch (replace with actual Directus/Strapi/Sanity API)
async function fetchHeroData() {
  return {
    title: "Our Services",
    subtitle:
      "Comprehensive marketing and IT solutions designed to accelerate your business growth and digital transformation journey.",
    services: [
      { icon: "📢", label: "Marketing" },
      { icon: "💻", label: "IT Solutions" },
      { icon: "💡", label: "Development" },
      { icon: "🧠", label: "Consulting" },
    ],
    background:
      "https://conroycreativecounsel.com/wp-content/uploads/2023/10/02-hero-image.jpeg", // Replace with CMS URL
  };
}

export default function Hero() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchHeroData().then((res) => setData(res));
  }, []);

  if (!data) return <div className="text-white p-10">Loading...</div>;

  return (
    <div className="relative w-full min-h-screen flex flex-col justify-center items-center text-center px-6 bg-black text-white overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{ backgroundImage: `url(${data.background})` }}
      />

      {/* Black overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative text-5xl md:text-6xl font-bold text-pink-500 drop-shadow-lg"
      >
        {data.title}
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative mt-6 max-w-3xl text-lg md:text-xl text-white/90"
      >
        {data.subtitle}
      </motion.p>

      {/* Services */}
      <div className="relative mt-12 grid grid-cols-1 md:grid-cols-4 gap-6">
        {data.services.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-2xl border border-pink-400/40 hover:scale-105 transition cursor-pointer"
          >
            <div className="text-4xl mb-3">{item.icon}</div>
            <div className="text-lg font-semibold text-pink-300">{item.label}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
