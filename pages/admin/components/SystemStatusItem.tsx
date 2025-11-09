import React from "react";

interface SystemStatusItemProps {
  label: string;
  value: string;
}

export const SystemStatusItem: React.FC<SystemStatusItemProps> = ({
  label,
  value,
}) => {
  return (
    <div className="flex items-center justify-between py-2">
      <span className="text-sm text-black font-light">{label}</span>
      <span className="text-sm text-black font-medium">{value}</span>
    </div>
  );
};
