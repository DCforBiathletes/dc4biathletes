import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from "@/pages/NotFound";
import News from "@/pages/News";
import Partners from "@/pages/Partners";
import AppPage from "@/pages/AppPage";
import "./App.css";

function App() {
  const baseUrl = document.querySelector('base')?.getAttribute('href') || '/';

  return (
    <Router basename={baseUrl}>
      <div className="flex flex-col min-h-screen">
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<div>Working Test</div>} />
            <Route path="/news" element={<News />} />
            <Route path="/partners" element={<Partners />} />
            <Route path="/app" element={<AppPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;