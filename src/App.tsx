import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Index from "@/pages/Index";
import Research from "@/pages/Research";
import Partners from "@/pages/Partners";
import AppPage from "@/pages/App";
import Contact from "@/pages/Contact";
import NotFound from "@/pages/NotFound";
import { PrivacyPolicyDialog } from "@/components/PrivacyPolicyDialog";
import "./App.css";

function App() {
  const baseUrl = document.querySelector('base')?.getAttribute('href') || '/';

  return (
    <Router basename={baseUrl}>
      <div className="flex flex-col min-h-screen">
        <Navigation />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/research" element={<Research />} />
            <Route path="/partners" element={<Partners />} />
            <Route path="/app" element={<AppPage />} />
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