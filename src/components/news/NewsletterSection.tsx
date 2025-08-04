import React from "react";
import { Newspaper } from "lucide-react";

const NewsletterSection: React.FC = () => {
  return (
    <section className="py-20 px-4 bg-primary/5">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex items-center justify-center mb-6">
          <Newspaper className="w-12 h-12 text-white" />
        </div>
        <h2 className="text-3xl font-bold text-white mb-4">
          Stay Updated
        </h2>
        <p className="text-lg text-white/80 mb-8">
          Subscribe to our newsletter to receive the latest news and updates
        </p>
        
        <div className="mx-auto max-w-xl glass-card p-6">
          <form 
            action="https://dc4biathletes.us17.list-manage.com/subscribe/post?u=193d42e6c5c9b06a1d2722e36&amp;id=d5ffff5d0a&amp;f_id=0097cce3f0" 
            method="post" 
            target="_blank"
            className="space-y-4"
          >
            <div className="text-white text-sm text-right">
              <span className="text-accent">*</span> indicates required
            </div>
            <div>
              <label htmlFor="mce-EMAIL" className="block text-white mb-2">
                Email Address <span className="text-accent">*</span>
              </label>
              <input 
                type="email" 
                name="EMAIL" 
                className="w-full px-4 py-2 rounded-lg border border-primary/20 focus:outline-none focus:ring-2 focus:ring-accent/20" 
                id="mce-EMAIL" 
                required 
              />
            </div>
            <input type="text" name="b_193d42e6c5c9b06a1d2722e36_d5ffff5d0a" style={{ position: 'absolute', left: '-5000px' }} tabIndex={-1} />
            <div className="flex justify-center">
              <button 
                type="submit" 
                className="bg-accent hover:bg-accent/90 text-white px-6 py-2 rounded-lg transition-colors"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;