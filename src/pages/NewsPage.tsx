import { Book, Users, Trophy } from "lucide-react";

const NewsPage = () => {
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
      <section className="py-20 px-4 bg-white/50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 bg-white/80 backdrop-blur-sm border border-primary/10 rounded-2xl shadow-lg">
              <Book className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-xl font-bold text-primary mb-2">Research</h3>
              <h4 className="text-lg font-semibold text-primary mb-2">Gathering Insights from Biathletes at the Biathlon Development Camp in Lillehammer</h4>
              <p className="text-primary/80 text-sm mb-2">January 15, 2025</p>
              <p className="text-primary/80">
                A team of researchers recently travelled to Lillehammer (NOR) to collaborate with the Biathlon Development Camp.
              </p>
            </div>
            <div className="p-8 bg-white/80 backdrop-blur-sm border border-primary/10 rounded-2xl shadow-lg">
              <Users className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-xl font-bold text-primary mb-2">Events</h3>
              <h4 className="text-lg font-semibold text-primary mb-2">DC4Biathletes at the IBU Youth and Junior World Championships</h4>
              <p className="text-primary/80 text-sm mb-2">March 10, 2025</p>
              <p className="text-primary/80">
                The DC4Biathletes project was actively promoted at the Championships in Sweden.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 px-4 bg-primary/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-primary mb-6">
            Stay Updated
          </h2>
          <p className="text-xl text-primary/80 mb-8">
            Subscribe to our newsletter to receive the latest news and updates
          </p>
        </div>
      </section>
    </div>
  );
};

export default NewsPage;