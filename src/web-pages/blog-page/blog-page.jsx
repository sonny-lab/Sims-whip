import React, { useState } from "react";
import blogImage from "./assets/blog-hero-header.png";

const Blog = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showContent, setShowContent] = useState(false);

  const toggleMenu = () => setShowMenu(!showMenu);

  const handleSelection = (option) => {
    setShowMenu(false);
    if (option === "Development") {
      window.location.href = "/development";
    } else if (option === "Ask Eli") {
      window.location.href = "/ask-eli";
    } else if (option === "Articles") {
      setShowContent(true);
    }
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black text-white">
      {/* Background */}
      <img
        src={blogImage}
        alt="Blog Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Central Button */}
      <div className="absolute inset-0 flex items-center justify-center">
        <button
          onClick={toggleMenu}
          className="px-6 py-3 bg-amber-700/80 hover:bg-amber-600 text-white font-semibold rounded-lg shadow-lg transition"
        >
          Blog
        </button>

        {/* Dropdown */}
        {showMenu && (
          <div className="absolute top-full mt-2 bg-neutral-900/90 rounded-md shadow-lg w-44 border border-amber-700">
            <button
              onClick={() => handleSelection("Development")}
              className="block w-full text-left px-4 py-2 hover:bg-amber-800 rounded-t-md"
            >
              Development
            </button>
            <button
              onClick={() => handleSelection("Ask Eli")}
              className="block w-full text-left px-4 py-2 hover:bg-amber-800"
            >
              Ask Eli
            </button>
            <button
              onClick={() => handleSelection("Articles")}
              className="block w-full text-left px-4 py-2 hover:bg-amber-800 rounded-b-md"
            >
              Articles
            </button>
          </div>
        )}
      </div>

      {/* Articles Modal */}
      {showContent && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/90 backdrop-blur-sm z-20">
          <div className="w-11/12 md:w-3/4 lg:w-1/2 max-h-[80vh] overflow-y-auto p-6 bg-neutral-800/90 border border-amber-700 rounded-xl shadow-2xl">
            <h2 className="text-2xl font-bold mb-4 text-amber-400">
              Blog Articles
            </h2>
            <p className="text-gray-300">
              (Your blog posts or scroll animations will render here.)
            </p>
            <div className="text-center mt-6">
              <button
                onClick={() => setShowContent(false)}
                className="px-4 py-2 bg-amber-700 hover:bg-amber-600 rounded-md transition"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Blog;

