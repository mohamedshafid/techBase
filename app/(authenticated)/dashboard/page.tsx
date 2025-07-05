import { DashboardCard, Header, LineChart } from "@/components";
import {
  BadgeIndianRupee,
  BanknoteArrowDown,
  ChartPie,
  Clock4,
  Users,
} from "lucide-react";
import React from "react";
import { getDashboardData } from "@/services/dashboard";
import { FeeTable } from "@/components/Tables/FeeTable";
import { getFeeData } from "@/services/fee";
import { ExpenseTable } from "@/components/Tables/ExpenseTable";
import { getExpenseData } from "@/services/expense";
import { getMonthlyExpenseSummary } from "@/utils/expense.utils";
import { getStudentCountByCourse } from "@/utils/student.utils";
import PieChart from "@/components/Charts/PieChart";


const Dashboard = async () => {
  const {
    totalStudents,
    totalFeesCollected,
    pendingDues,
    totalExpenses,
    netProfit,
    monthlyFeeSummary,
  } = await getDashboardData();

  const { fee } = await getFeeData();
  const { expenses } = await getExpenseData();

  const monthlyExpenseSummary = await getMonthlyExpenseSummary();
  const studentByCourse= await getStudentCountByCourse();
  

  return (
    <main>
      <Header title="Dashboard" subtitle="Welcome Back, Mohamed Hafid!" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-12">
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
      <div className="mt-10 grid grid-cols-1 xl:grid-cols-2 gap-3">
        <LineChart
          feeData={monthlyFeeSummary}
          expenseData={monthlyExpenseSummary}
        />
        <PieChart
          data={{
            labels: studentByCourse.map((item) => item.labels),
            values: studentByCourse.map((item) => item.values),
          }}
        />
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-3">
        <div className="mt-10 bg-white shadow-lg rounded-lg flex flex-col gap-2 flex-grow h-max">
          <div className="flex items-center justify-between  p-3">
            <h1 className="font-bold">Recent Fee Collection</h1>
            <p className="links">View All</p>
          </div>
          <FeeTable
            payments={fee.map((fee) => ({
              studentName: fee.student.name,
              course: fee.student.course,
              date: fee.paymentDate.toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
              }),
              mode: fee.paymentMode,
              amount: fee.paymentAmount,
              collectedBy: fee.collectedBy,
            }))}
            visibleColumns={["studentName", "course", "date", "amount"]}
          />
        </div>
        <div className="mt-10 bg-white shadow-lg rounded-lg flex flex-col gap-2 flex-grow">
          <div className="flex items-center justify-between  p-3">
            <h1 className="font-bold">Recent Expenses</h1>
            <p className="links">View All</p>
          </div>
          <ExpenseTable
            expenses={expenses.map((expense) => ({
              ...expense,
              date: new Date(expense.date).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
              }),
            }))}
            visibleColumns={["purpose", "paidTo", "date", "amount"]}
          />
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
