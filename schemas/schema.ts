import {
  collectedByEnum,
  courseEnum,
  expenseCategoryEnum,
  paymentModeEnum,
} from "@/lib/enums";
import { z } from "zod";

export const studentSchema = z.object({
  name: z.string().trim().min(1, "Name is required"),
  age: z
    .string()
    .refine((val) => /^\d+$/.test(val), {
      message: "Age must be a valid number",
    }),
  phone: z
    .string()
    .trim()
    .regex(/^[0-9]{10}$/, "Phone number must be exactly 10 digits"),
  course: courseEnum,
  courseFee: z
    .string()
    .refine((val) => !isNaN(Number(val)) && Number(val) >= 0, {
      message: "Course fee must be a valid number",
    }),
  initialPayment: z
    .string()
    .refine((val) => !isNaN(Number(val)) && Number(val) >= 0, {
      message: "Initial payment must be a valid number",
    }),
  remainingBalance: z
    .string()
    .refine((val) => !isNaN(Number(val)) && Number(val) >= 0, {
      message: "Remaining balance must be a valid number",
    }),
  joinDate: z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/, "Join date must be in YYYY-MM-DD format"),
  email: z.string().email("Invalid email").optional(),
  address: z.string().optional(),
});

export const financialSchema = z.object({
  fromDate: z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/, "From date must be in YYYY-MM-DD format"),
  toDate: z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/, "To date must be in YYYY-MM-DD format"),
  reportType: z.string().trim().min(1, "Report type is required"),
});

export const feeSchema = z
  .object({
    student: z.string().trim().min(1, "Student is required"),
    course: z.string().trim().min(1, "Course is required"),
    outStandingBalance: z
      .string()
      .refine((val) => !isNaN(Number(val)) && Number(val) >= 0, {
        message: "Outstanding balance must be a valid number",
      }),
    paymentAmount: z
      .string()
      .refine((val) => !isNaN(Number(val)) && Number(val) > 0, {
        message: "Payment amount must be a valid number greater than zero",
      }),
    paymentMode: paymentModeEnum,
    paymentDate: z.string().min(1, "Payment date is required"),
    collectedBy: collectedByEnum,
    notes: z.string().optional(),
  })
  .refine(
    (data) => Number(data.paymentAmount) <= Number(data.outStandingBalance),
    {
      message: "Payment amount cannot exceed outstanding balance",
      path: ["paymentAmount"],
    }
  );

export const expenseSchema = z.object({
  date: z.string().min(1,"Date is Required"),
  amount: z.string().refine((val) => !isNaN(Number(val)) && Number(val) > 0, {
    message: "Amount should be greater than zero",
  }),
  purpose: z.string().trim().min(1, "Purpose is required"),
  paidTo: z.string().trim().min(1, "Paid to is required"),
  paymentMode: paymentModeEnum,
  category: expenseCategoryEnum,
  description: z.string().optional(),
});

export const authSchema = z.object({
  email: z.string().email("Invalid email address").min(1, "Email is required"),
  password: z
    .string()
    .min(6, "Password must be at least 6 characters")
    .refine((val) => !/\s/.test(val), "Password cannot contain spaces"),
});
