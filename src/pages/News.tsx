import React from 'react';

function News() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-[#06374f] text-white py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Latest News</h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
            Stay updated with the latest developments, research insights, and success stories from the DC4Biathletes project
          </p>
        </div>
      </section>

      {/* News Content */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="bg-white/80 backdrop-blur-sm border border-primary/10 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <h2 className="text-2xl font-bold text-primary mb-4">DC4Biathletes Project Officially Launched</h2>
              <p className="text-primary/70 mb-4 flex items-center gap-2">
                <span className="inline-block w-2 h-2 bg-primary rounded-full"></span>
                August 4, 2025 - DC4Biathletes Team
              </p>
              <p className="text-foreground leading-relaxed">
                The DC4Biathletes project has officially launched, marking a significant milestone in supporting dual career athletes in biathlon sports. This innovative initiative aims to bridge the gap between athletic excellence and academic achievement.
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm border border-primary/10 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <h2 className="text-2xl font-bold text-primary mb-4">Gathering Insights from Biathletes at Lillehammer</h2>
              <p className="text-primary/70 mb-4 flex items-center gap-2">
                <span className="inline-block w-2 h-2 bg-primary/60 rounded-full"></span>
                August 4, 2025 - Research Team
              </p>
              <p className="text-foreground leading-relaxed">
                Researchers travelled to Lillehammer to collaborate with the Biathlon Development Camp, gathering valuable insights from athletes about balancing sports and academic careers. The findings will inform our support framework.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default News;