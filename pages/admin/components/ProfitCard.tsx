import React from "react";
import { LucideIcon } from "lucide-react";

interface ProfitCardProps {
  title: string;
  amount: string;
  icon: LucideIcon;
  bgColor: string;
  textColor: string;
}

export const ProfitCard: React.FC<ProfitCardProps> = ({
  title,
  amount,
  icon: Icon,
  bgColor,
  textColor,
}) => {
  return (
    <div
      className="flex items-center justify-between p-6 rounded-lg"
      style={{ backgroundColor: bgColor }}
    >
      <div>
        <p className="text-sm text-black mb-2">{title}</p>
        <p className="text-xl font-bold" style={{ color: textColor }}>
          {amount}
        </p>
      </div>
      <div className="p-3 rounded-full bg-white/30">
        <Icon className="w-6 h-6" style={{ color: textColor }} />
      </div>
    </div>
  );
};
