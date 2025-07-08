import { AnimatedWrapper, FeeCard, FeeForm, Header } from "@/components";
import { FeeTable } from "@/components/Tables/FeeTable";
import { getFeeData } from "@/services/fee";
import { getStudentOptions } from "@/services/student";
import {
  BadgeIndianRupee,
  BellDot,
  BookKey,
  HardDriveDownload,
} from "lucide-react";
import React from "react";

const FeesCollection = async () => {
  const studentOptions = await getStudentOptions();
  const { fee, todayFee, pendingFee } = await getFeeData();

  return (
    <main>
      <Header title="Fee Collection" subtitle="Record student fee payments" />

      {/* Responsive layout: stack on mobile, row on large screens */}
      <div className="flex flex-col lg:flex-row gap-5 mt-10">
        {/* Form Section */}
        <div className="w-full lg:w-[70%] p-4 bg-white shadow-md rounded-lg">
          <AnimatedWrapper>
            <FeeForm studentOption={studentOptions} />
          </AnimatedWrapper>
        </div>

        {/* Cards Section (hidden on small screens) */}
        <div className="hidden lg:flex flex-1 flex-col gap-5">
          <FeeCard
            label="Today's Collection"
            value={todayFee}
            icon={BadgeIndianRupee}
            color="green"
            info="8 payments recorded"
          />
          <FeeCard
            label="Pending Collections"
            value={pendingFee}
            icon={BadgeIndianRupee}
            color="orange"
            info="23 students pending"
          />

          <div className="bg-white shadow-md rounded-lg p-5">
            <h1 className="text-xl font-bold text-gray-900">Quick Action</h1>
            <ul className="mt-8 space-y-6 w-full text-center">
              <li className="text-sm font-normal flex items-center gap-2 text-grayish">
                <HardDriveDownload className="text-accent" size={18} />
                Export Collection
              </li>
              <li className="text-sm font-normal flex items-center gap-2 text-grayish">
                <BellDot className="text-yellow-400" size={18} />
                Send Reminder
              </li>
              <li className="text-sm font-normal flex items-center gap-2 text-grayish">
                <BookKey className="text-green-500" size={18} />
                View Reports
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Fee Table Section */}
      <div className="grid grid-cols-1 gap-3">
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

      </div>
    </main>
  );
};

export default FeesCollection;
