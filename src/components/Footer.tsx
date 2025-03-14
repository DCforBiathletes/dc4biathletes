
import { Facebook, Instagram, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const partners = [
    {
      name: "Institute of Sport",
      logoUrl: "/lovable-uploads/2a462c3e-dc4f-4675-8db5-94b0d34cd2ab.png",
    },
    {
      name: "University of Ljubljana",
      logoUrl: "/lovable-uploads/1fc87e4b-96da-474a-b069-96e25f9605b4.png",
    },
    {
      name: "International Biathlon Union",
      logoUrl: "/lovable-uploads/aa70bb33-4a8b-4d31-afcb-5e18ccd78873.png",
    },
    {
      name: "European Federation of Sport Psychology",
      logoUrl: "/lovable-uploads/8843b318-eb4b-4e98-91b7-9f5f894cd1e3.png",
    },
    {
      name: "Re:vise Hub",
      logoUrl: "/lovable-uploads/77d89634-8212-43fa-9ec8-07b6623bb61e.png",
    }
  ];

  return (
    <footer className="bg-primary/5 border-t border-primary/10">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Partner Logos */}
        <div className="mb-12">
          <p className="text-center text-primary/80 mb-6 text-sm font-medium">Our Partners</p>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {partners.map((partner, index) => (
              <div key={index} className="h-16 flex items-center">
                <img
                  src={partner.logoUrl}
                  alt={`${partner.name} Logo`}
                  className="max-h-full w-auto max-w-[120px] object-contain"
                />
              </div>
            ))}
          </div>
        </div>

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
              href="https://www.facebook.com/profile.php?id=61574055687627&locale=de_DE"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/80 transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="w-6 h-6" />
            </a>
            <a
              href="https://www.instagram.com/dc4biathletes/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/80 transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/company/dc4biathletes-project/"
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
