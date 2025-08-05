import React from 'react';

export default function News() {
  console.log('News component rendering');
  
  return (
    <div className="min-h-screen p-8" style={{backgroundColor: '#f3f4f6'}}>
      <div className="container mx-auto pt-16">
        <h1 className="text-4xl font-bold mb-8" style={{color: '#000'}}>Latest News</h1>
        
        <div className="mb-6 p-6 rounded-lg" style={{backgroundColor: '#fff', border: '1px solid #e5e7eb'}}>
          <h2 className="text-xl font-semibold mb-2" style={{color: '#000'}}>DC4Biathletes Project Officially Launched</h2>
          <p className="mb-3" style={{color: '#6b7280'}}>August 4, 2025 - DC4Biathletes Team</p>
          <p style={{color: '#374151'}}>The DC4Biathletes project has officially launched.</p>
        </div>

        <div className="p-6 rounded-lg" style={{backgroundColor: '#fff', border: '1px solid #e5e7eb'}}>
          <h2 className="text-xl font-semibold mb-2" style={{color: '#000'}}>Gathering Insights from Biathletes at Lillehammer</h2>
          <p className="mb-3" style={{color: '#6b7280'}}>August 4, 2025 - Research Team</p>
          <p style={{color: '#374151'}}>Researchers travelled to Lillehammer to collaborate with the Biathlon Development Camp.</p>
        </div>
        
        <div className="mt-8 p-4 rounded" style={{backgroundColor: '#fef3c7'}}>
          <p style={{color: '#92400e'}}>Debug: Testing if inline styles work (this should be yellow background)</p>
        </div>
      </div>
    </div>
  );
}