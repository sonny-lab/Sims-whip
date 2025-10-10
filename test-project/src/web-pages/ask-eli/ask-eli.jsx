import React, { useState } from "react";
import eliImage from "./assets/ask-eli.png"; // CONFIRMED CORRECT PATH

const AskEliPage = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => setShowMenu(!showMenu);

  const handleSelection = (option) => {
    setShowMenu(false);
    if (option === "Development") {
      window.location.href = "/development";
    } else if (option === "Game Entrance") {
      window.location.href = "/game-entrance";
    }
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black text-white">
      {/* Background Image */}
      <img
        src={eliImage}
        alt="Ask Eli"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Main Button and Menu Container */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        
        {/* Main Button (was open) */}
        <button
          onClick={toggleMenu}
          className="px-6 py-3 bg-indigo-700/80 hd text-xl font-bold rounded hover:bg-indigo-600 transition duration-300"
        > 
          Ask Eli...
        </button> 
        
        {/* Dropdown Menu Logic */}
        {showMenu && (
          <div className="mt-4 bg-gray-800 p-2 rounded shadow-lg z-10">
            <button
              onClick={() => handleSelection("Development")}
              className="block w-full text-left py-2 px-4 hover:bg-gray-700"
            >
              Development
            </button>
            <button
              onClick={() => handleSelection("Game Entrance")}
              className="block w-full text-left py-2 px-4 hover:bg-gray-700"
            >
              Game Entrance
            </button>
          </div>
        )}

      </div> {/* This closes the Main Button and Menu Container div */}

    </div> // This closes the root div
  ); // This closes the return statement
}; // This closes the component function

export default AskEliPage;

