import React from "react";
import { Link } from "react-router-dom";
import { Users, Smartphone } from "lucide-react";

export const HeroSection: React.FC = () => {
  return (
    <section className="relative py-20 px-4 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/lovable-uploads/a6457d6b-454b-40aa-accd-fac43ae26997.png"
          alt="Biathletes training at shooting range"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/80 to-primary/60"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-primary-foreground mb-6">
          DC4Biathletes
        </h1>
        <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-4xl mx-auto">
          Supporting dual career development for young biathletes - 
          balancing athletic excellence with academic achievement
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            to="/about" 
            className="inline-flex items-center px-8 py-3 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/90 transition-colors"
          >
            <Users className="mr-2 h-5 w-5" />
            Learn More
          </Link>
          <Link 
            to="/app" 
            className="inline-flex items-center px-8 py-3 bg-accent text-accent-foreground rounded-lg hover:bg-accent/90 transition-colors"
          >
            <Smartphone className="mr-2 h-5 w-5" />
            Mobile App
          </Link>
        </div>
      </div>
    </section>
  );
};