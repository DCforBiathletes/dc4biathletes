import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/research">Research</Link>
          <Link to="/news">News</Link>
          <Link to="/contact">Contact</Link>
        </nav>

        <Routes>
          <Route path="/" element={<div><h1>Home Page</h1></div>} />
          <Route path="/research" element={<div><h1>Research Page</h1></div>} />
          <Route path="/news" element={<div><h1>News Page</h1></div>} />
          <Route path="/contact" element={<div><h1>Contact Page</h1></div>} />
          <Route path="*" element={<div><h1>Page Not Found</h1></div>} />
        </Routes>

        <footer>
          <p>DC4Biathletes 2024</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;