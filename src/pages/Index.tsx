import { GraduationCap, Medal, Users, Clipboard, BookOpen, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import StatisticCard from "@/components/StatisticCard";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#06374f] pt-16">
      {/* Hero Section */}
      <section className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center text-center px-4 animate-fade-in">
        {/* Hero Image Container */}
        <div className="absolute inset-0 w-full h-full">
          <img
            src="/lovable-uploads/5f6366a0-fe59-48da-9b22-ba964da04c01.png"
            alt="Biathlon training session"
            className="w-full h-full object-cover"
          />
          {/* Overlay - removed colored overlay, keeping only a subtle shadow for text readability */}
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
        
        {/* Content */}
        <div className="max-w-4xl mx-auto relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            DC4Biathletes
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Supporting young biathletes in achieving excellence in both sports and education
          </p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg text-primary/80 leading-relaxed">
            Biathlon is a demanding sport requiring exceptional physical and mental resilience. However, 
            many young biathletes struggle to balance their sports careers with academic and professional 
            development, leading to high dropout rates. DC4Biathletes addresses this challenge by providing 
            structured support through education, career planning tools, and research-backed methodologies.
          </p>
        </div>
      </section>

      {/* Project Objectives */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Project Objectives</h2>
            <p className="text-primary/80 max-w-3xl mx-auto">
              The DC4Biathletes project aims to create a strong support system that helps biathletes balance their sports careers with education and future career goals. By analyzing existing dual career programs, the project aims to identify best practices and areas for improvement to ensure equal access to support for all athletes. It also aims to develop educational resources and career planning tools, including interactive digital learning materials, to help biathletes gain self-awareness, build essential skills, and make informed decisions about their future. Additionally, through comprehensive research, the project will enhance knowledge of dual career strategies, equipping young athletes with the tools needed to succeed in both sport and education.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-white/80 backdrop-blur-sm border border-primary/10 shadow-lg">
              <Medal className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold text-primary mb-2">Sports Excellence</h3>
              <p className="text-primary/80">
                Professional coaching and comprehensive support for athletic development
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-white/80 backdrop-blur-sm border border-primary/10 shadow-lg">
              <GraduationCap className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold text-primary mb-2">Educational Resources</h3>
              <p className="text-primary/80">
                Interactive digital learning materials and career planning tools
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-white/80 backdrop-blur-sm border border-primary/10 shadow-lg">
              <BookOpen className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold text-primary mb-2">Research & Development</h3>
              <p className="text-primary/80">
                Evidence-based strategies for successful dual career paths
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Work Packages */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-primary mb-12 text-center">Work Packages</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 bg-[#0698d6]/10 rounded-lg">
              <h3 className="font-bold text-primary mb-2">WP1: Mapping Guidelines</h3>
              <p className="text-primary/80 text-sm">Comprehensive review of EU and national-level dual career policies</p>
            </div>
            <div className="p-6 bg-[#0698d6]/10 rounded-lg">
              <h3 className="font-bold text-primary mb-2">WP2: Research</h3>
              <p className="text-primary/80 text-sm">Studying barriers and challenges faced by young biathletes</p>
            </div>
            <div className="p-6 bg-[#0698d6]/10 rounded-lg">
              <h3 className="font-bold text-primary mb-2">WP3: Status Review</h3>
              <p className="text-primary/80 text-sm">Examining current opportunities and best practices</p>
            </div>
            <div className="p-6 bg-[#0698d6]/10 rounded-lg">
              <h3 className="font-bold text-primary mb-2">WP4: Mobile App</h3>
              <p className="text-primary/80 text-sm">Development of interactive support tools and resources</p>
            </div>
            <div className="p-6 bg-[#0698d6]/10 rounded-lg">
              <h3 className="font-bold text-primary mb-2">WP5: Impact</h3>
              <p className="text-primary/80 text-sm">Communication, dissemination, and sustainability planning</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 text-center bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-primary mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-primary/80 mb-8">
            Join DC4Biathletes and become part of a community that supports your dual career aspirations
          </p>
        </div>
      </section>

      {/* Footer Note */}
      <section className="py-8 px-4 bg-[#1A1F2C] text-white text-sm text-center">
        <div className="max-w-4xl mx-auto">
          <p className="opacity-80">
            "Co-funded by the European Union. Views and opinions expressed are however those of the author(s) only and do not necessarily reflect those of the European Union or the European Education and Culture Executive Agency (EACEA). Neither the European Union nor the granting authority can be held responsible for them."
          </p>
        </div>
      </section>
    </div>
  );
};

export default Index;
