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

export const courseOptions = [
  { label: "Select Course", value: "" },
  { label: "Full Stack Development", value: "FULL_STACK_DEVELOPMENT" },
  { label: "Python Programming", value: "PYTHON_PROGRAMMING" },
  { label: "Data Science", value: "DATA_SCIENCE" },
  { label: "UI/UX Design", value: "UI_UX_DESIGN" },
  { label: "Digital Marketing", value: "DIGITAL_MARKETING" },
  { label: "Web Development", value: "WEB_DEVELOPMENT" },
  { label: "Mobile App Development", value: "MOBILE_APP_DEVELOPMENT" },
];

export const paymentModeOptions = [
  { label: "Select Payment Mode", value: "" },
  { label: "Cash", value: "CASH" },
  { label: "UPI", value: "UPI" },
  { label: "Card", value: "CARD" },
  { label: "Bank Transfer", value: "BANK_TRANSFER" },
  { label: "Cheque", value: "CHEQUE" },
];

export const expenseCategoryOptions = [
  { label: "Select Category", value: "" },
  { label: "Infrastructure", value: "INFRASTRUCTURE" },
  { label: "Utilities", value: "UTILITIES" },
  { label: "Office Supplies", value: "OFFICE_SUPPLIES" },
  { label: "Equipment", value: "EQUIPMENT" },
  { label: "Marketing", value: "MARKETING" },
  { label: "Maintenance", value: "MAINTANANCE" },
  { label: "Other", value: "OTHER" },
];

export const collectedByOptions = [
  { label: "Select Collected By", value: "" },
  { label: "Manager", value: "MANAGER" },
  { label: "HR", value: "HR" },
];

