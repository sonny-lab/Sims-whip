// src/web-pages/features-and-logic-page/features-and-logic-page.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import BackHomeNav from "../../components/BackHomeNav.jsx"; 

// --- Assets ---
import backgroundImage from "./assets/vault.jpeg"; 
import featuresScroll from "./assets/objective.png";
import logicScroll from "./assets/sims-logic.png";


export default function FeaturesAndLogicPage() {
  const navigate = useNavigate(); 
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); 
  const [openScroll, setOpenScroll] = useState(null); 

  // Function to open the scroll and close the menu
  const handleScrollOpen = (scrollName) => {
    setIsDropdownOpen(false); 
    setOpenScroll(scrollName); 
  };

  // --- Reusable Scroll Overlay Component (with Full Screen Rendering) ---
  const ScrollOverlay = ({ image, onClose, onNextStep }) => (
    <div
      className="fixed inset-0 w-full h-full bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4" 
      onClick={onClose} 
    >
      <div
        className="relative w-full h-full max-w-6xl max-h-[95vh]" 
        onClick={(e) => e.stopPropagation()} 
      >
        <img
          src={image}
          alt="Scroll"
          className="w-full h-full object-contain" 
        />
        <button
          onClick={onNextStep}
          className="absolute bottom-1/4 left-1/2 -translate-x-1/2 bg-[#251a0f]/80 text-amber-200 text-lg font-serif px-6 py-2 rounded-lg border border-amber-500 hover:bg-amber-200 hover:text-black transition-all duration-300"
        >
          Take your first step
        </button>
      </div>
    </div>
  );

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-black flex items-center justify-center">
      
      {/* --- Full-Screen Background Image: vault.jpeg --- */}
      <img
        src={backgroundImage}
        alt="Vault Background"
        className="absolute inset-0 w-full h-full object-cover" 
      />

      {/* Navigation to go back home */}
      <BackHomeNav />
      
      {/* --- Vault Image --- */}
      <div className="relative w-auto h-auto z-20">
        <img
          src={backgroundImage}
          alt="Features and Logic"
          className="block pointer-events-none"
        />
      </div>

      {/* --- Navigation Dropdown Menu --- */}
      <div className="absolute top-10 right-10 z-30">
        {/* Dropdown Trigger Button */}
        <button
          onClick={() => setIsDropdownOpen((p) => !p)}
          className="px-12 py-5 bg-black/80 text-white text-xl font-serif rounded-md border border-gray-500 hover:bg-black/90 transition flex items-center space-x-3"
        >
          <span>Menu</span>
          {/* Chevron icon */}
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
            
            {/* Option 1: Home - Navigates directly */}
            <button
              onClick={() => {setIsDropdownOpen(false); navigate("/home-page");}}
              className="block w-full text-left px-4 py-2 hover:bg-gray-700/80 transition"
              style={{ color: 'white' }} 
            >
              Home
            </button>

            {/* Option 2: Features - Opens Scroll */}
            <button
              onClick={() => handleScrollOpen("features")} 
              className="block w-full text-left px-4 py-2 hover:bg-gray-700/80 transition"
              style={{ color: 'white' }}
            >
              Features
            </button>
            
            {/* Option 3: Logic - Opens Scroll */}
            <button
              onClick={() => handleScrollOpen("logic")} 
              className="block w-full text-left px-4 py-2 hover:bg-gray-700/80 transition"
              style={{ color: 'white' }}
            >
              Logic
            </button>
          </div>
        )}
      </div>
      {/* --- End: Navigation Dropdown Menu --- */}
      
      {/* --- Render the correct scroll overlay (z-50) --- */}
      {openScroll === "features" && (
        <ScrollOverlay
          image={featuresScroll}
          onClose={() => setOpenScroll(null)}
          onNextStep={() => navigate("/registration-form")} // Original next step
        />
      )}

      {openScroll === "logic" && (
        <ScrollOverlay
          image={logicScroll}
          onClose={() => setOpenScroll(null)}
          onNextStep={() => navigate("/registration-form")} // Original next step
        />
      )}
    </div>
  );
}
