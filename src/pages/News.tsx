import React from 'react';
import { Calendar, User, ArrowRight } from 'lucide-react';

const newsArticles = [
  {
    id: 1,
    title: "Gathering Insights from Biathletes at the Biathlon Development Camp in Lillehammer",
    excerpt: "A team of researchers recently travelled to Lillehammer (NOR) to collaborate with the Biathlon Development Camp - a key part of the Erasmus+ funded project DC4Biathletes.",
    date: "2025-01-15",
    category: "Research",
    image: "/lovable-uploads/e8356e16-b869-4484-837a-8bba2f9f567d.png",
    author: "DC4Biathletes Team"
  },
  {
    id: 2,
    title: "DC4Biathletes at the IBU Youth and Junior World Championships in Östersund",
    excerpt: "From 1 to 3 March 2025, the DC4Biathletes project was actively promoted at the IBU Youth and Junior World Championships (YJWCH) in Östersund, Sweden.",
    date: "2025-03-10",
    category: "Events",
    image: "/lovable-uploads/ba54deb2-a7c1-4636-b8b9-5844630c315b.png",
    author: "IBU Academy"
  }
];

export default function News() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 pt-16">
        <div className="max-w-7xl mx-auto px-4 py-16 sm:py-24">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Latest News & Updates
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Stay informed about our program developments, success stories, and upcoming events in the world of biathlon dual careers
            </p>
          </div>
        </div>
      </div>

      {/* News Articles */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid gap-8 lg:gap-12">
          {newsArticles.map((article, index) => (
            <article 
              key={article.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="lg:flex">
                {/* Image */}
                <div className="lg:w-1/2">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-64 lg:h-full object-cover"
                  />
                </div>
                
                {/* Content */}
                <div className="lg:w-1/2 p-8 lg:p-12">
                  {/* Category & Date */}
                  <div className="flex flex-wrap items-center gap-4 mb-6">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                      {article.category}
                    </span>
                    <div className="flex items-center text-gray-500 text-sm">
                      <Calendar className="w-4 h-4 mr-2" />
                      {new Date(article.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </div>
                  </div>

                  {/* Title */}
                  <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 leading-tight">
                    {article.title}
                  </h2>

                  {/* Excerpt */}
                  <p className="text-gray-600 text-lg leading-relaxed mb-6">
                    {article.excerpt}
                  </p>

                  {/* Author & Read More */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <User className="w-5 h-5 text-gray-400 mr-2" />
                      <span className="text-gray-600 text-sm">{article.author}</span>
                    </div>
                    <button className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium group">
                      Read more
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter CTA */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 lg:p-12 text-center">
          <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
            Stay Updated
          </h3>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter to receive the latest news and updates about the DC4Biathletes program
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600"
            />
            <button className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-50 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}