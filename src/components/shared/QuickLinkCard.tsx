import React from "react";
import { Link } from "react-router-dom";
import { LucideIcon } from "lucide-react";

interface QuickLinkCardProps {
  to: string;
  icon: LucideIcon;
  title: string;
  description: string;
}

export const QuickLinkCard: React.FC<QuickLinkCardProps> = ({ to, icon: Icon, title, description }) => {
  return (
    <Link 
      to={to} 
      className="glass-card p-6 hover:shadow-lg transition-shadow group"
    >
      <Icon className="w-8 h-8 text-primary mb-3 group-hover:scale-110 transition-transform" />
      <h3 className="font-semibold text-foreground mb-2">{title}</h3>
      <p className="text-sm text-foreground/70">{description}</p>
    </Link>
  );
};