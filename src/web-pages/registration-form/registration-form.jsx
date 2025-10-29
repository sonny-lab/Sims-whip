// src/web-pages/registration-form/registration-form.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import BackHomeNav from "../../components/BackHomeNav.jsx";

// --- New assets from user ---
import leftPanelBg from "./assets/1.jpg";
import rightPanelBg from "./assets/2.jpg";

export default function RegistrationForm() {
  const navigate = useNavigate();
  const [debugMode, setDebugMode] = useState(false);

  // Form state
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [dob, setDob] = useState("");
  const [todayDate, setTodayDate] = useState("");

  // --- GIMP Coordinates for inputs on 2.jpg ---
  // --- TODO: Update these placeholder coordinates ---
  const inputs = [
    { name: "fullName",  value: fullName,  setter: setFullName,  type: "text",     x: 50, y: 100, w: 400, h: 40 },
    { name: "email",     value: email,     setter: setEmail,     type: "email",    x: 50, y: 180, w: 400, h: 40 },
    { name: "password",  value: password,  setter: setPassword,  type: "password", x: 50, y: 260, w: 400, h: 40 },
    { name: "username",  value: username,  setter: setUsername,  type: "text",     x: 50, y: 340, w: 400, h: 40 },
    { name: "dob",       value: dob,       setter: setDob,       type: "date",     x: 50, y: 420, w: 400, h: 40 },
    { name: "todayDate", value: todayDate, setter: setTodayDate, type: "date",     x: 50, y: 500, w: 400, h: 40 },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // This is where you would send data to your backend
    console.log("Form Submitted:", { fullName, email, password, username, dob, todayDate });
    alert("Registration successful! (Placeholder)");
    navigate("/home-page");
  };

  // Style for the inputs to make them invisible, just a bottom border
  const inputStyle =
    "absolute bg-transparent text-white border-b-2 border-white/50 font-serif focus:outline-none focus:border-white text-lg";

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-black grid grid-cols-2">
      {/* Back Home Button */}
      <BackHomeNav />

      {/* --- Left Panel (Info) --- */}
      <div
        className="relative w-full h-full"
        style={{
          backgroundImage: `url(${leftPanelBg})`,
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* We use the image itself as the text, per our cinematic style */}
      </div>

      {/* --- Right Panel (Form) --- */}
      <div
        className="relative w-full h-full"
        style={{
          backgroundImage: `url(${rightPanelBg})`,
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <form onSubmit={handleSubmit} className="relative w-full h-full">
          {/* --- Input fields positioned using px --- */}
          {inputs.map((input) => (
            <input
              key={input.name}
              type={input.type}
              name={input.name}
              value={input.value}
              onChange={(e) => input.setter(e.target.value)}
              required
              className={`${inputStyle} ${
                debugMode ? "bg-red-500/40 border border-white" : ""
              }`}
              style={{
                left: `${input.x}px`,
                top: `${input.y}px`,
                width: `${input.w}px`,
                height: `${input.h}px`,
              }}
              aria-label={input.name}
              placeholder="..." // Subtle placeholder
            />
          ))}

          {/* --- Submit Button --- */}
          <button
            type="submit"
            className="absolute bottom-10 right-10 bg-[#251a0f]/80 text-amber-200 text-lg font-serif px-6 py-3 rounded-lg border border-amber-500 hover:bg-amber-200 hover:text-black transition-all duration-300"
          >
            Submit
          </button>
        </form>

        {/* --- Debug Toggle --- */}
        <div className="absolute bottom-4 right-10 z-30">
          <button
            onClick={() => setDebugMode(!debugMode)}
            className="bg-black/60 text-white text-xs px-3 py-1 rounded-md border border-white hover:bg-white hover:text-black transition-all duration-200"
          >
            {debugMode ? "Hide Zones" : "Show Zones"}
          </button>
        </div>
      </div>
    </div>
  );
}

