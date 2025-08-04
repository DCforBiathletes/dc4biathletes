import React from "react";
import NewsHero from "@/components/news/NewsHero";
import NewsGrid from "@/components/news/NewsGrid";
import NewsletterSection from "@/components/news/NewsletterSection";

import { NewsArticle } from "@/components/news/NewsCard";

const newsArticles: NewsArticle[] = [
  {
    id: 2,
    title: "Gathering Insights from Biathletes at the Biathlon Development Camp in Lillehammer",
    date: "2025-01-15",
    category: "Research",
    excerpt: "A team of researchers recently travelled to Lillehammer (NOR) to collaborate with the Biathlon Development Camp.",
    content: "A team of researchers recently travelled to Lillehammer (NOR) to collaborate with the Biathlon Development Camp.",
    image: "/lovable-uploads/e8356e16-b869-4484-837a-8bba2f9f567d.png",
  },
  {
    id: 1,
    title: "DC4Biathletes at the IBU Youth and Junior World Championships",
    date: "2025-03-10",
    category: "Events",
    excerpt: "From 1 to 3 March 2025, the DC4Biathletes project was actively promoted at the Championships.",
    content: "From 1 to 3 March 2025, the DC4Biathletes project was actively promoted at the Championships.",
    image: "/lovable-uploads/ba54deb2-a7c1-4636-b8b9-5844630c315b.png",
  }
];

const News: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#06374f]">
      <NewsHero 
        title="Latest News & Updates"
        subtitle="Stay informed about our program, success stories, and upcoming events"
        backgroundImage="/lovable-uploads/68663ed8-5147-47c9-9b3a-cb6468b2e6e1.png"
      />
      <NewsGrid articles={newsArticles} />
      <NewsletterSection />
      
    </div>
  );
};

export default News;