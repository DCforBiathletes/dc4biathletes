import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import existing pages
import Home from './pages/Home';
import About from './pages/About';
import Research from './pages/Research';
import News from './pages/News';
import Partners from './pages/Partners';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        {/* Minimal Navigation */}
        <nav className="bg-white shadow-sm border-b">
          <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
            <h1 className="text-xl font-bold text-gray-900">DC4Biathletes</h1>
            <div className="flex space-x-4">
              <a href="/" className="text-gray-700 hover:text-blue-600">Home</a>
              <a href="/research" className="text-gray-700 hover:text-blue-600">Research</a>
              <a href="/news" className="text-gray-700 hover:text-blue-600">News</a>
              <a href="/contact" className="text-gray-700 hover:text-blue-600">Contact</a>
            </div>
          </div>
        </nav>

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/research" element={<Research />} />
            <Route path="/news" element={<News />} />
            <Route path="/partners" element={<Partners />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        {/* Minimal Footer */}
        <footer className="bg-gray-100 border-t mt-auto">
          <div className="max-w-7xl mx-auto px-4 py-8 text-center">
            <p className="text-gray-600">© 2024 DC4Biathletes. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;