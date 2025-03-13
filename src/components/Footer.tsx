
import { Facebook, Instagram, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-primary/5 border-t border-primary/10">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/">
              <img
                src="./lovable-uploads/70b3aab8-8456-4835-a4f3-616cf7898fd3.png"
                alt="DC4Biathletes Logo"
                className="h-12 w-auto"
              />
            </Link>
          </div>

          {/* Social Media Links */}
          <div className="flex space-x-6">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/80 transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="w-6 h-6" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/80 transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/80 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </a>
          </div>

          {/* Privacy Policy Link */}
          <div>
            <Link
              to="/privacy-policy"
              className="text-primary/80 hover:text-primary transition-colors text-sm"
            >
              Privacy Policy
            </Link>
          </div>
        </div>

        <div className="mt-8 text-center text-primary/60 text-sm">
          © {new Date().getFullYear()} DC4Biathletes. All rights reserved.
        </div>
        
        {/* EU Flag and Funding Statement */}
        <div className="mt-6 flex flex-col items-center space-y-3">
          <img
            src="/lovable-uploads/93b6911e-0b2a-4a2c-bb08-fa878fd487df.png"
            alt="European Union Flag"
            className="h-12 w-auto"
          />
          <p className="text-xs text-primary/60 max-w-2xl text-center">
            Co-funded by the European Union. Views and opinions expressed are however those of the author(s) only and do not necessarily reflect those of the European Union or the European Education and Culture Executive Agency (EACEA). Neither the European Union nor the granting authority can be held responsible for them.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
