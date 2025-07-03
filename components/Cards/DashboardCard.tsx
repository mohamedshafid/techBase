import clsx from "clsx";
import React from "react";

interface DashboardCardProps {
  label: string;
  value: number;
  status: "PROFIT" | "LOSS";
  valuePercentage?: number;
  icon: React.ElementType;
  iconColor: string;
}

const DashboardCard = ({
  label,
  value,
  status,
  icon,
  iconColor,
  valuePercentage,
}: DashboardCardProps) => {
  const isProfit = status === "PROFIT";
  const Icon = icon;

  return (
    <div className="dashboardCard">
      <div className="flex items-center gap-2">
        <p className="text-sm font-semibold text-grayish">{label}</p>
        {Icon && <Icon size={25} style={{ color: iconColor }} />}
      </div>
      <div className="mt-5 ">
        <h1 className="flex items-center gap-2">
          <span className="lg:text-2xl font-bold text-xl">{value}</span>
          <sub
            className={clsx(
              "flex items-center gap-1 text-[11px]  font-semibold tracking-wide",
              isProfit ? "text-green-500" : "text-red-500"
            )}
          >
            ↑{valuePercentage}%
          </sub>
        </h1>
      </div>
    </div>
  );
};

export default DashboardCard;
