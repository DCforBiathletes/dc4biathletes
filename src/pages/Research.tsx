
import { BookOpen, LineChart, UserSquare2, Download, ArrowRight, ScrollText } from "lucide-react";
import { Button } from "@/components/ui/button";

const Research = () => {
  return (
    <div className="min-h-screen pt-16 bg-gradient-to-b from-white via-muted to-white">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Research & Publications
          </h1>
          <p className="text-xl text-secondary mb-8">
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
            <div className="p-8 glass-card">
              <LineChart className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-xl font-bold text-primary mb-2">
                Performance Analysis
              </h3>
              <p className="text-secondary mb-4">
                Studying the impact of academic commitments on athletic performance
                and vice versa.
              </p>
              <Button variant="outline" className="mt-4">
                Learn More <ArrowRight className="ml-2" />
              </Button>
            </div>
            <div className="p-8 glass-card">
              <UserSquare2 className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-xl font-bold text-primary mb-2">
                Career Development
              </h3>
              <p className="text-secondary mb-4">
                Investigating long-term career outcomes for dual career athletes.
              </p>
              <Button variant="outline" className="mt-4">
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
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg">
              <div className="flex items-start gap-4">
                <BookOpen className="w-8 h-8 text-accent shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-primary">
                    Dual Career Support for Young Biathletes
                  </h3>
                  <p className="text-secondary mt-2">
                    A comprehensive study on the effectiveness of dual career
                    support programs in biathlon.
                  </p>
                  <div className="mt-4 flex gap-4">
                    <Button variant="outline" size="sm">
                      <Download className="mr-2" /> PDF
                    </Button>
                    <Button variant="outline" size="sm">
                      Cite
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg">
              <div className="flex items-start gap-4">
                <ScrollText className="w-8 h-8 text-accent shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-primary">
                    Academic Performance in Elite Sports
                  </h3>
                  <p className="text-secondary mt-2">
                    Analysis of academic achievement patterns among high-performance
                    biathletes.
                  </p>
                  <div className="mt-4 flex gap-4">
                    <Button variant="outline" size="sm">
                      <Download className="mr-2" /> PDF
                    </Button>
                    <Button variant="outline" size="sm">
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
      <section className="py-20 px-4 bg-accent/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-primary mb-6">
            Research Collaboration
          </h2>
          <p className="text-xl text-secondary mb-8">
            Interested in collaborating on research projects? We're always looking
            for partners in advancing dual career knowledge.
          </p>
          <Button className="bg-accent text-white hover:bg-primary text-lg px-8 py-6 rounded-full transition-all duration-300 shadow-lg">
            Contact Research Team <ArrowRight className="ml-2" />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Research;
