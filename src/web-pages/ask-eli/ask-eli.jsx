import React, { useState } from "react";
import { Link } from "react-router-dom"; // 1. Added Link for navigation
import askEliImage from "./assets/ask-eli.png";
import actualEliImage from "./assets/actual-eli.png";

// We no longer need this component, as we're using Link directly
// import BackHomeNav from "../../components/BackHomeNav.jsx";

const AskEliPage = () => {
  const [showActualEli, setShowActualEli] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // 2. State for dropdown

  // 3. Moved "Ask Eli" logic here and added menu closing
  const handleAskEliClick = () => {
    setShowActualEli((p) => !p);
    setIsDropdownOpen(false); // Close dropdown after clicking
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black text-white flex flex-col items-center justify-center">
      <img
        src={showActualEli ? actualEliImage : askEliImage}
        alt="Ask Eli Scene"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* --- Start: New Dropdown Button --- */}
      <div className="relative z-10">
        {/* Dropdown Trigger Button */}
        <button
          onClick={() => setIsDropdownOpen((p) => !p)}
          className="px-8 py-3 bg-black/80 text-white text-lg font-serif rounded-md border border-gray-500 hover:bg-black/90 transition flex items-center space-x-2"
        >
          <span>Menu</span>
          {/* Chevron icon for visual cue */}
          <svg
            className={`w-4 h-4 transition-transform ${
              isDropdownOpen ? "rotate-180" : "rotate-0"
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>

        {/* Dropdown Menu */}
        {isDropdownOpen && (
          <div className="absolute top-full right-0 mt-2 w-48 bg-black/90 rounded-md border border-gray-500 shadow-lg py-1">
            {/* Option 1: Home */}
            <Link
              to="/home-page-2"
              onClick={() => setIsDropdownOpen(false)} // Close on navigation
              className="block w-full text-left px-4 py-2 text-white hover:bg-gray-700/80 transition"
            >
              Home
            </Link>

            {/* Option 2: Ask Eli */}
            <button
              onClick={handleAskEliClick}
              className="block w-full text-left px-4 py-2 text-white hover:bg-gray-700/80 transition"
            >
              Ask Eli
            </button>
          </div>
        )}
      </div>
      {/* --- End: New Dropdown Button --- */}

      {/* The original buttons are now removed and replaced by the dropdown:

        <button ... >
          Ask Eli
        </button>
        <BackHomeNav backTo="/home-page-2" className="z-10" />
      */}
    </div>
  );
};

export default AskEliPage;







