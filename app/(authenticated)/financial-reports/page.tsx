import { FinancialForm, Header, Cards } from "@/components";
import { FinancialTable } from "@/components/Tables/FinancialTable";
import { getDashboardData } from "@/services/dashboard";
import { getMonthlyExpenseSummary } from "@/utils/expense.utils";
import { BadgeIndianRupee, BanknoteArrowDown, ChartPie } from "lucide-react";
import React from "react";

const Reports = async () => {
  const { monthlyFeeSummary, totalFeesCollectedByDate } =
    await getDashboardData();
  const monthlyExpenseSummary = await getMonthlyExpenseSummary();

  return (
    <main>
      <Header
        title="Financial Reports"
        subtitle="Analyze your center's financial health and performance"
      />

      <div className="">
        <FinancialForm />
      </div>

      <div className="w-full mt-6 bg-white rounded-lg p-6">
        <FinancialTable
          financial={monthlyFeeSummary.labels.map((label, index) => ({
            month: label,
            fees_collected: monthlyFeeSummary.values[index],
            total_expenses: monthlyExpenseSummary.values[index],
            net_profit: Math.max(
              0,
              monthlyFeeSummary.values[index] -
                monthlyExpenseSummary.values[index]
            ),
          }))}
        />
      </div>
    </main>
  );
};

export default Reports;
