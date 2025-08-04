import React from "react";

const News = () => {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#06374f" }}>
      <div className="pt-24 pb-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Latest News & Updates
          </h1>
          <p className="text-xl text-white opacity-90 mb-8">
            Stay informed about our program, success stories, and upcoming events
          </p>
        </div>
      </div>
      
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 gap-8">
            <div className="bg-white bg-opacity-80 backdrop-blur-sm border border-opacity-10 rounded-lg overflow-hidden hover:shadow-xl transition-shadow" style={{ borderColor: "#06374f" }}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="overflow-hidden">
                  <img
                    src="/lovable-uploads/e8356e16-b869-4484-837a-8bba2f9f567d.png"
                    alt="Gathering Insights from Biathletes"
                    className="w-full h-full object-cover rounded-l-lg"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="px-2 py-1 text-sm rounded border" style={{ 
                      backgroundColor: "rgba(6, 55, 79, 0.05)", 
                      color: "#06374f", 
                      borderColor: "rgba(6, 55, 79, 0.2)" 
                    }}>
                      Research
                    </span>
                    <div className="flex items-center text-sm" style={{ color: "rgba(6, 55, 79, 0.6)" }}>
                      <span>January 15, 2025</span>
                    </div>
                  </div>
                  <h2 className="text-2xl font-bold mb-4" style={{ color: "#06374f" }}>
                    Gathering Insights from Biathletes at the Biathlon Development Camp in Lillehammer
                  </h2>
                  <div className="mb-4">
                    <p style={{ color: "rgba(6, 55, 79, 0.8)" }}>
                      A team of researchers recently travelled to Lillehammer (NOR) to collaborate with the Biathlon Development Camp.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white bg-opacity-80 backdrop-blur-sm border border-opacity-10 rounded-lg overflow-hidden hover:shadow-xl transition-shadow" style={{ borderColor: "#06374f" }}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="overflow-hidden">
                  <img
                    src="/lovable-uploads/ba54deb2-a7c1-4636-b8b9-5844630c315b.png"
                    alt="DC4Biathletes at Championships"
                    className="w-full h-full object-cover rounded-l-lg"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="px-2 py-1 text-sm rounded border" style={{ 
                      backgroundColor: "rgba(6, 55, 79, 0.05)", 
                      color: "#06374f", 
                      borderColor: "rgba(6, 55, 79, 0.2)" 
                    }}>
                      Events
                    </span>
                    <div className="flex items-center text-sm" style={{ color: "rgba(6, 55, 79, 0.6)" }}>
                      <span>March 10, 2025</span>
                    </div>
                  </div>
                  <h2 className="text-2xl font-bold mb-4" style={{ color: "#06374f" }}>
                    DC4Biathletes at the IBU Youth and Junior World Championships
                  </h2>
                  <div className="mb-4">
                    <p style={{ color: "rgba(6, 55, 79, 0.8)" }}>
                      From 1 to 3 March 2025, the DC4Biathletes project was actively promoted at the Championships.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default News;