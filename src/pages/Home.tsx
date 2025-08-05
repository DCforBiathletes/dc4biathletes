import React from "react";
import { Link } from "react-router-dom";
import { Target, BookOpen, Users, Trophy, Smartphone, Calendar } from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen pt-16 bg-background">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary to-primary/80">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-primary-foreground mb-6">
            DC4Biathletes
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-4xl mx-auto">
            Supporting dual career development for young biathletes - 
            balancing athletic excellence with academic achievement
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/about" 
              className="inline-flex items-center px-8 py-3 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/90 transition-colors"
            >
              <Users className="mr-2 h-5 w-5" />
              Learn More
            </Link>
            <Link 
              to="/app" 
              className="inline-flex items-center px-8 py-3 bg-accent text-accent-foreground rounded-lg hover:bg-accent/90 transition-colors"
            >
              <Smartphone className="mr-2 h-5 w-5" />
              Mobile App
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
            Our Program
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-card p-8 text-center">
              <Target className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-3">Dual Career Support</h3>
              <p className="text-foreground/80">
                Comprehensive support for athletes pursuing both sports and academic excellence
              </p>
            </div>
            <div className="glass-card p-8 text-center">
              <BookOpen className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-3">Research & Development</h3>
              <p className="text-foreground/80">
                Evidence-based approaches to optimize training and learning
              </p>
            </div>
            <div className="glass-card p-8 text-center">
              <Calendar className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-3">Workshops & Training</h3>
              <p className="text-foreground/80">
                Specialized workshops and training programs for athletes and coaches
              </p>
            </div>
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
            <Link 
              to="/research" 
              className="glass-card p-6 hover:shadow-lg transition-shadow group"
            >
              <BookOpen className="w-8 h-8 text-primary mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="font-semibold text-foreground mb-2">Research</h3>
              <p className="text-sm text-foreground/70">Latest findings and studies</p>
            </Link>
            <Link 
              to="/workshops" 
              className="glass-card p-6 hover:shadow-lg transition-shadow group"
            >
              <Calendar className="w-8 h-8 text-primary mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="font-semibold text-foreground mb-2">Workshops</h3>
              <p className="text-sm text-foreground/70">Training programs</p>
            </Link>
            <Link 
              to="/partners" 
              className="glass-card p-6 hover:shadow-lg transition-shadow group"
            >
              <Users className="w-8 h-8 text-primary mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="font-semibold text-foreground mb-2">Partners</h3>
              <p className="text-sm text-foreground/70">Our collaborators</p>
            </Link>
            <Link 
              to="/news" 
              className="glass-card p-6 hover:shadow-lg transition-shadow group"
            >
              <Trophy className="w-8 h-8 text-primary mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="font-semibold text-foreground mb-2">News</h3>
              <p className="text-sm text-foreground/70">Latest updates</p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;