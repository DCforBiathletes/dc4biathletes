const News = () => {
  return (
    <div className="min-h-screen bg-[#06374f] pt-16">
      {/* Hero Section */}
      <section className="relative py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Latest News
          </h1>
          <p className="text-xl text-white/90 mb-8">
            Stay informed about our program and success stories
          </p>
        </div>
      </section>

      {/* News Articles */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto space-y-8">
          <div className="bg-white rounded-lg p-8 shadow-lg">
            <div className="mb-4">
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded text-sm">Research</span>
              <span className="text-gray-500 text-sm ml-4">January 15, 2025</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Gathering Insights from Biathletes at the Biathlon Development Camp in Lillehammer
            </h2>
            <p className="text-gray-700 leading-relaxed">
              A team of researchers recently travelled to Lillehammer (NOR) to collaborate with the Biathlon Development Camp - a key part of the Erasmus+ funded project DC4Biathletes. The aim? To better understand the challenges and opportunities faced by young biathletes who are balancing both sport and education.
            </p>
          </div>
          
          <div className="bg-white rounded-lg p-8 shadow-lg">
            <div className="mb-4">
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded text-sm">Events</span>
              <span className="text-gray-500 text-sm ml-4">March 10, 2025</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              DC4Biathletes at the IBU Youth and Junior World Championships in Östersund
            </h2>
            <p className="text-gray-700 leading-relaxed">
              From 1 to 3 March 2025, the DC4Biathletes project was actively promoted at the IBU Youth and Junior World Championships (YJWCH) in Östersund, Sweden. The initiative aimed to raise awareness about the importance of dual careers in biathlon.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default News;