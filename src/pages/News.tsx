import React from "react";

const News = () => {
  const newsItems = [
    {
      title: "DC4Biathletes Project Officially Launched",
      date: "August 4, 2025",
      author: "DC4Biathletes Team",
      image: "/lovable-uploads/bb790a7d-2299-4e75-acb4-c8d38183773f.png",
      content: "The DC4Biathletes project has officially launched, marking a significant milestone in supporting dual career athletes in biathlon sports. This innovative initiative aims to bridge the gap between athletic excellence and academic achievement."
    },
    {
      title: "Gathering Insights from Biathletes at Lillehammer",
      date: "August 4, 2025", 
      author: "Research Team",
      image: "/lovable-uploads/f0b3e3c3-b86b-4d71-84ec-8735e98ae1aa.png",
      content: "Researchers travelled to Lillehammer to collaborate with the Biathlon Development Camp, gathering valuable insights from athletes about balancing sports and academic careers. The findings will inform our support framework."
    }
  ];

  return (
    <div className="min-h-screen pt-16 bg-[#06374f] w-full">
      <section className="relative py-32 w-full">
        <img 
          src="/lovable-uploads/e1197fe3-2c0e-4bea-bbd4-5d58778a1943.png" 
          alt="News hero background" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
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
              <div key={index} className="bg-white/80 backdrop-blur-sm border border-white/20 rounded-2xl overflow-hidden shadow-lg">
                <div className="p-8 flex gap-6 items-start">
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-[#06374f] mb-4">{item.title}</h2>
                    <p className="text-[#06374f]/70 mb-4 flex items-center gap-2">
                      <span className="inline-block w-2 h-2 bg-[#06374f] rounded-full"></span>
                      {item.date} - {item.author}
                    </p>
                    <p className="text-[#06374f]/80 leading-relaxed">
                      {item.content}
                    </p>
                  </div>
                  <div className="flex-shrink-0 w-48 h-32">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
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