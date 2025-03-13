
import { Book, Users, Trophy } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen pt-16 bg-[#06374f]">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-[#0698d6]">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About DC4Biathletes
          </h1>
          <p className="text-xl text-white/90 mb-8">
            Supporting the next generation of biathletes in their pursuit of academic
            and athletic excellence.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4 bg-white/50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-white/80 backdrop-blur-sm border border-primary/10 rounded-2xl shadow-lg">
              <Book className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-xl font-bold text-primary mb-2">Our Mission</h3>
              <p className="text-primary/80">
                To create a supportive environment where young biathletes can excel
                in both their sport and academic pursuits.
              </p>
            </div>
            <div className="p-8 bg-white/80 backdrop-blur-sm border border-primary/10 rounded-2xl shadow-lg">
              <Users className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-xl font-bold text-primary mb-2">Our Community</h3>
              <p className="text-primary/80">
                A network of athletes, educators, and mentors working together to
                support dual career development.
              </p>
            </div>
            <div className="p-8 bg-white/80 backdrop-blur-sm border border-primary/10 rounded-2xl shadow-lg">
              <Trophy className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-xl font-bold text-primary mb-2">Our Goals</h3>
              <p className="text-primary/80">
                To help athletes achieve their full potential in sports while
                maintaining academic excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Program Details */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">
            Program Details
          </h2>
          <div className="space-y-8">
            <div className="bg-white/80 backdrop-blur-sm border border-primary/10 rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-bold text-primary mb-4">
                Academic Support
              </h3>
              <ul className="list-disc list-inside text-primary/80 space-y-2">
                <li>Flexible study schedules</li>
                <li>Personal tutoring</li>
                <li>Online learning resources</li>
                <li>Academic counseling</li>
              </ul>
            </div>
            <div className="bg-white/80 backdrop-blur-sm border border-primary/10 rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-bold text-primary mb-4">
                Athletic Development
              </h3>
              <ul className="list-disc list-inside text-primary/80 space-y-2">
                <li>Professional coaching</li>
                <li>Training facilities access</li>
                <li>Performance monitoring</li>
                <li>Competition support</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-primary/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-primary mb-6">
            Join Our Program
          </h2>
          <p className="text-xl text-primary/80 mb-8">
            Take the first step towards balancing your athletic and academic career
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
