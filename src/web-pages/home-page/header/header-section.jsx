import React from "react";

// --- Image Assets ---
import logo from "../assets/LOGO.png";
import askEliImage from "../assets/ask eli.jpeg";
import podiumImage from "../assets/podium-image.png";

// --- Optional component for sign-up form or button ---
import SignUpElement from "./sign-up-element.jsx";

const HeaderSection = () => {
  return (
    <header className="relative w-full h-[25vh] flex items-center justify-between px-8 overflow-hidden bg-transparent">
      {/* Logo */}
      <img
        src={logo}
        alt="Simulacrum's Whisper Logo"
        className="h-[60%] object-contain z-10"
      />

      {/* Podium Image */}
      <img
        src={podiumImage}
        alt="Podium"
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-[90%] object-contain z-0 opacity-90"
      />

      {/* Ask Eli */}
      <div className="flex flex-col items-center z-20">
        <img
          src={askEliImage}
          alt="Ask Eli"
          className="h-[60%] object-contain rounded-md"
        />
        <SignUpElement />
      </div>
    </header>
  );
};

export default HeaderSection;
