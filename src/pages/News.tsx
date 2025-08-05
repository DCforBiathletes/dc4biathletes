import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

function News() {
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
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-2xl">DC4Biathletes Project Officially Launched</CardTitle>
                <p className="text-slate-600 flex items-center gap-2">
                  <span className="inline-block w-2 h-2 bg-blue-600 rounded-full"></span>
                  August 4, 2025 - DC4Biathletes Team
                </p>
              </CardHeader>
              <CardContent>
                <p className="text-slate-700 leading-relaxed">
                  The DC4Biathletes project has officially launched, marking a significant milestone in supporting dual career athletes in biathlon sports. This innovative initiative aims to bridge the gap between athletic excellence and academic achievement.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-2xl">Gathering Insights from Biathletes at Lillehammer</CardTitle>
                <p className="text-slate-600 flex items-center gap-2">
                  <span className="inline-block w-2 h-2 bg-cyan-500 rounded-full"></span>
                  August 4, 2025 - Research Team
                </p>
              </CardHeader>
              <CardContent>
                <p className="text-slate-700 leading-relaxed">
                  Researchers travelled to Lillehammer to collaborate with the Biathlon Development Camp, gathering valuable insights from athletes about balancing sports and academic careers. The findings will inform our support framework.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}

export default News;