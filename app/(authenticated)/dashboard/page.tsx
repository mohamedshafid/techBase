import { Cards, InputField } from "@/components";
import { BellDot, Search } from "lucide-react";
import React from "react";

const Dashboard = () => {
  return (
    <main>
      <div className="flex-between">
        <div>
          <h1 className="heading">Dashboard</h1>
          <p className="sub-heading">Welcome Back, John!</p>
        </div>
        <div className="flex items-center gap-4">
          <BellDot />
          <InputField
            id="search"
            name="search"
            type="text"
            placeholder="Search ..."
            icon={Search}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-10">
        <Cards
          label="Total Students"
          value={1200}
          change={{ type: "profit", amount: 200 }}
          icon={Search}
        />
        <Cards
          label="Total Courses"
          value={50}
          change={{ type: "profit", amount: 5 }}
          icon={Search}
        />
        <Cards
          label="Total Revenue"
          value={50000}
          change={{ type: "profit", amount: 10000 }}
          icon={Search}
        />
        <Cards
          label="Total Expenses"
          value={20000}
          change={{ type: "loss", amount: 5000 }}
          icon={Search}
        />

        <Cards
          label="Net Profit"
          value={30000}
          change={{ type: "profit", amount: 5000 }}
          icon={Search}
        />
      </div>
    </main>
  );
};

export default Dashboard;
