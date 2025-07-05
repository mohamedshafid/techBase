"use client";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface ActiveSidebarProps {
  item: {
    href: string;
    icon: any;
    title: string;
  };
}

const ActiveSidebar = ({ item }: ActiveSidebarProps) => {
  const pathname = usePathname();
  return (
    <Link
      href={item.href}
      className={clsx(
        "flex items-center gap-2 transition-colors p-3 rounded-lg",
        item.href === pathname
          ? "bg-accent font-bold text-white"
          : "text-gray-800 hover:bg-gray-100"
      )}
    >
      <item.icon size={25} />
      <p className="text-md font-semibold">{item.title}</p>
    </Link>
  );
};

export default ActiveSidebar;
