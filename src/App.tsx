
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Index from "@/pages/Index";
import About from "@/pages/About";
import Research from "@/pages/Research";
import Partners from "@/pages/Partners";
import AppPage from "@/pages/App";
import Workshops from "@/pages/Workshops";
import News from "@/pages/News";
import Contact from "@/pages/Contact";
import NotFound from "@/pages/NotFound";
import { PrivacyPolicyDialog } from "@/components/PrivacyPolicyDialog";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navigation />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/research" element={<Research />} />
            <Route path="/partners" element={<Partners />} />
            <Route path="/app" element={<AppPage />} />
            <Route path="/workshops" element={<Workshops />} />
            <Route path="/news" element={<News />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
        <PrivacyPolicyDialog />
      </div>
    </Router>
  );
}

export default App;
