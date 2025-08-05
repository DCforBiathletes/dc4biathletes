import React from 'react';

function News() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="pt-24 px-4">
        <h1 className="text-4xl font-bold text-center mb-8">Latest News</h1>
        
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-bold mb-2">DC4Biathletes Project Officially Launched</h2>
            <p className="text-gray-600 mb-3">August 4, 2025 - DC4Biathletes Team</p>
            <p className="text-gray-800">The DC4Biathletes project has officially launched.</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-bold mb-2">Gathering Insights from Biathletes at Lillehammer</h2>
            <p className="text-gray-600 mb-3">August 4, 2025 - Research Team</p>
            <p className="text-gray-800">Researchers travelled to Lillehammer to collaborate with the Biathlon Development Camp.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default News;