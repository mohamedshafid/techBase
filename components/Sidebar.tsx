"use client";

import React, { Fragment, useState } from "react";
import { ChartNoAxesGantt, GraduationCap, X } from "lucide-react";
import { sidebar } from "@/constants";
import { ActiveSidebar } from "@/components";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Fragment>
      {!isOpen && (
        <button
          className="lg:hidden fixed top-3 left-3 z-50 text-accent cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <ChartNoAxesGantt size={40} />
        </button>
      )}

      <aside
        className={`fixed top-0 left-0 w-80 h-screen px-6 py-8 shadow-lg bg-white z-40 transform transition-transform duration-300 lg:hidden ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center gap-3">
          <GraduationCap size={40} className="text-accent" />
          <h1 className="text-accent text-2xl font-bold">EduFin Manager</h1>
          <button
            className="text-accent ml-auto cursor-pointer"
            onClick={() => setIsOpen(false)}
          >
            <X size={30} />
          </button>
        </div>

        <ul className="mt-10 space-y-5">
          {sidebar.map((item) => (
            <li key={item.title}>
              <ActiveSidebar item={item} />
            </li>
          ))}
        </ul>
      </aside>

      <aside className="fixed top-0 left-0 w-80 h-screen px-6 py-8 shadow-lg hidden lg:block bg-white z-50">
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

      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-30 z-30 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </Fragment>
  );
};

export default Sidebar;
