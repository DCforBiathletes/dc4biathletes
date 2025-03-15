import { BookOpen, ScrollText, Download, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";

const Research = () => {
  return (
    <div className="min-h-screen pt-16 bg-[#06374f] w-full">
      {/* Hero Section */}
      <section className="relative py-32 w-full">
        {/* Hero Image Container */}
        <div className="absolute inset-0">
          <img
            src="/lovable-uploads/43cf9540-21e1-4ae1-b121-37dbf314f79d.png"
            alt="Research notebook with coffee"
            className="w-full h-full object-cover"
          />
          {/* Overlay - updated to use 15% black transparency instead of 30% */}
          <div className="absolute inset-0 bg-black/15"></div>
        </div>

        <div className="relative z-10 container mx-auto text-center px-4">
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
      <section className="py-16 px-4 bg-white/70 backdrop-blur-sm w-full">
        <div className="container mx-auto text-center">
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
            <Button className="px-8 py-6 text-lg bg-[#0698d6] hover:bg-[#0698d6]/90 text-white font-bold">
              Take the Athletes Survey
            </Button>
          </a>
        </div>
      </section>

      {/* Latest Publications */}
      <section className="py-20 px-4 w-full">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Latest Publications
          </h2>
          
          <Alert className="mb-6 bg-[#0698d6]/10 border-[#0698d6]/20">
            <AlertTitle className="text-white font-bold">Coming Soon</AlertTitle>
            <AlertDescription className="text-white/90">
              Our research publications are currently being finalized and will be available for download shortly.
            </AlertDescription>
          </Alert>
          
          <div className="space-y-6">
            <div className="bg-white/20 backdrop-blur-sm border border-white/10 rounded-lg p-6 shadow-lg">
              <div className="flex items-start gap-4">
                <BookOpen className="w-8 h-8 text-[#0698d6] shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-white">
                    Dual Career Support for Young Biathletes
                  </h3>
                  <p className="text-white/80 mt-2">
                    A comprehensive study on the effectiveness of dual career
                    support programs in biathlon.
                  </p>
                  <div className="mt-4 flex gap-4">
                    <Button variant="outline" size="sm" className="border-white/20 text-white hover:bg-white/10">
                      <Download className="mr-2" /> PDF
                    </Button>
                    <Button variant="outline" size="sm" className="border-white/20 text-white hover:bg-white/10">
                      Cite
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/20 backdrop-blur-sm border border-white/10 rounded-lg p-6 shadow-lg">
              <div className="flex items-start gap-4">
                <ScrollText className="w-8 h-8 text-[#0698d6] shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-white">
                    Academic Performance in Elite Sports
                  </h3>
                  <p className="text-white/80 mt-2">
                    Analysis of academic achievement patterns among high-performance
                    biathletes.
                  </p>
                  <div className="mt-4 flex gap-4">
                    <Button variant="outline" size="sm" className="border-white/20 text-white hover:bg-white/10">
                      <Download className="mr-2" /> PDF
                    </Button>
                    <Button variant="outline" size="sm" className="border-white/20 text-white hover:bg-white/10">
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
      <section className="py-20 px-4 bg-[#0698d6]/5 w-full">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Research Collaboration
          </h2>
          <p className="text-xl text-white/80 mb-8">
            Interested in collaborating on research projects? We're always looking
            for partners in advancing dual career knowledge.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Research;
