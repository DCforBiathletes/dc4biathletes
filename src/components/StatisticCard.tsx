
import { cn } from "@/lib/utils";

interface StatisticCardProps {
  value: string;
  label: string;
  className?: string;
}

const StatisticCard = ({ value, label, className }: StatisticCardProps) => {
  return (
    <div
      className={cn(
        "p-6 rounded-2xl bg-white/80 backdrop-blur-sm border border-white/20 shadow-lg animate-fade-up",
        className
      )}
    >
      <div className="text-4xl font-bold text-primary mb-2">{value}</div>
      <div className="text-secondary text-sm">{label}</div>
    </div>
  );
};

export default StatisticCard;
