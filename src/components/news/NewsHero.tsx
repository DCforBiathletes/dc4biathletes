
import React from "react";

interface NewsHeroProps {
  title: string;
  subtitle: string;
  backgroundImage: string;
}

const NewsHero: React.FC<NewsHeroProps> = ({ title, subtitle, backgroundImage }) => {
  return (
    <section className="pt-24 pb-20 px-4 relative">
      {/* Hero Image Container */}
      <div className="absolute inset-0">
        <img
          src={backgroundImage}
          alt="Athletes posing together"
          className="w-full h-full object-cover object-top"
        />
        {/* Overlay - updated to use 15% black transparency instead of 30% */}
        <div className="absolute inset-0 bg-black/15"></div>
      </div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
          {title}
        </h1>
        <p className="text-xl text-white/90 mb-8">
          {subtitle}
        </p>
      </div>
    </section>
  );
};

export default NewsHero;
