import {
  BanknoteArrowDown,
  ChartColumnDecreasing,
  HandCoins,
  House,
  UserRoundPlus,
} from "lucide-react";

export const sidebar = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: House,
  },
  {
    title: "Student Registration",
    href: "/student-registration",
    icon: UserRoundPlus,
  },
  {
    title: "Fee Collection",
    href: "/fees-collection",
    icon: HandCoins,
  },
  {
    title: "Expenses",
    href: "/expenses",
    icon: BanknoteArrowDown,
  },
  {
    title: "Reports",
    href: "/financial-reports",
    icon: ChartColumnDecreasing,
  },
];
