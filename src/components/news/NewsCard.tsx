import React from "react";
import { Calendar } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

export interface NewsArticle {
  id: number;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  content: string;
  image: string;
  author: string;
}

interface NewsCardProps {
  article: NewsArticle;
}

const NewsCard: React.FC<NewsCardProps> = ({ article }) => {
  return (
    <Card className="bg-white/80 backdrop-blur-sm border-primary/10 overflow-hidden hover:shadow-xl transition-shadow">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="overflow-hidden">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover rounded-l-lg"
          />
        </div>
        <div className="p-6">
          <div className="flex items-center justify-between mb-2">
            <Badge variant="outline" className="bg-primary/5 text-primary border-primary/20">
              {article.category}
            </Badge>
            <div className="flex items-center text-sm text-primary/60">
              <Calendar className="w-4 h-4 mr-1" />
              {new Date(article.date).toLocaleDateString()}
            </div>
          </div>
          <h2 className="text-2xl font-bold text-primary mb-4">{article.title}</h2>
          <div className="mb-4">
            <p className="text-primary/80">{article.excerpt}</p>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default NewsCard;