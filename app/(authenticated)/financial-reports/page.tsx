import { FinancialForm, Header, Cards } from "@/components";
import { BadgeIndianRupee, BanknoteArrowDown, ChartPie } from "lucide-react";
import React from "react";

const Reports = () => {
  return (
    <main>
      <Header
        title="Financial Reports"
        subtitle="Analyze your center's financial health and performance"
      />

      <div className="w-full mt-8 bg-white rounded-lg p-6 flex items-center">
        <FinancialForm />
      </div>

      <div className="w-full mt-6 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
        <Cards
          label="Total Fees Collected"
          value="₹4,85,000"
          valueColor="green"
          iconAndColor={{
            icon: BadgeIndianRupee,
            color: "green",
          }}
          change={{
            amount: "+12% from last month",
          }}
        />
        <Cards
          label="Total Fees Collected"
          value="₹4,85,000"
          valueColor="red"
          iconAndColor={{
            icon: BanknoteArrowDown,
            color: "red",
          }}
          change={{
            amount: "+8% from last month",
          }}
        />
        <Cards
          label="Total Fees Collected"
          value="₹4,85,000"
          valueColor="blue"
          iconAndColor={{
            icon: ChartPie,
            color: "blue",
          }}
          change={{
            amount: "+15% from last month",
          }}
        />
      </div>
    </main>
  );
};

export default Reports;
