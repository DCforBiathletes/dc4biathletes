import React from "react";
import { Facebook, Instagram, Linkedin } from "lucide-react";

export const SocialLinks: React.FC = () => {
  const socialLinks = [
    {
      href: "https://www.facebook.com/profile.php?id=61574055687627&locale=de_DE",
      icon: Facebook,
      label: "Facebook"
    },
    {
      href: "https://www.instagram.com/dc4biathletes/",
      icon: Instagram,
      label: "Instagram"
    },
    {
      href: "https://www.linkedin.com/company/dc4biathletes-project/",
      icon: Linkedin,
      label: "LinkedIn"
    }
  ];

  return (
    <div className="flex space-x-4">
      {socialLinks.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:text-primary/80 transition-colors"
          aria-label={link.label}
        >
          <link.icon className="w-5 h-5" />
        </a>
      ))}
    </div>
  );
};