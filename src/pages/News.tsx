import React from 'react';

export default function News() {
  return (
    <div className="min-h-screen bg-gray-100 text-black p-8">
      <div className="container mx-auto pt-16">
        <h1 className="text-4xl font-bold text-black mb-8">Latest News</h1>
        
        <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6 shadow-sm">
          <h2 className="text-xl font-semibold text-black mb-2">DC4Biathletes Project Officially Launched</h2>
          <p className="text-gray-600 mb-3">August 4, 2025 - DC4Biathletes Team</p>
          <p className="text-gray-800">The DC4Biathletes project has officially launched.</p>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-black mb-2">Gathering Insights from Biathletes at Lillehammer</h2>
          <p className="text-gray-600 mb-3">August 4, 2025 - Research Team</p>
          <p className="text-gray-800">Researchers travelled to Lillehammer to collaborate with the Biathlon Development Camp.</p>
        </div>
      </div>
    </div>
  );
}