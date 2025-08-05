import React from 'react';

export default function News() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <div className="container mx-auto pt-24 px-4">
        <h1 className="text-3xl font-bold text-slate-900 mb-8">Latest News</h1>
        
        <div className="space-y-6">
          <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-slate-900 mb-2">DC4Biathletes Project Officially Launched</h2>
            <p className="text-slate-600 mb-3">August 4, 2025 - DC4Biathletes Team</p>
            <p className="text-slate-700">The DC4Biathletes project has officially launched.</p>
          </div>

          <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-slate-900 mb-2">Gathering Insights from Biathletes at Lillehammer</h2>
            <p className="text-slate-600 mb-3">August 4, 2025 - Research Team</p>
            <p className="text-slate-700">Researchers travelled to Lillehammer to collaborate with the Biathlon Development Camp.</p>
          </div>
        </div>
      </div>
    </div>
  );
}