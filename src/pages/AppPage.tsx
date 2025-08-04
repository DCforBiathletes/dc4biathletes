import { Smartphone, BookOpen, BarChart, Users } from "lucide-react";

const AppPage = () => {
  return (
    <div className="min-h-screen pt-16 bg-[#06374f]">
      {/* Hero Section with Image */}
      <section className="relative py-16">
        {/* Hero Image Container */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=1920&q=80"
            alt="Person working on mobile app development"
            className="w-full h-full object-cover object-center"
          />
          {/* Overlay with transparency updated to 15% */}
          <div className="absolute inset-0 bg-black/15"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
          <div className="inline-block p-2 bg-white/10 text-white rounded-full mb-6">
            Coming Soon!
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            DC4Biathletes Mobile App
          </h1>
          <p className="text-xl text-white/90 mb-8">
            A comprehensive support tool designed specifically for young biathletes managing dual careers
          </p>
        </div>
      </section>

      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/80 backdrop-blur-sm border border-primary/10 rounded-2xl p-8 shadow-lg">
              <BookOpen className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold text-primary mb-2">E-Learning Modules</h3>
              <p className="text-primary/80">
                Access interactive educational content and resources designed for athletes
              </p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm border border-primary/10 rounded-2xl p-8 shadow-lg">
              <BarChart className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold text-primary mb-2">Career Planning Tools</h3>
              <p className="text-primary/80">
                Track your progress and plan your dual career path effectively
              </p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm border border-primary/10 rounded-2xl p-8 shadow-lg">
              <Users className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold text-primary mb-2">Community Support</h3>
              <p className="text-primary/80">
                Connect with fellow athletes and mentors in your journey
              </p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm border border-primary/10 rounded-2xl p-8 shadow-lg">
              <Smartphone className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold text-primary mb-2">Mobile First</h3>
              <p className="text-primary/80">
                Access all features on-the-go with our mobile-optimized platform
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-primary mb-6">Stay Updated</h2>
          <p className="text-primary/80 mb-8">
            Be the first to know when our mobile app launches. Subscribe to our newsletter for updates.
          </p>
        </div>
      </section>
    </div>
  );
};

export default AppPage;