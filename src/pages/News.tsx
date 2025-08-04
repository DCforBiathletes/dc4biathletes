import { Book, Users, Trophy } from "lucide-react";

const News = () => {
  return (
    <div className="min-h-screen pt-16 bg-[#06374f]">
      {/* Hero Section */}
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

      {/* News Articles */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto space-y-8">
          <div className="bg-white/80 backdrop-blur-sm border border-primary/10 rounded-lg p-6 shadow-lg">
            <h2 className="text-2xl font-bold text-primary mb-4">
              Gathering Insights from Biathletes at the Biathlon Development Camp in Lillehammer
            </h2>
            <p className="text-primary/80 mb-2">January 15, 2025 | Research</p>
            <p className="text-primary/80">
              A team of researchers recently travelled to Lillehammer to collaborate with the Biathlon Development Camp.
            </p>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm border border-primary/10 rounded-lg p-6 shadow-lg">
            <h2 className="text-2xl font-bold text-primary mb-4">
              DC4Biathletes at the IBU Youth and Junior World Championships
            </h2>
            <p className="text-primary/80 mb-2">March 10, 2025 | Events</p>
            <p className="text-primary/80">
              The DC4Biathletes project was actively promoted at the Championships in Sweden.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default News;