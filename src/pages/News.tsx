export default function News() {
  return (
    <div className="min-h-screen bg-blue-900 text-white">
      <div className="pt-24 pb-20 px-4">
        <h1 className="text-4xl font-bold text-center">Latest News & Updates</h1>
        
        <div className="max-w-4xl mx-auto mt-12 space-y-8">
          <div className="bg-white text-black rounded-lg p-6">
            <h2 className="text-xl font-bold mb-2">
              Gathering Insights from Biathletes at the Biathlon Development Camp in Lillehammer
            </h2>
            <p className="text-gray-600 mb-4">January 15, 2025 | Research</p>
            <p>A team of researchers recently travelled to Lillehammer (NOR) to collaborate with the Biathlon Development Camp.</p>
          </div>
          
          <div className="bg-white text-black rounded-lg p-6">
            <h2 className="text-xl font-bold mb-2">
              DC4Biathletes at the IBU Youth and Junior World Championships
            </h2>
            <p className="text-gray-600 mb-4">March 10, 2025 | Events</p>
            <p>From 1 to 3 March 2025, the DC4Biathletes project was actively promoted at the Championships.</p>
          </div>
        </div>
      </div>
    </div>
  );
}