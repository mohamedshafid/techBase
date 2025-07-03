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
  const { fee } = await getFeeData();

  return (
    <main>
      <Header title="Fee Collection" subtitle="Record student fee payments" />
      <div className="flex gap-5 mt-10 ">
        <div className="w-full max-w-[1120px] p-4 bg-white shadow-md rounded-lg">
          <AnimatedWrapper>
            <FeeForm studentOption={studentOptions} />
          </AnimatedWrapper>
        </div>

        <div className="hidden lg:flex  flex-1 flex-col gap-5">
          <FeeCard
            label="Today's Collection"
            value={1000}
            icon={BadgeIndianRupee}
            color="green"
            info="8 payments recorded"
          />
          <FeeCard
            label="Pending Collections"
            value={1000}
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
      <div className="w-full mt-6 bg-white rounded-lg p-6">
        <FeeTable
          payments={fee.map((fee) => ({
            id: fee.id,
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
        />
      </div>
    </main>
  );
};

export default FeesCollection;
