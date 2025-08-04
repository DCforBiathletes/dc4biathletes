
import React from "react";
import NewsCard, { NewsArticle } from "./NewsCard";
import NewsPagination from "./NewsPagination";

interface NewsGridProps {
  articles: NewsArticle[];
}

const NewsGrid: React.FC<NewsGridProps> = ({ articles }) => {

  return (
    <section className="py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 gap-8">
          {articles.map((article) => (
            <NewsCard 
              key={article.id} 
              article={article} 
            />
          ))}
        </div>
        
        <NewsPagination articlesCount={articles.length} />
      </div>
    </section>
  );
};

export default NewsGrid;
