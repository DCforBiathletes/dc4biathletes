
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "About", path: "/about" },
    { name: "Research", path: "/research" },
    { name: "Partners", path: "/partners" },
    { name: "App", path: "/app" },
    { name: "Workshops", path: "/workshops" },
    { name: "News", path: "/news" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      <nav className="fixed w-full bg-white/80 backdrop-blur-sm z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center h-16 gap-4">
            {/* Mobile menu button - now on the left */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X /> : <Menu />}
            </Button>
            
            <Link to="/" className="flex-shrink-0">
              <img
                src="./lovable-uploads/70b3aab8-8456-4835-a4f3-616cf7898fd3.png"
                alt="DC4Biathletes Logo"
                className="h-12 w-auto"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-4 ml-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="text-secondary hover:text-accent transition-colors px-2 py-1"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="md:hidden py-4 absolute left-0 right-0 bg-white/80 backdrop-blur-sm shadow-lg border-t">
              <div className="flex flex-col space-y-2">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className="text-secondary hover:text-accent transition-colors px-4 py-2"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>
      {/* Spacer to prevent content from being hidden behind fixed navigation */}
      <div className="h-16" />
    </>
  );
};

export default Navigation;
