import React from 'react';

const News = () => {
  return (
    <div className="min-h-screen pt-16 bg-[#06374f] w-full">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-white mb-6">Latest News</h1>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="bg-white/10 rounded-lg p-6">
            <h2 className="text-xl font-semibold text-white mb-3">Test Article</h2>
            <p className="text-white/80">This is a test article to verify the build works.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;