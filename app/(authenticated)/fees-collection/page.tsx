import {
  AnimatedWrapper,
  Cards,
  FeeForm,
  Header,
} from "@/components";
import {
  BadgeIndianRupee,
  BellDot,
  BookKey,
  HardDriveDownload,
} from "lucide-react";
import React from "react";

const FeesCollection = () => {
  return (
    <main>
      <Header title="Fee Collection" subtitle="Record student fee payments" />
      <div className="flex gap-5 mt-10 ">
        <div className="w-full max-w-[1120px] p-4 bg-white shadow-md rounded-lg">
          <AnimatedWrapper>
            <FeeForm />
          </AnimatedWrapper>
        </div>
        <div className="hidden lg:flex  flex-1 flex-col gap-5">
          <Cards
            label="Today's Collection"
            value="₹45,500"
            change={{
              amount: "8 payments recorded",
            }}
            iconAndColor={{ icon: BadgeIndianRupee, color: "green" }}
          />
          <Cards
            label="Pending Collections"
            value="₹85,000"
            change={{
              amount: "23 students pending",
            }}
            iconAndColor={{ icon: BadgeIndianRupee, color: "green" }}
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
    </main>
  );
};

export default FeesCollection;
