import React from "react";
import cobbleWay from "./assets/cobble-way.png";

const HomePageTwo = () => {
  const signButtons = [
    { label: "BLOG", top: "36%", left: "83%" },
    { label: "INTRODUCTION", top: "42%", left: "83%" },
    { label: "DEVELOPMENT", top: "48%", left: "83%" },
    { label: "ASK ELI", top: "54%", left: "83%" },
    { label: "GAME ENTRANCE", top: "60%", left: "83%" },
  ];

  return (
    <div
      className="relative w-screen h-screen overflow-hidden bg-black"
      style={{
        backgroundImage: `url(${cobbleWay})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {signButtons.map((btn, index) => (
        <button
          key={index}
          className="absolute bg-transparent border-none font-serif text-lg tracking-wide cursor-pointer
                     transition-all duration-300
                     hover:drop-shadow-[0_0_15px_rgba(255,215,0,0.9)]
                     hover:scale-105"
          style={{
            top: btn.top,
            left: btn.left,
            transform: "translate(-50%, -50%)",
            color: "transparent",
            padding: "0.5rem 1rem",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = "gold";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = "transparent";
          }}
        >
          {btn.label}
        </button>
      ))}
    </div>
  );
};

export default HomePageTwo;



