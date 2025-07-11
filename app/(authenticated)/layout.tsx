import { Sidebar } from "@/components";
import React from "react";

const DashBoardLayout = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  return (
      <main className="flex h-screen w-full bg-primary">
        <Sidebar />
        <div className="lg:ml-80 flex-1 px-4 sm:px-8 md:px-12 py-13">
          {children}
        </div>
      </main>
  );
};

export default DashBoardLayout;

