
import { ArrowRight, GraduationCap, Medal, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import StatisticCard from "@/components/StatisticCard";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-accent to-white">
      {/* Hero Section */}
      <section className="h-screen flex items-center justify-center text-center px-4 animate-fade-in">
        <div className="max-w-4xl mx-auto">
          <div className="inline-block px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-secondary mb-6">
            EU-Sponsored Initiative
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-primary mb-6">
            Balance Your
            <span className="text-secondary"> Dual Career</span>
          </h1>
          <p className="text-xl text-secondary mb-8 max-w-2xl mx-auto">
            Supporting young biathletes in achieving excellence in both sports and education
          </p>
          <Button className="bg-primary text-white hover:bg-primary/90 text-lg px-8 py-6 rounded-full transition-all duration-300 shadow-lg">
            Join Program <ArrowRight className="ml-2" />
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">About DC4Biathletes</h2>
            <p className="text-secondary max-w-2xl mx-auto">
              We believe that athletic excellence and academic achievement can go hand in hand.
              Our program provides the support and resources needed to succeed in both arenas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-white/80 backdrop-blur-sm border border-white/20 shadow-lg">
              <Medal className="w-12 h-12 text-secondary mb-4" />
              <h3 className="text-xl font-bold text-primary mb-2">Sports Excellence</h3>
              <p className="text-secondary">
                Professional coaching and training facilities to reach your athletic potential
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-white/80 backdrop-blur-sm border border-white/20 shadow-lg">
              <GraduationCap className="w-12 h-12 text-secondary mb-4" />
              <h3 className="text-xl font-bold text-primary mb-2">Academic Support</h3>
              <p className="text-secondary">
                Flexible education programs and tutoring to maintain academic progress
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-white/80 backdrop-blur-sm border border-white/20 shadow-lg">
              <Users className="w-12 h-12 text-secondary mb-4" />
              <h3 className="text-xl font-bold text-primary mb-2">Community</h3>
              <p className="text-secondary">
                Connect with fellow athletes who understand the dual career journey
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-white to-accent">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <StatisticCard value="200+" label="Active Athletes" />
            <StatisticCard value="95%" label="Program Completion Rate" />
            <StatisticCard value="15+" label="Partner Universities" />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-primary mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-secondary mb-8">
            Join DC4Biathletes and become part of a community that supports your dual career aspirations
          </p>
          <Button className="bg-primary text-white hover:bg-primary/90 text-lg px-8 py-6 rounded-full transition-all duration-300 shadow-lg">
            Apply Now <ArrowRight className="ml-2" />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
