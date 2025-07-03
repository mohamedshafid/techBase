import clsx from "clsx";
import React from "react";

interface StatCardProps {
  label: string;
  value: string;
  change?: {
    type?: "profit" | "loss";
    amount: number | string;
  };
  iconAndColor?: {
    icon: React.ElementType;
    color: string;
  };
  valueColor?: string;
}

const Cards = ({
  label,
  value,
  change,
  iconAndColor,
  valueColor,
}: StatCardProps) => {
  const isProfit = change?.type === "profit";
  const Icon = iconAndColor?.icon;
  const iconColor = iconAndColor?.color;

  return (
    <div className="card">
      <div className="flex items-center gap-2">
        <p className="text-sm font-semibold text-grayish">{label}</p>
        {Icon && <Icon size={25} style={{ color: iconColor }} />}
      </div>
      <div className="mt-5 ">
        <h1 className="flex items-center gap-2">
          <span
            className="lg:text-2xl font-bold text-xl"
            style={{ color: valueColor }}
          >
            {value}
          </span>
          <sub
            className={clsx(
              "flex items-center gap-1 text-[11px]  font-semibold tracking-wide",
              isProfit ? "text-green-500" : "text-red-500"
            )}
            style={{ color: valueColor }}
          >
            ↑{change?.amount}%
          </sub>
        </h1>
      </div>
    </div>
  );
};

export default Cards;
