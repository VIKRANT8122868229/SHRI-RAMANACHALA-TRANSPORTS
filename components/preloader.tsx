"use client";

import { useEffect, useState } from "react";

export default function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-[9999] bg-[#07182f] flex flex-col items-center justify-center">

      <h1 className="text-6xl font-black text-red-600 tracking-wider animate-pulse">
        SRT
      </h1>

      <p className="text-white tracking-[6px] text-sm mt-4">
        SHRI RAMANACHALA TRANSPORTS
      </p>

      <div className="w-56 h-1 bg-white/20 rounded-full mt-10 overflow-hidden">
        <div className="h-full w-full bg-red-600 animate-[loading_1.2s_linear_forwards]" />
      </div>

    </div>
  );
}