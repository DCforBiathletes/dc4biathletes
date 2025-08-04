const News = () => {
  return (
    <div className="min-h-screen pt-16 bg-[#06374f]">
      <section className="py-20 px-4 bg-[#0698d6]">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Latest News & Updates
          </h1>
          <p className="text-xl text-white/90 mb-8">
            Stay informed about our program, success stories, and upcoming events
          </p>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto space-y-8">
          <div className="bg-white/80 backdrop-blur-sm border border-primary/10 rounded-lg p-6 shadow-lg">
            <div className="flex justify-between items-center mb-4">
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded text-sm">Research</span>
              <span className="text-gray-500 text-sm">January 15, 2025</span>
            </div>
            <h2 className="text-2xl font-bold text-primary mb-4">
              Gathering Insights from Biathletes at the Biathlon Development Camp in Lillehammer
            </h2>
            <p className="text-primary/80">
              A team of researchers recently travelled to Lillehammer (NOR) to collaborate with the Biathlon Development Camp - a key part of the Erasmus+ funded project DC4Biathletes.
            </p>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm border border-primary/10 rounded-lg p-6 shadow-lg">
            <div className="flex justify-between items-center mb-4">
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded text-sm">Events</span>
              <span className="text-gray-500 text-sm">March 10, 2025</span>
            </div>
            <h2 className="text-2xl font-bold text-primary mb-4">
              DC4Biathletes at the IBU Youth and Junior World Championships in Östersund
            </h2>
            <p className="text-primary/80">
              From 1 to 3 March 2025, the DC4Biathletes project was actively promoted at the IBU Youth and Junior World Championships (YJWCH) in Östersund, Sweden.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default News;