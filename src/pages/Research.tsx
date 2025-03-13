
import { BookOpen, ScrollText, Download, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Research = () => {
  return (
    <div className="min-h-screen pt-16 bg-[#E5DEFF]">
      {/* Hero Section */}
      <section className="relative py-32">
        {/* Hero Image Container */}
        <div className="absolute inset-0">
          <img
            src="/lovable-uploads/099cd1db-83da-471c-b765-b7d78b2e840f.png"
            alt="Student studying on tablet"
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

      {/* Athletes Survey Section */}
      <section className="py-16 px-4 bg-white/70 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-primary mb-6">
            Participate in Our Research
          </h2>
          <p className="text-xl text-primary/80 mb-8">
            Are you a biathlete? Help us improve dual career support by taking our survey.
          </p>
          <a 
            href="https://insp.qualtrics.com/jfe/form/SV_b7M8Zp7Gxv3f5u6" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block"
          >
            <Button className="px-8 py-6 text-lg bg-[#d3d800] hover:bg-[#d3d800]/90 text-primary font-bold">
              Take the Athletes Survey
            </Button>
          </a>
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
