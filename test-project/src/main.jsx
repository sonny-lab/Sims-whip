// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './index.css';

// Active pages
import HomePage from './web-pages/home-page/home-page.jsx';
import AskEliPage from './web-pages/ask-eli/ask-eli.jsx';
import BlogPage from './web-pages/blog-page/blog-page.jsx';
import DevelopmentPage from './web-pages/development-page/development.jsx';
// import GameEntrancePage from './web-pages/game-entrance/game-entrance.jsx'; // ⟵ disabled for now

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/ask-eli" element={<AskEliPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/development" element={<DevelopmentPage />} />
        {/* <Route path="/game-entrance" element={<GameEntrancePage />} /> */} {/* ⟵ disabled */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);


