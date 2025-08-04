import React from 'react';

export default function News() {
  return (
    <div className="pt-24 px-5">
      <h1 className="text-3xl font-bold mb-8">Latest News</h1>
      <div className="mb-5">
        <h2 className="text-xl font-semibold mb-2">DC4Biathletes Project Officially Launched</h2>
        <p className="text-muted-foreground mb-2">August 4, 2025 - DC4Biathletes Team</p>
        <p>The DC4Biathletes project has officially launched.</p>
      </div>
      <div>
        <h2 className="text-xl font-semibold mb-2">Gathering Insights from Biathletes at Lillehammer</h2>
        <p className="text-muted-foreground mb-2">August 4, 2025 - Research Team</p>
        <p>Researchers travelled to Lillehammer to collaborate with the Biathlon Development Camp.</p>
      </div>
    </div>
  );
}