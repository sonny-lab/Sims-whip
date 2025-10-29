// src/web-pages/home-page/home-page.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import cobble from "./assets/cobble.png";
import signpost from "./assets/metal-signpost.png";

const HomePage = () => {
  const navigate = useNavigate();

  const buttons = [
    { name: "Blog",    route: "/blog-page",               x: 121, y: 169, w: 72, h: 26 },
    { name: "Ask Eli", route: "/ask-eli",                 x: 121, y: 249, w: 79, h: 32 },
    { name: "Enter",   route: "/game-entrance",           x: 117, y: 335, w: 70, h: 30 },
    { name: "Intro",   route: "/features-and-logic-page", x: 310, y: 168, w: 57, h: 31 },
    { name: "Ideas",   route: "/development-page",        x: 340, y: 250, w: 60, h: 30 },
    { name: "Store",   route: "/",                        x: 340, y: 335, w: 100, h: 30 }, // TODO: Update coordinates
  ];

  return (
    <div
      className="relative w-screen h-screen overflow-hidden bg-black"
      style={{
        backgroundImage: `url(${cobble})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Signpost container anchored between inner-right lamp posts */}
      <div
        className="absolute"
        style={{
          right: "12%",
          top: "22%",
          width: "auto",
          height: "auto",
        }}
      >
        <div className="relative">
          {/* Signpost image (pointerEvents off so clicks go to buttons) */}
          <img
            src={signpost}
            alt="Signpost"
            className="block pointer-events-none"
            style={{ width: "auto", height: "auto", maxWidth: "none" }}
          />

          {/* Button overlays positioned in signpost's coordinate space */}
          {buttons.map((btn, i) => (
            <button
              key={i}
              onClick={() => navigate(btn.route)}
              className="absolute bg-transparent"
              style={{
                left: `${btn.x}px`,
                top: `${btn.y}px`,
                width: `${btn.w}px`,
                height: `${btn.h}px`,
                border: "none",
                outline: "none",

                
              }}
              aria-label={btn.name}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;



       
