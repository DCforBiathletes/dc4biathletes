import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Home from "@/pages/Home";
import NotFound from "@/pages/NotFound";
import ErrorBoundary from "@/components/ui/ErrorBoundary";
import { 
  LazyAbout, 
  LazyAppPage, 
  LazyContact, 
  LazyNews, 
  LazyNewsDetail,
  LazyPartners, 
  LazyResearch, 
  LazyWorkshops, 
  LazyPrivacyPolicy,
  LazyPageWrapper 
} from "@/components/LazyComponents";

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <div className="min-h-screen flex flex-col">
          <Navigation />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/research" element={
                <LazyPageWrapper>
                  <LazyResearch />
                </LazyPageWrapper>
              } />
              <Route path="/partners" element={
                <LazyPageWrapper>
                  <LazyPartners />
                </LazyPageWrapper>
              } />
              <Route path="/app" element={
                <LazyPageWrapper>
                  <LazyAppPage />
                </LazyPageWrapper>
              } />
              <Route path="/news" element={
                <LazyPageWrapper>
                  <LazyNews />
                </LazyPageWrapper>
              } />
              <Route path="/news/:slug" element={
                <LazyPageWrapper>
                  <LazyNewsDetail />
                </LazyPageWrapper>
              } />
              <Route path="/contact" element={
                <LazyPageWrapper>
                  <LazyContact />
                </LazyPageWrapper>
              } />
              <Route path="/about" element={
                <LazyPageWrapper>
                  <LazyAbout />
                </LazyPageWrapper>
              } />
              <Route path="/workshops" element={
                <LazyPageWrapper>
                  <LazyWorkshops />
                </LazyPageWrapper>
              } />
              <Route path="/privacy-policy" element={
                <LazyPageWrapper>
                  <LazyPrivacyPolicy />
                </LazyPageWrapper>
              } />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
          <Toaster />
        </div>
      </Router>
    </ErrorBoundary>
  );
}

export default App;