// src/web-pages/home-page/podium.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import leftScroll from "./assets/left-side-scroll.png";
import rightScroll from "./assets/right-side-scroll.png";
import podiumImage from "./assets/podium.png";

export default function Podium() {
  const navigate = useNavigate();

  return (
    <div className="relative w-screen h-screen bg-black overflow-hidden grid grid-cols-[25vw_50vw_25vw]">
      {/* Left Scroll */}
      <div className="relative w-full h-full">
        <img
          src={leftScroll}
          alt="Left Scroll"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      {/* Center Podium */}
      <div className="relative flex items-center justify-center">
        <img
          src={podiumImage}
          alt="Podium"
          className="max-h-[80vh] w-auto object-contain drop-shadow-[0_0_20px_rgba(255,255,255,0.25)]"
        />

        {/* ENTER button navigates to title page */}
        <button
          onClick={() => navigate("/title")} // <-- CORRECTED PATH
          className="absolute bottom-10 left-1/2 -translate-x-1/2 bg-black/80 text-white text-xl font-serif px-10 py-4 rounded-full border border-white hover:bg-white hover:text-black transition-all duration-300"
        >
          ENTER
        </button>
      </div>

      {/* Right Scroll */}
      <div className="relative w-full h-full">
        <img
          src={rightScroll}
          alt="Right Scroll"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
   



