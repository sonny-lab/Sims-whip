// src/web-pages/blog-page/marble-room.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import marbleRoom from "./assets/marble-room.png";
import crystalButtons from "./assets/crystal-buttons.png";

export default function MarbleRoom() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-black">
      {/* Background */}
      <img
        src={marbleRoom}
        alt="Marble Room"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Podium Container */}
      <div
        className="absolute"
        style={{
          width: "498px",
          height: "493px",
          left: "50%", // visually centered on floor
          top: "58%", // adjust to match your apex spot visually
          transform: "translate(-50%, -50%)",
        }}
      >
        <img
          src={crystalButtons}
          alt="Crystal Podium"
          className="absolute top-0 left-0 w-full h-full pointer-events-none select-none"
        />

        {/* BLOG button (invisible clickable zone) */}
        <div
          onClick={() => navigate("/expanded")}
          className="absolute cursor-pointer"
          style={{
            left: "32%",
            top: "15.2%",
            width: "13.6%",
            height: "7.6%",
            backgroundColor: "transparent",
          }}
          aria-label="Blog"
        />

        {/* MENU button trigger */}
        <div
          onClick={() => setOpen(!open)}
          className="absolute cursor-pointer"
          style={{
            left: "50.4%",
            top: "16%",
            width: "15.2%",
            height: "6.2%",
            backgroundColor: "transparent",
          }}
          aria-label="Menu dropdown trigger"
        />

        {/* Dropdown Menu */}
        {open && (
          <div
            className="absolute z-50 flex flex-col text-black font-serif"
            style={{
              left: "50.4%",
              top: "23%",
              width: "15.2%",
              backgroundColor: "rgba(255,255,255,0.9)", // subtle glassy white
              borderRadius: "4px",
              animation: "fadeIn 0.3s ease-in-out",
            }}
          >
            <button
              onClick={() => navigate("/home-page")}
              className="px-3 py-2 text-left hover:bg-black hover:text-white transition-all duration-300"
            >
              Home
            </button>
            <button
              onClick={() => navigate("/comment")}
              className="px-3 py-2 text-left hover:bg-black hover:text-white transition-all duration-300"
            >
              Comment
            </button>
            <button
              onClick={() => navigate("/like")}
              className="px-3 py-2 text-left hover:bg-black hover:text-white transition-all duration-300"
            >
              Like
            </button>
          </div>
        )}
      </div>

      {/* Fade animation */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-5px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}





      






