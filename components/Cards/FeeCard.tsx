import React from "react";

interface FeeCardProps {
  label: string;
  value: number;
  icon: React.ElementType;
  color: string;
  info: string;
}

const FeeCard = ({ label, value, icon, color, info }: FeeCardProps) => {
  const Icon = icon;

  return (
    <div className="card">
      <div className="w-full flex items-center justify-between gap-2">
        <p className="text-sm font-semibold text-grayish">{label}</p>
        {Icon && <Icon size={25} style={{ color: color }} />}
      </div>
      <div className="mt-5 ">
        <h1 className="flex items-center gap-2">
          <span className="lg:text-2xl font-bold text-xl">₹{value}</span>
        </h1>
        <p
          className="flex items-center gap-1 text-[11px]  font-semibold tracking-wide"
          style={{ color: color }}
        >
          ↑{info}
        </p>
      </div>
    </div>
  );
};

export default FeeCard;
