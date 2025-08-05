import React from "react";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({ icon: Icon, title, description }) => {
  return (
    <div className="glass-card p-8 text-center">
      <Icon className="w-12 h-12 text-primary mx-auto mb-4" />
      <h3 className="text-xl font-bold text-foreground mb-3">{title}</h3>
      <p className="text-foreground/80">{description}</p>
    </div>
  );
};