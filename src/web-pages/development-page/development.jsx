// src/web-pages/development-page/development.jsx
import React, { useState, useEffect, useRef } from "react"; // 1. Added useRef
import { Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import backgroundImage from "./assets/dev-image.png";

const DevelopmentPage = () => {
  const [files, setFiles] = useState([]);
  const [selectedFile, setSelectedFile] = useState("");
  const [content, setContent] = useState("");
  const [isNavOpen, setIsNavOpen] = useState(false);
  
  const logSelectorRef = useRef(null); // 2. Ref to target the log selector

  // Handler for the "MD Files" option
  const handleMDFilesClick = () => {
    // Focus the log selector dropdown
    if (logSelectorRef.current) {
      logSelectorRef.current.focus();
    }
    setIsNavOpen(false); // Close the navigation dropdown
  };

  // Load markdown dev logs dynamically
  useEffect(() => {
    const importAll = import.meta.glob("./content/*.md", { as: "raw" });
    const entries = Object.keys(importAll).map((path) => {
      const name = path.split("/").pop().replace(".md", "");
      return { name, loader: importAll[path] };
    });
    setFiles(entries);
  }, []);

  // Load selected markdown file
  useEffect(() => {
    if (!selectedFile) return;
    const file = files.find((f) => f.name === selectedFile);
    if (file) file.loader().then((data) => setContent(data));
  }, [selectedFile, files]);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black text-white">
      {/* Background */}
      <img
        src={backgroundImage}
        alt="Development Background"
        className="absolute inset-0 w-full h-full object-contain"
      />

      {/* Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/50 p-6">
        <h1 className="text-4xl font-serif tracking-widest mb-8">
          Development Logs
        </h1>

        {/* Log Selector Dropdown (Now uses the ref) */}
        <select
          ref={logSelectorRef} // 3. Attached the ref here
          className="bg-black/70 border border-gray-500 px-4 py-2 mb-8 rounded-lg text-lg font-serif hover:bg-black/90 focus:outline-none"
          value={selectedFile}
          onChange={(e) => setSelectedFile(e.target.value)}
        >
          <option value="">Select a Log</option>
          {files.map((file) => (
            <option key={file.name} value={file.name}>
              {file.name}
            </option>
          ))}
        </select>

        {/* Markdown Display */}
        {content && (
          <div className="bg-black/60 border border-gray-700 rounded-xl p-6 max-w-3xl w-full h-[60vh] overflow-y-auto text-left">
            <ReactMarkdown>{content}</ReactMarkdown>
          </div>
        )}

        {/* --- New Navigation Dropdown Menu --- */}
        <div className="absolute bottom-10 z-10">
          {/* Dropdown Trigger Button */}
          <button
            onClick={() => setIsNavOpen((p) => !p)}
            className="px-8 py-3 bg-black/80 text-white text-lg font-serif rounded-md border border-gray-500 hover:bg-black/90 transition flex items-center space-x-2"
          >
            <span>Menu</span>
            <svg
              className={`w-4 h-4 transition-transform ${
                isNavOpen ? "rotate-180" : "rotate-0"
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
          {isNavOpen && (
            <div className="absolute bottom-full right-0 mb-2 w-48 bg-black/90 rounded-md border border-gray-500 shadow-lg py-1">
              
              {/* Option 1: MD Files (Button to focus log selector) */}
              <button
                onClick={handleMDFilesClick}
                className="block w-full text-left px-4 py-2 text-white hover:bg-gray-700/80 transition"
              >
                MD Files
              </button>

              {/* Option 2: Home (Link) */}
              <Link
                to="/home-page"
                onClick={() => setIsNavOpen(false)} 
                className="block w-full text-left px-4 py-2 text-white hover:bg-gray-700/80 transition"
              >
                Home
              </Link>
              
              {/* Option 3: Ideas (Placeholder Link) */}
              <Link
                to="/ideas-page" // <-- Placeholder link for the "Ideas" page
                onClick={() => setIsNavOpen(false)}
                className="block w-full text-left px-4 py-2 text-white hover:bg-gray-700/80 transition"
              >
                Ideas
              </Link>
              
            </div>
          )}
        </div>
        {/* --- End: New Navigation Dropdown Menu --- */}
      </div>
    </div>
  );
};

export default DevelopmentPage;




