"use client";

import React, { useState } from "react";
import { GraduationCap } from "lucide-react";
import { sidebar } from "@/constants";
import Link from "next/link";
import clsx from "clsx";

const Sidebar = () => {
  const [isActive, setIsActive] = useState<String>(sidebar[0].title);

  return (
    <aside className="w-80 h-screen px-6 py-8 border shadow-lg hidden lg:block bg-white text-white">
      <div className="flex items-center gap-3">
        <GraduationCap size={40} className="text-accent" />
        <h1 className="text-accent text-2xl font-bold">EduFin Manager</h1>
      </div>
      <ul className="mt-10 space-y-5">
        {sidebar.map((item) => (
          <li key={item.title} onClick={() => setIsActive(item.title)}>
            <Link
              href={item.href}
              className={clsx(
                "flex items-center gap-2 transition-colors p-3 rounded-lg",
                isActive === item.title
                  ? "bg-accent font-bold "
                  : "text-gray-800 "
              )}
            >
              <item.icon size={25} />

              <p className="text-md font-semibold">{item.title}</p>
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
