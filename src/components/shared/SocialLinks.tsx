import React from "react";
import { Facebook, Instagram, Linkedin } from "lucide-react";

export const SocialLinks = () => {
  return (
    <div className="flex space-x-4">
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
  );
};