import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Facebook, Instagram, Linkedin } from "lucide-react";
import { Button } from "./ui/button";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Research", path: "/research" },
    { name: "Partners", path: "/partners" },
    { name: "App", path: "/app" },
    { name: "News", path: "/news" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      <nav className="fixed w-full bg-white/80 backdrop-blur-sm z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center h-16 justify-between">
            <div className="flex items-center gap-4">
              {/* Mobile menu button - on the left */}
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

            {/* Social Media Links - added to the right side */}
            <div className="hidden md:flex space-x-4">
              <a
                href="https://www.facebook.com/profile.php?id=61574055687627&locale=de_DE"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/dc4biathletes/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/dc4biathletes-project/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
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
                
                {/* Social Media Links in mobile menu */}
                <div className="flex space-x-4 px-4 py-2">
                  <a
                    href="https://www.facebook.com/profile.php?id=61574055687627&locale=de_DE"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary/80 transition-colors"
                    aria-label="Facebook"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a
                    href="https://www.instagram.com/dc4biathletes/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary/80 transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/dc4biathletes-project/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary/80 transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
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