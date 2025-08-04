export default function News() {
  return (
    <div className="min-h-screen pt-16 bg-blue-900">
      <section className="py-20 px-4 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-white mb-6">
            Latest News & Updates
          </h1>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto space-y-8">
          <div className="bg-white rounded-lg p-6 shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Gathering Insights from Biathletes at the Biathlon Development Camp in Lillehammer
            </h2>
            <p className="text-gray-600 mb-2">January 15, 2025 | Research</p>
            <p className="text-gray-800">
              A team of researchers recently travelled to Lillehammer to collaborate with the Biathlon Development Camp.
            </p>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              DC4Biathletes at the IBU Youth and Junior World Championships
            </h2>
            <p className="text-gray-600 mb-2">March 10, 2025 | Events</p>
            <p className="text-gray-800">
              The DC4Biathletes project was actively promoted at the Championships in Sweden.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}