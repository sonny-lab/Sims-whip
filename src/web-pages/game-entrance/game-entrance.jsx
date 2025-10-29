// src/web-pages/game-entrance/game-entrance.jsx
import React, { useRef, useState } from "react";
import BackHomeNav from "../../components/BackHomeNav.jsx";
import drawbridgeVideo from "./assets/drawbridge.mp4";
import wormholeVideo from "./assets/wormhole.mp4";

const GameEntrancePage = () => {
  const drawbridgeRef = useRef(null);
  const wormholeRef = useRef(null);
  const [stage, setStage] = useState("paused");
  const [menuOpen, setMenuOpen] = useState(false);

  const handlePlay = () => {
    if (drawbridgeRef.current) {
      setStage("bridge");
      drawbridgeRef.current.play();
    }
  };

  const handleBridgeEnd = () => {
    setStage("wormhole");
    if (wormholeRef.current) wormholeRef.current.play();
  };

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black text-white flex flex-col items-center justify-center">
      {/* Drawbridge video */}
      <video
        ref={drawbridgeRef}
        src={drawbridgeVideo}
        playsInline
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
          stage === "wormhole" ? "opacity-0" : "opacity-100"
        }`}
        onEnded={handleBridgeEnd}
      />

      {/* Wormhole video */}
      <video
        ref={wormholeRef}
        src={wormholeVideo}
        playsInline
        className={`absolute inset-0 w-full h-full object-cover ${
          stage === "wormhole" ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Dropdown menu – only visible while paused */}
      {stage === "paused" && (
        <div className="absolute bottom-24 left-1/2 -translate-x-1/2 z-20">
          <div className="relative inline-block text-left">
            <button
              onClick={toggleMenu}
              className="px-10 py-4 rounded-lg
                         bg-gradient-to-br from-amber-400 via-amber-500 to-amber-700
                         text-gray-900 font-bold font-serif text-lg tracking-wide
                         border-2 border-amber-600 shadow-2xl
                         hover:from-amber-300 hover:via-amber-400 hover:to-amber-600
                         hover:shadow-amber-500/50 hover:scale-105 
                         active:scale-95 transition-all duration-300
                         backdrop-blur-sm"
            >
              <span className="flex items-center gap-2">
                Menu
                <span className={`transform transition-transform duration-200 ${menuOpen ? 'rotate-180' : ''}`}>
                  ▾
                </span>
              </span>
            </button>

            {menuOpen && (
              <div className="absolute left-0 mt-3 w-56 origin-top 
                            bg-gradient-to-b from-gray-900 to-gray-950
                            border-2 border-amber-600/50 rounded-lg shadow-2xl
                            backdrop-blur-md overflow-hidden
                            animate-in fade-in slide-in-from-top-2 duration-200">
                <div className="py-1">
                  <button
                    onClick={handlePlay}
                    className="block w-full text-left px-6 py-3 
                             text-amber-100 font-semibold
                             hover:bg-amber-600/20 hover:text-amber-300
                             border-b border-gray-800/50
                             transition-all duration-150
                             group"
                  >
                    <span className="flex items-center gap-3">
                      <span className="text-amber-500 group-hover:translate-x-1 transition-transform">→</span>
                      Enter
                    </span>
                  </button>
                  <button
                    onClick={() => (window.location.href = '/home-page')}
                    className="block w-full text-left px-6 py-3 
                             text-amber-100 font-semibold
                             hover:bg-amber-600/20 hover:text-amber-300
                             transition-all duration-150
                             group"
                  >
                    <span className="flex items-center gap-3">
                      <span className="text-amber-500 group-hover:translate-x-1 transition-transform">→</span>
                      Home
                    </span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default GameEntrancePage;


    
      
