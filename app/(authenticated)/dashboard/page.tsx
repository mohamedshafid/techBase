import { DashboardCard, Header } from "@/components";
import {
  BadgeIndianRupee,
  BanknoteArrowDown,
  ChartPie,
  Clock4,
  Users,
} from "lucide-react";
import React from "react";
import { getDashboardData } from "@/services/dashboard";

const Dashboard = async () => {
  const {
    totalStudents,
    totalFeesCollected,
    pendingDues,
    totalExpenses,
    netProfit,
  } = await getDashboardData();



  return (
    <main>
      <Header title="Dashboard" subtitle="Welcome Back, John!" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-10">
        <DashboardCard
          label="Total Students"
          value={totalStudents}
          icon={Users}
          iconColor="blue"
          status="PROFIT"
          valuePercentage={200}
        />
        <DashboardCard
          label="Fees Collected"
          value={totalFeesCollected}
          icon={BadgeIndianRupee}
          iconColor="green"
          status="PROFIT"
          valuePercentage={200}
        />
        <DashboardCard
          label="Pending Dues"
          value={pendingDues}
          icon={Clock4}
          iconColor="yellow"
          status="LOSS"
          valuePercentage={200}
        />
        <DashboardCard
          label="Total Expenses"
          value={totalExpenses}
          icon={BanknoteArrowDown}
          iconColor="red"
          status="LOSS"
          valuePercentage={200}
        />

        <DashboardCard
          label="Net Profit"
          value={netProfit}
          icon={ChartPie}
          iconColor="violet"
          status="PROFIT"
          valuePercentage={200}
        />
      </div>
    </main>
  );
};

export default Dashboard;
