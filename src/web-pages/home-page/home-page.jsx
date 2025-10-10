import React, { useState, useRef } from "react";
import podiumImage from "./assets/podium-image.png";
import titleImage from "./assets/title.png";
import whisperSound from "./assets/whisper-theme.mp3";
import HomePageTwo from "./home-page-2.jsx";

const HomePage = () => {
  const [isWhispering, setIsWhispering] = useState(false);
  const [showTitle, setShowTitle] = useState(false);
  const [fadeOutScene, setFadeOutScene] = useState(false);
  const [showHomePageTwo, setShowHomePageTwo] = useState(false);
  const audioRef = useRef(null);

  const handleClick = () => {
    if (isWhispering) return;
    setIsWhispering(true);
    setFadeOutScene(true);

    // Fade to black and show title
    setTimeout(() => {
      setShowTitle(true);
      const audio = audioRef.current;
      if (audio) {
        audio.currentTime = 0;
        audio.volume = 0;
        audio.play();
        const fadeIn = setInterval(() => {
          audio.volume = Math.min(1, audio.volume + 0.05);
          if (audio.volume >= 1) clearInterval(fadeIn);
        }, 75);
      }
    }, 1000);

    // Hold for 3s, then fade out title and audio
    setTimeout(() => {
      setShowTitle(false);
      const audio = audioRef.current;
      if (audio) {
        const fadeOut = setInterval(() => {
          audio.volume = Math.max(0, audio.volume - 0.05);
          if (audio.volume <= 0.05) {
            audio.pause();
            clearInterval(fadeOut);
          }
        }, 75);
      }
    }, 5000);

    // Show HomePageTwo
    setTimeout(() => {
      setFadeOutScene(false);
      setIsWhispering(false);
      setShowHomePageTwo(true);
    }, 6000);
  };

  return (
    <div
      className="relative w-screen h-screen overflow-hidden bg-black cursor-pointer flex items-end justify-center"
      onClick={handleClick}
    >
      {/* Audio */}
      <audio ref={audioRef} src={whisperSound} preload="auto" />

      {/* Full Podium Scene */}
      <div
        className={`transition-opacity duration-1000 ${
          fadeOutScene ? "opacity-0" : "opacity-100"
        }`}
      >
       <img
  src={podiumImage}
  alt="Podium"
  className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-auto h-full object-contain"
/>

      </div>

      {/* Title Reveal */}
      {showTitle && (
        <div className="absolute inset-0 flex items-center justify-center bg-black z-[9999]">
          <img
            src={titleImage}
            alt="Simulacrum's Whisper"
            className="w-[60%] opacity-0 animate-[fadeBlurGlow_5s_ease-in-out_forwards]"
          />
        </div>
      )}

      {/* Fade into HomePageTwo */}
      {showHomePageTwo && (
        <div className="absolute inset-0 z-[5000]">
          <HomePageTwo />
        </div>
      )}

      <style>{`
        @keyframes fadeBlurGlow {
          0% { opacity: 0; filter: blur(15px) brightness(0.6); }
          25% { opacity: 1; filter: blur(3px) brightness(1.2); }
          50% { opacity: 1; filter: blur(1px) brightness(1.4); }
          75% { opacity: 1; filter: blur(0px) brightness(1.2); }
          100% { opacity: 0; filter: blur(10px) brightness(0.8); }
        }
      `}</style>
    </div>
  );
};

export default HomePage;


