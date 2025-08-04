import React from "react";

const News = () => {
  return (
    <div className="min-h-screen bg-blue-900 text-white">
      <div className="pt-24 pb-20 px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Latest News</h1>
        
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="bg-white text-black rounded-lg p-6">
            <div className="flex justify-between items-center mb-4">
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded text-sm">Research</span>
              <span className="text-gray-500 text-sm">January 15, 2025</span>
            </div>
            <h2 className="text-2xl font-bold mb-4">
              Gathering Insights from Biathletes at the Biathlon Development Camp in Lillehammer
            </h2>
            <p className="text-gray-700">
              A team of researchers recently travelled to Lillehammer to collaborate with the Biathlon Development Camp.
            </p>
          </div>
          
          <div className="bg-white text-black rounded-lg p-6">
            <div className="flex justify-between items-center mb-4">
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded text-sm">Events</span>
              <span className="text-gray-500 text-sm">March 10, 2025</span>
            </div>
            <h2 className="text-2xl font-bold mb-4">
              DC4Biathletes at the IBU Youth and Junior World Championships
            </h2>
            <p className="text-gray-700">
              The DC4Biathletes project was actively promoted at the Championships in Sweden.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;