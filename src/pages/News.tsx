import React from "react";

const News = () => {
  const newsItems = [
    {
      title: "DC4Biathletes Project Officially Launched",
      date: "August 4, 2025",
      author: "DC4Biathletes Team",
      content: "The DC4Biathletes project has officially launched, marking a significant milestone in supporting dual career athletes in biathlon sports. This innovative initiative aims to bridge the gap between athletic excellence and academic achievement."
    },
    {
      title: "Gathering Insights from Biathletes at Lillehammer",
      date: "August 4, 2025", 
      author: "Research Team",
      content: "Researchers travelled to Lillehammer to collaborate with the Biathlon Development Camp, gathering valuable insights from athletes about balancing sports and academic careers. The findings will inform our support framework."
    }
  ];

  return (
    <div className="min-h-screen pt-16 bg-[#06374f] w-full">
      <section className="relative py-32 w-full">
        <div className="relative z-10 container mx-auto text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Latest News</h1>
          <p className="text-xl text-white/90 mb-8">
            Stay updated with the latest developments, research insights, and success stories from the DC4Biathletes project
          </p>
        </div>
      </section>

      <section className="py-12 px-4 w-full">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto space-y-8">
            {newsItems.map((item, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm border border-white/20 rounded-2xl p-8 shadow-lg">
                <div className="flex flex-col gap-4">
                  <h2 className="text-2xl font-bold text-[#06374f] mb-4">{item.title}</h2>
                  <p className="text-[#06374f]/70 mb-4 flex items-center gap-2">
                    <span className="inline-block w-2 h-2 bg-[#06374f] rounded-full"></span>
                    {item.date} - {item.author}
                  </p>
                  <p className="text-[#06374f]/80 leading-relaxed">
                    {item.content}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default News;