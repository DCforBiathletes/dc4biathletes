import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import About from "@/pages/About";
import AppPage from "@/pages/AppPage";
import Contact from "@/pages/Contact";
import News from "@/pages/News";
import NewsDetail from "@/pages/NewsDetail";
import NotFound from "@/pages/NotFound";
import Partners from "@/pages/Partners";
import Research from "@/pages/Research";
import Workshops from "@/pages/Workshops";
import PrivacyPolicy from "@/pages/PrivacyPolicy";

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<AppPage />} />
            <Route path="/research" element={<Research />} />
            <Route path="/partners" element={<Partners />} />
            <Route path="/app" element={<AppPage />} />
            <Route path="/news" element={<News />} />
            <Route path="/news/:slug" element={<NewsDetail />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/workshops" element={<Workshops />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
        <Toaster />
      </div>
    </Router>
  );
}

export default App;