
import React, { useState } from "react";
import { Calendar, ChevronDown, ChevronUp } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  Collapsible, 
  CollapsibleContent, 
  CollapsibleTrigger 
} from "@/components/ui/collapsible";

export interface NewsArticle {
  id: number;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  content: string;
  image: string;
}

interface NewsCardProps {
  article: NewsArticle;
  isOpen: boolean;
  onToggle: (id: number) => void;
}

const NewsCard: React.FC<NewsCardProps> = ({ article, isOpen, onToggle }) => {
  return (
    <Card key={article.id} className="bg-white/80 backdrop-blur-sm border-primary/10 overflow-hidden hover:shadow-xl transition-shadow">
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
          
          <Collapsible open={isOpen} onOpenChange={() => onToggle(article.id)}>
            <div className="mb-4">
              <p className="text-primary/80">{article.excerpt}</p>
            </div>
            
            <div className="flex justify-end mb-2">
              <CollapsibleTrigger asChild>
                <Button variant="ghost" size="sm" className="text-accent flex items-center gap-1">
                  {isOpen ? (
                    <>Read less <ChevronUp className="h-4 w-4" /></>
                  ) : (
                    <>Read more <ChevronDown className="h-4 w-4" /></>
                  )}
                </Button>
              </CollapsibleTrigger>
            </div>
            
            <CollapsibleContent>
              <div className="prose text-primary/80 max-w-none">
                <p className="whitespace-pre-line">{article.content}</p>
              </div>
            </CollapsibleContent>
          </Collapsible>
        </div>
      </div>
    </Card>
  );
};

export default NewsCard;
