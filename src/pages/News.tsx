function News() {
  return (
    <div className="min-h-screen bg-blue-900">
      <div className="pt-24 pb-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Latest News & Updates
          </h1>
        </div>
      </div>
      
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto space-y-8">
          
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2">
                <img
                  src="/lovable-uploads/e8356e16-b869-4484-837a-8bba2f9f567d.png"
                  alt="Lillehammer camp"
                  className="w-full h-64 md:h-full object-cover"
                />
              </div>
              <div className="md:w-1/2 p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">Research</span>
                  <span className="text-gray-500 text-sm">January 15, 2025</span>
                </div>
                <h2 className="text-xl font-bold text-gray-900 mb-4">
                  Gathering Insights from Biathletes at the Biathlon Development Camp in Lillehammer
                </h2>
                <p className="text-gray-600">
                  A team of researchers recently travelled to Lillehammer (NOR) to collaborate with the Biathlon Development Camp.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2">
                <img
                  src="/lovable-uploads/ba54deb2-a7c1-4636-b8b9-5844630c315b.png"
                  alt="Championships"
                  className="w-full h-64 md:h-full object-cover"
                />
              </div>
              <div className="md:w-1/2 p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">Events</span>
                  <span className="text-gray-500 text-sm">March 10, 2025</span>
                </div>
                <h2 className="text-xl font-bold text-gray-900 mb-4">
                  DC4Biathletes at the IBU Youth and Junior World Championships
                </h2>
                <p className="text-gray-600">
                  From 1 to 3 March 2025, the DC4Biathletes project was actively promoted at the Championships.
                </p>
              </div>
            </div>
          </div>
          
        </div>
      </section>
    </div>
  );
}

export default News;