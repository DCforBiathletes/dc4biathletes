import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        {/* Minimal Navigation */}
        <nav className="bg-white shadow-sm border-b">
          <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
            <h1 className="text-xl font-bold text-gray-900">DC4Biathletes</h1>
            <div className="flex space-x-4">
              <Link to="/" className="text-gray-700 hover:text-blue-600">Home</Link>
              <Link to="/research" className="text-gray-700 hover:text-blue-600">Research</Link>
              <Link to="/news" className="text-gray-700 hover:text-blue-600">News</Link>
              <Link to="/contact" className="text-gray-700 hover:text-blue-600">Contact</Link>
            </div>
          </div>
        </nav>

        <main>
          <Routes>
            <Route path="/" element={<div className="p-8"><h1 className="text-2xl">Home Page</h1></div>} />
            <Route path="/about" element={<div className="p-8"><h1 className="text-2xl">About Page</h1></div>} />
            <Route path="/research" element={<div className="p-8"><h1 className="text-2xl">Research Page</h1></div>} />
            <Route path="/news" element={<div className="p-8"><h1 className="text-2xl">News Page</h1></div>} />
            <Route path="/partners" element={<div className="p-8"><h1 className="text-2xl">Partners Page</h1></div>} />
            <Route path="/contact" element={<div className="p-8"><h1 className="text-2xl">Contact Page</h1></div>} />
            <Route path="/privacy-policy" element={<div className="p-8"><h1 className="text-2xl">Privacy Policy</h1></div>} />
            <Route path="*" element={<div className="p-8"><h1 className="text-2xl">Page Not Found</h1></div>} />
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