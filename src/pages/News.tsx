import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function News() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto pt-24 px-4">
        <h1 className="text-3xl font-bold text-foreground mb-8">Latest News</h1>
        
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">DC4Biathletes Project Officially Launched</CardTitle>
              <p className="text-muted-foreground">August 4, 2025 - DC4Biathletes Team</p>
            </CardHeader>
            <CardContent>
              <p className="text-foreground">The DC4Biathletes project has officially launched.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Gathering Insights from Biathletes at Lillehammer</CardTitle>
              <p className="text-muted-foreground">August 4, 2025 - Research Team</p>
            </CardHeader>
            <CardContent>
              <p className="text-foreground">Researchers travelled to Lillehammer to collaborate with the Biathlon Development Camp.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}