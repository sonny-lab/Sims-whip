
// src/main.jsx
import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// --- home-page files ---
import HomePage from "./web-pages/home-page/home-page.jsx";
import Podium from "./web-pages/home-page/podium.jsx";
import Title from "./web-pages/home-page/title.jsx";

// --- features-and-logic-page ---
import FeaturesAndLogicPage from "./web-pages/features-and-logic-page/features-and-logic-page.jsx";

// --- registration-form ---
import RegistrationForm from "./web-pages/registration-form/registration-form.jsx"; // Still imported for its own path

// ... (other imports) ...

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Podium />} />
        <Route path="/home-page" element={<HomePage />} />
        <Route path="/title" element={<Title />} />
        <Route path="/features-and-logic-page" element={<FeaturesAndLogicPage />} />
        
        {/* --- EXISTING ROUTE --- */}
        <Route path="/registration-form" element={<RegistrationForm />} />

        {/* 💥 CORRECT FIX: NEW ROUTES ADDED HERE, USING FEATURESANDLOGICPAGE AS PLACEHOLDER 💥 */}
        <Route path="/features-image-page" element={<FeaturesAndLogicPage />} />
        <Route path="/logic-image-page" element={<FeaturesAndLogicPage />} />
        
        {/* ... (rest of the routes) ... */}

        <Route path="*" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
