import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from "@/components/ui/toaster";
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { PrivacyPolicyDialog } from '@/components/PrivacyPolicyDialog';

// Pages
import Home from '@/pages/Home';
import About from '@/pages/About';
import Research from '@/pages/Research';
import News from '@/pages/News';
import NewsDetail from '@/pages/NewsDetail';
import Partners from '@/pages/Partners';
import Workshops from '@/pages/Workshops';
import Contact from '@/pages/Contact';
import AppPage from '@/pages/AppPage';
import PrivacyPolicy from '@/pages/PrivacyPolicy';
import NotFound from '@/pages/NotFound';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background">
        <Navigation />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/research" element={<Research />} />
            <Route path="/news" element={<News />} />
            <Route path="/news/:id" element={<NewsDetail />} />
            <Route path="/partners" element={<Partners />} />
            <Route path="/workshops" element={<Workshops />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/app" element={<AppPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
        <PrivacyPolicyDialog />
        <Toaster />
      </div>
    </Router>
  );
}

export default App;