import React, { useState } from "react";
import PodiumImage from "../assets/podium-image.png";
import Logo from "../assets/LOGO.png";


const ElementsSection = () => {
  const [showVideo, setShowVideo] = useState(false);
  const [nextRoute, setNextRoute] = useState(null);

  const handleStoneClick = (route) => {
    setNextRoute(route);       // store where we’re going
    setShowVideo(true);        // trigger overlay
  };

  const handleVideoEnd = () => {
    setShowVideo(false);
    if (nextRoute) {
      window.location.href = nextRoute; // normal navigation resumes
    }
  };

  return (
    <div className="relative w-full h-[33vh] flex items-center justify-center">
      {/* Background props */}
      <img
        src={PodiumImage}
        alt="Podium"
        className="absolute bottom-0 left-8 h-24 object-contain"
      />
      <img
        src={Logo}
        alt="Logo"
        className="absolute bottom-0 right-8 h-20 object-contain"
      />

      {/* Stone buttons */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-6 z-20">
        <button
          onClick={() => handleStoneClick("/blog")}
          className="w-16 h-16 rounded-full bg-transparent border-2 border-white hover:bg-white/20 transition"
        >
          Blog
        </button>
        <button
          onClick={() => handleStoneClick("/development")}
          className="w-16 h-16 rounded-full bg-transparent border-2 border-white hover:bg-white/20 transition"
        >
          Dev
        </button>
        <button
          onClick={() => handleStoneClick("/nickels-dimes")}
          className="w-16 h-16 rounded-full bg-transparent border-2 border-white hover:bg-white/20 transition"
        >
          N&D
        </button>
        {/* Add up to 7 stones here */}
      </div>

      {/* Video overlay */}
      {showVideo && (
        <VideoOverlay onEnd={handleVideoEnd} />
      )}
    </div>
  );
};

export default ElementsSection;



