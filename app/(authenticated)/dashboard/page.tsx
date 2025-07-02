import { Cards, Header } from "@/components";
import { prisma } from "@/lib/prisma";
import {
  BadgeIndianRupee,
  BanknoteArrowDown,
  ChartPie,
  Clock4,
  Users,
} from "lucide-react";
import React from "react";
import {
  getPendingDues,
  getTotalExpenses,
  getTotalFeesCollected,
  getTotalStudents,
} from "@/utils";

const Dashboard = async () => {
  const totalStudents = await getTotalStudents();
  const totalFeesCollected = await getTotalFeesCollected();
  const pendingDues = await getPendingDues();
  const totalExpenses = await getTotalExpenses();

  const netProfit = totalFeesCollected - totalExpenses;

  return (
    <main>
      <Header title="Dashboard" subtitle="Welcome Back, John!" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-10">
        <Cards
          label="Total Students"
          value={`${totalStudents}`}
          change={{ type: "profit", amount: 200 }}
          iconAndColor={{ icon: Users, color: "blue" }}
        />
        <Cards
          label="Fees Collected"
          value={`₹${totalFeesCollected}`}
          change={{ type: "profit", amount: 5 }}
          iconAndColor={{ icon: BadgeIndianRupee, color: "green" }}
        />
        <Cards
          label="Pending Dues"
          value={`₹${pendingDues}`}
          change={{ type: "profit", amount: 10000 }}
          iconAndColor={{ icon: Clock4, color: "yellow" }}
        />
        <Cards
          label="Total Expenses"
          value={`₹${totalExpenses}`}
          change={{ type: "loss", amount: 5000 }}
          iconAndColor={{ icon: BanknoteArrowDown, color: "red" }}
        />

        <Cards
          label="Net Profit"
          value={`₹${netProfit}`}
          change={{ type: "profit", amount: 5000 }}
          iconAndColor={{ icon: ChartPie, color: "violet" }}
        />
      </div>
    </main>
  );
};

export default Dashboard;
