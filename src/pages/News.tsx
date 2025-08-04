import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const News = () => {
  return (
    <div className="min-h-screen pt-16">
      <section className="py-20 px-4 bg-primary">
        <div className="max-w-4xl mx-auto text-center">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
            Latest News & Updates
          </h1>
          <p className="text-xl text-primary-foreground/90">
            Stay informed about the latest developments in the DC4Biathletes project
          </p>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg border">
              <h2 className="text-xl font-bold mb-4">DC4Biathletes Project Officially Launched</h2>
              <p className="text-gray-600 mb-4">2025-01-04</p>
              <p className="mb-4">The DC4Biathletes project has officially launched its innovative dual career program for young biathlon athletes.</p>
              <p className="text-sm text-gray-500">By: DC4Biathletes Team</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg border">
              <h2 className="text-xl font-bold mb-4">Gathering Insights from Biathletes at the Biathlon Development Camp in Lillehammer</h2>
              <p className="text-gray-600 mb-4">2025-01-04</p>
              <p className="mb-4">A team of researchers recently travelled to Lillehammer (NOR) to collaborate with the Biathlon Development Camp.</p>
              <p className="text-sm text-gray-500">By: Research Team</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default News;