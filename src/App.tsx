import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

// Minimal working components
const HomePage = () => <div className="min-h-screen flex items-center justify-center bg-[#06374f] text-white text-2xl">Working Test</div>;
const NewsPage = () => <div className="min-h-screen flex items-center justify-center bg-[#06374f] text-white text-2xl">News Page</div>;
const PartnersPage = () => <div className="min-h-screen flex items-center justify-center bg-[#06374f] text-white text-2xl">Partners Page</div>;
const AppPage = () => <div className="min-h-screen flex items-center justify-center bg-[#06374f] text-white text-2xl">App Page</div>;
const NotFoundPage = () => <div className="min-h-screen flex items-center justify-center bg-[#06374f] text-white text-2xl">404 - Page Not Found</div>;

function App() {
  const baseUrl = document.querySelector('base')?.getAttribute('href') || '/';

  return (
    <Router basename={baseUrl}>
      <div className="flex flex-col min-h-screen">
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/partners" element={<PartnersPage />} />
            <Route path="/app" element={<AppPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;