'use client'

import React from "react";
import { GraduationCap } from "lucide-react";
import { sidebar } from "@/constants";
import ActiveSidebar from "./ActiveSidebar";

const Sidebar = () => {

  return (
    <aside className="fixed top-0 left-0 w-80 h-screen px-6 py-8  shadow-lg hidden lg:block bg-white z-50">
      <div className="flex items-center gap-3">
        <GraduationCap size={40} className="text-accent" />
        <h1 className="text-accent text-2xl font-bold">EduFin Manager</h1>
      </div>

      <ul className="mt-10 space-y-5">
        {sidebar.map((item) => (
          <li key={item.title}>
            <ActiveSidebar item={item} />
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
