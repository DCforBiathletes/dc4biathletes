export default function News() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 to-blue-800 pt-16">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6 animate-fade-in">
            Latest News & Updates
          </h1>
          <p className="text-xl text-blue-100">
            Stay informed about our program developments and success stories
          </p>
        </div>

        <div className="space-y-8">
          <article className="bg-white rounded-xl shadow-lg overflow-hidden hover-scale">
            <div className="md:flex">
              <div className="md:w-1/3">
                <img
                  src="/lovable-uploads/e8356e16-b869-4484-837a-8bba2f9f567d.png"
                  alt="Lillehammer camp"
                  className="w-full h-48 md:h-full object-cover"
                />
              </div>
              <div className="md:w-2/3 p-8">
                <div className="mb-4">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                    Research
                  </span>
                  <span className="text-gray-500 text-sm ml-4">January 15, 2025</span>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Gathering Insights from Biathletes at the Biathlon Development Camp in Lillehammer
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  A team of researchers recently travelled to Lillehammer (NOR) to collaborate with the Biathlon Development Camp - a key part of the Erasmus+ funded project DC4Biathletes. The aim? To better understand the challenges and opportunities faced by young biathletes who are balancing both sport and education.
                </p>
              </div>
            </div>
          </article>

          <article className="bg-white rounded-xl shadow-lg overflow-hidden hover-scale">
            <div className="md:flex">
              <div className="md:w-1/3">
                <img
                  src="/lovable-uploads/ba54deb2-a7c1-4636-b8b9-5844630c315b.png"
                  alt="Championships"
                  className="w-full h-48 md:h-full object-cover"
                />
              </div>
              <div className="md:w-2/3 p-8">
                <div className="mb-4">
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                    Events
                  </span>
                  <span className="text-gray-500 text-sm ml-4">March 10, 2025</span>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  DC4Biathletes at the IBU Youth and Junior World Championships in Östersund
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  From 1 to 3 March 2025, the DC4Biathletes project was actively promoted at the IBU Youth and Junior World Championships (YJWCH) in Östersund, Sweden. The initiative aimed to raise awareness about the importance of dual careers in biathlon.
                </p>
              </div>
            </div>
          </article>
        </div>

        <div className="mt-16 bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Stay Updated</h3>
          <p className="text-blue-100 mb-6">Subscribe to receive the latest news and updates</p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-lg"
            />
            <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}