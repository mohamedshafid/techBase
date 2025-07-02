import { Cards, SearchSpecific } from "@/components";
import {
  BadgeIndianRupee,
  BanknoteArrowDown,
  ChartPie,
  Clock4,
  Users,
} from "lucide-react";
import React from "react";

const Dashboard = () => {
  return (
    <main>
      <div className="flex-between">
        <div>
          <h1 className="heading">Dashboard</h1>
          <p className="sub-heading">Welcome Back, John!</p>
        </div>

        {/* Search Specific Component */}
        <SearchSpecific />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-10">
        <Cards
          label="Total Students"
          value={"1200"}
          change={{ type: "profit", amount: 200 }}
          iconAndColor={{ icon: Users, color: "blue" }}
        />
        <Cards
          label="Total Courses"
          value={"₹256"}
          change={{ type: "profit", amount: 5 }}
          iconAndColor={{ icon: BadgeIndianRupee, color: "green" }}
        />
        <Cards
          label="Total Revenue"
          value={"₹50000K"}
          change={{ type: "profit", amount: 10000 }}
          iconAndColor={{ icon: Clock4, color: "yellow" }}
        />
        <Cards
          label="Total Expenses"
          value={"₹2.4L"}
          change={{ type: "loss", amount: 5000 }}
          iconAndColor={{ icon: BanknoteArrowDown, color: "red" }}
        />

        <Cards
          label="Net Profit"
          value={"₹3.35L"}
          change={{ type: "profit", amount: 5000 }}
          iconAndColor={{ icon: ChartPie, color: "violet" }}
        />
      </div>
    </main>
  );
};

export default Dashboard;
