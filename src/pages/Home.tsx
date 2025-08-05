import React from "react";
import { Target, BookOpen, Users, Trophy, Calendar } from "lucide-react";
import { HeroSection } from "@/components/home/HeroSection";
import { FeatureCard } from "@/components/shared/FeatureCard";
import { QuickLinkCard } from "@/components/shared/QuickLinkCard";

const Home = () => {
  const features = [
    {
      icon: Target,
      title: "Dual Career Support",
      description: "Comprehensive support for athletes pursuing both sports and academic excellence"
    },
    {
      icon: BookOpen,
      title: "Research & Development",
      description: "Evidence-based approaches to optimize training and learning"
    },
    {
      icon: Calendar,
      title: "Workshops & Training",
      description: "Specialized workshops and training programs for athletes and coaches"
    }
  ];

  const quickLinks = [
    {
      to: "/research",
      icon: BookOpen,
      title: "Research",
      description: "Latest findings and studies"
    },
    {
      to: "/workshops",
      icon: Calendar,
      title: "Workshops",
      description: "Training programs"
    },
    {
      to: "/partners",
      icon: Users,
      title: "Partners",
      description: "Our collaborators"
    },
    {
      to: "/news",
      icon: Trophy,
      title: "News",
      description: "Latest updates"
    }
  ];

  return (
    <div className="min-h-screen pt-16 bg-background">
      <HeroSection />

      {/* Features Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
            Our Program
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
            Explore Our Resources
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickLinks.map((link, index) => (
              <QuickLinkCard
                key={index}
                to={link.to}
                icon={link.icon}
                title={link.title}
                description={link.description}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;