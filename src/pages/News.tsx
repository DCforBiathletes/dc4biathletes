import React from 'react';

export default function News() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 to-blue-600 text-white py-24 pt-32">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Latest News</h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
            Stay updated with the latest developments, research insights, and success stories from the DC4Biathletes project
          </p>
        </div>
        <div className="absolute inset-0 bg-black/10"></div>
      </section>

      {/* News Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="bg-white border border-slate-200 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">DC4Biathletes Project Officially Launched</h2>
              <p className="text-slate-600 mb-4 flex items-center gap-2">
                <span className="inline-block w-2 h-2 bg-blue-600 rounded-full"></span>
                August 4, 2025 - DC4Biathletes Team
              </p>
              <p className="text-slate-700 leading-relaxed">The DC4Biathletes project has officially launched, marking a significant milestone in supporting dual career athletes in biathlon sports.</p>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">Gathering Insights from Biathletes at Lillehammer</h2>
              <p className="text-slate-600 mb-4 flex items-center gap-2">
                <span className="inline-block w-2 h-2 bg-cyan-500 rounded-full"></span>
                August 4, 2025 - Research Team
              </p>
              <p className="text-slate-700 leading-relaxed">Researchers travelled to Lillehammer to collaborate with the Biathlon Development Camp, gathering valuable insights from athletes about balancing sports and academic careers.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}