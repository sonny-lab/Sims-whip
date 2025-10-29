// src/web-pages/home-page/title.jsx
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import titleImage from "./assets/title.png";     // ✅ your actual title graphic
import whisperSound from "./assets/whisper.mp3"; // ✅ optional sound effect

export default function Title() {
  const navigate = useNavigate();
  const [fadeStage, setFadeStage] = useState("in"); // 'in' | 'hold' | 'out'

  useEffect(() => {
    // play the whisper sound if desired
    const sound = new Audio(whisperSound);
    sound.play().catch(() => {}); // ignore autoplay restrictions

    // Fade-in → hold (EXTENDED) → fade-out → navigate
    const t1 = setTimeout(() => setFadeStage("hold"), 1500);  // fade-in done (1.5s)
    const t2 = setTimeout(() => setFadeStage("out"), 4500);   // start fade-out (1.5s in + 3s hold)
    const t3 = setTimeout(() => navigate("/home-page"), 6000); // redirect (total 6s)

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      sound.pause();
    };
  }, [navigate]);

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center bg-black transition-opacity duration-1000 ${
        fadeStage === "in" ? "opacity-0 animate-fadeIn"
        : fadeStage === "hold" ? "opacity-100"
        : "opacity-0"
      }`}
    >
      <img
        src={titleImage}
        alt="Simulacrum's Whisper Title"
        // --- CHANGED FOR FULL SCREEN ---
        className="w-full h-full object-contain" 
      />

      {/* local fade animation (optional smooth curve) */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fadeIn {
          animation: fadeIn 1.5s ease-in forwards; // Matched duration to t1
        }
      `}</style>
    </div>
  );
};



