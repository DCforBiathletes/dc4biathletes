import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, RefreshCw } from "lucide-react";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  const handleRetry = () => {
    window.location.reload();
  };

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#06374f] to-[#082f45] text-white">
      <div className="max-w-md w-full mx-auto text-center p-8 bg-white/10 backdrop-blur-sm rounded-2xl shadow-xl">
        <div className="mb-8">
          <h1 className="text-8xl font-bold mb-4 text-accent">404</h1>
          <h2 className="text-2xl font-semibold mb-2">Page Not Found</h2>
          <p className="text-white/80">
            We couldn't find the page you were looking for: 
            <span className="block font-mono mt-2 p-2 bg-black/20 rounded text-sm overflow-x-auto">
              {location.pathname}
            </span>
          </p>
        </div>
        
        <div className="flex justify-center gap-4">
          <Button 
            onClick={handleGoHome}
            className="bg-accent hover:bg-accent/80 text-white"
          >
            <ChevronLeft className="mr-2 h-4 w-4" /> Back to Home
          </Button>
          
          <Button 
            onClick={handleRetry} 
            variant="outline" 
            className="bg-transparent border-white text-white hover:bg-white/10"
          >
            <RefreshCw className="mr-2 h-4 w-4" /> Retry
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;