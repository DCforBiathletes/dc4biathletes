import React from "react";

export default function News() {
  return (
    <div className="min-h-screen pt-16 bg-blue-900">
      <div className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-white mb-6">
            Latest News & Updates
          </h1>
        </div>
      </div>

      <div className="py-12 px-4">
        <div className="max-w-6xl mx-auto space-y-8">
          <article className="bg-white rounded-lg p-8 shadow-lg">
            <header className="mb-4">
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded text-sm">Research</span>
              <time className="text-gray-500 text-sm ml-4">January 15, 2025</time>
            </header>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Gathering Insights from Biathletes at the Biathlon Development Camp in Lillehammer
            </h2>
            <p className="text-gray-700">
              A team of researchers recently travelled to Lillehammer (NOR) to collaborate with the Biathlon Development Camp - a key part of the Erasmus+ funded project DC4Biathletes.
            </p>
          </article>
          
          <article className="bg-white rounded-lg p-8 shadow-lg">
            <header className="mb-4">
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded text-sm">Events</span>
              <time className="text-gray-500 text-sm ml-4">March 10, 2025</time>
            </header>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              DC4Biathletes at the IBU Youth and Junior World Championships in Östersund
            </h2>
            <p className="text-gray-700">
              From 1 to 3 March 2025, the DC4Biathletes project was actively promoted at the IBU Youth and Junior World Championships (YJWCH) in Östersund, Sweden.
            </p>
          </article>
        </div>
      </div>
    </div>
  );
}