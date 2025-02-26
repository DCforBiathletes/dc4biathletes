
import { BookOpen, LineChart, UserSquare2, Download, ArrowRight, ScrollText } from "lucide-react";
import { Button } from "@/components/ui/button";

const Research = () => {
  return (
    <div className="min-h-screen pt-16 bg-[#E5DEFF]">
      {/* Hero Section */}
      <section className="relative py-32">
        {/* Hero Image Container */}
        <div className="absolute inset-0">
          <img
            src="/lovable-uploads/b8b2a470-2d02-4dff-bbfb-8dc75c8f8976.png"
            alt="Athletes celebrating"
            className="w-full h-full object-cover"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-primary/70"></div>
          <div className="absolute inset-0 bg-black/20"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Research & Publications
          </h1>
          <p className="text-xl text-white/90 mb-8">
            Advancing knowledge in dual career development for young athletes through
            evidence-based research.
          </p>
        </div>
      </section>

      {/* Current Research Projects */}
      <section className="py-20 px-4 bg-white/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-primary mb-12 text-center">
            Current Research Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 bg-white/80 backdrop-blur-sm border border-primary/10 rounded-2xl shadow-lg">
              <LineChart className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-xl font-bold text-primary mb-2">
                Performance Analysis
              </h3>
              <p className="text-primary/80 mb-4">
                Studying the impact of academic commitments on athletic performance
                and vice versa.
              </p>
              <Button variant="outline" className="mt-4 border-primary/20 text-primary hover:bg-primary/5">
                Learn More <ArrowRight className="ml-2" />
              </Button>
            </div>
            <div className="p-8 bg-white/80 backdrop-blur-sm border border-primary/10 rounded-2xl shadow-lg">
              <UserSquare2 className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-xl font-bold text-primary mb-2">
                Career Development
              </h3>
              <p className="text-primary/80 mb-4">
                Investigating long-term career outcomes for dual career athletes.
              </p>
              <Button variant="outline" className="mt-4 border-primary/20 text-primary hover:bg-primary/5">
                Learn More <ArrowRight className="ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Publications */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">
            Latest Publications
          </h2>
          <div className="space-y-6">
            <div className="bg-white/80 backdrop-blur-sm border border-primary/10 rounded-lg p-6 shadow-lg">
              <div className="flex items-start gap-4">
                <BookOpen className="w-8 h-8 text-accent shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-primary">
                    Dual Career Support for Young Biathletes
                  </h3>
                  <p className="text-primary/80 mt-2">
                    A comprehensive study on the effectiveness of dual career
                    support programs in biathlon.
                  </p>
                  <div className="mt-4 flex gap-4">
                    <Button variant="outline" size="sm" className="border-primary/20 text-primary hover:bg-primary/5">
                      <Download className="mr-2" /> PDF
                    </Button>
                    <Button variant="outline" size="sm" className="border-primary/20 text-primary hover:bg-primary/5">
                      Cite
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm border border-primary/10 rounded-lg p-6 shadow-lg">
              <div className="flex items-start gap-4">
                <ScrollText className="w-8 h-8 text-accent shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-primary">
                    Academic Performance in Elite Sports
                  </h3>
                  <p className="text-primary/80 mt-2">
                    Analysis of academic achievement patterns among high-performance
                    biathletes.
                  </p>
                  <div className="mt-4 flex gap-4">
                    <Button variant="outline" size="sm" className="border-primary/20 text-primary hover:bg-primary/5">
                      <Download className="mr-2" /> PDF
                    </Button>
                    <Button variant="outline" size="sm" className="border-primary/20 text-primary hover:bg-primary/5">
                      Cite
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Collaboration */}
      <section className="py-20 px-4 bg-primary/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-primary mb-6">
            Research Collaboration
          </h2>
          <p className="text-xl text-primary/80 mb-8">
            Interested in collaborating on research projects? We're always looking
            for partners in advancing dual career knowledge.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Research;
