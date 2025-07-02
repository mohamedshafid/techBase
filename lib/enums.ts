import { z } from "zod";

export const courseEnum = z.enum([
  "FULL_STACK_DEVELOPMENT",
  "PYTHON_PROGRAMMING",
  "DATA_SCIENCE",
  "UI_UX_DESIGN",
  "DIGITAL_MARKETING",
  "WEB_DEVELOPMENT",
  "MOBILE_APP_DEVELOPMENT",
]);

export const paymentModeEnum = z.enum([
  "CASH",
  "UPI",
  "CARD",
  "BANK_TRANSFER",
  "CHEQUE",
]);

export const expenseCategoryEnum = z.enum([
  "INFRASTRUCTURE",
  "UTILITIES",
  "OFFICE_SUPPLIES",
  "EQUIPMENT",
  "MARKETING",
  "MAINTANANCE",
  "OTHER",
]);

export const collectedByEnum = z.enum(["MANAGER", "HR"]);
