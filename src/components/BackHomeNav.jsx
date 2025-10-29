// src/components/BackHomeNav.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

const BackHomeNav = ({ backTo = -1, className = "" }) => {
  const nav = useNavigate();

  return (
    <div className={`absolute bottom-6 w-full flex justify-between px-8 ${className}`}>
      {/* Back button */}
      <button
        onClick={() => (typeof backTo === "string" ? nav(backTo) : nav(backTo))}
        className="px-5 py-2 bg-amber-700/80 text-white rounded-md hover:bg-amber-600 transition"
      >
        Back
      </button>

      {/* Home button → redirects to Podium ("/") */}
      <button
        onClick={() => nav("/")}
        className="px-5 py-2 bg-amber-700/80 text-white rounded-md hover:bg-amber-600 transition"
      >
        Home
      </button>
    </div>
  );
};

export default BackHomeNav;


