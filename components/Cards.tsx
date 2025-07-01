import clsx from "clsx";
import { MoveUp } from "lucide-react";
import React from "react";

interface StatCardProps {
  label: string;
  value: number;
  change?: {
    type: "profit" | "loss";
    amount: number;
  };
  icon: React.ElementType;
}

const Cards = ({
  label,
  value,
  change,
  icon: Icon,
}: StatCardProps & {
  icon: React.ElementType;
}) => {
  const isProfit = change?.type === "profit";

  return (
    <div className="card">
      <div>
        <p>{label}</p>
      </div>
      <div>
        <h1 className="flex items-center gap-2">
          {value}
          <sub
            className={clsx(
              "flex items-center gap-1",
              isProfit ? "text-green-500" : "text-red-500"
            )}
          >
            ↑{change?.amount}%
          </sub>
        </h1>
      </div>
    </div>
  );
};

export default Cards;
