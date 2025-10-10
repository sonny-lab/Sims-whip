import React from "react";
import HeroImage from "../assets/hero-image.png";

const HeroSection = () => {
  return (
    <div
      className="h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${HeroImage})` }}
    >
      <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg">
        Welcome to Simulacrum’s Whisper
      </h1>
    </div>
  );
};

export default HeroSection;

