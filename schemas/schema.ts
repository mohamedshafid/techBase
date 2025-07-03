import {
  collectedByEnum,
  courseEnum,
  expenseCategoryEnum,
  paymentModeEnum,
} from "@/lib/enums";
import { z } from "zod";

export const studentSchema = z.object({
  name: z.string().min(1, "Name is required"),
  age: z.string().min(1, "Age is required"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  course: courseEnum,
  courseFee: z.string().min(1, "Course fee is required"),
  initialPayment: z.string().min(1, "Initial payment is required"),
  remainingBalance: z.string().min(1, "Remaining balance is required"),
  joinDate: z.string().min(1, "Join date is required"),
  email: z.string().optional(),
  address: z.string().optional(),
});

export const financialSchema = z.object({
  fromDate: z.string().min(1, "From date is required"),
  toDate: z.string().min(1, "To date is required"),
  reportType: z.string().min(1, "Report type is required"),
});

export const feeSchema = z.object({
  student: z.string().min(1, "Student is required"),
  course: z.string().min(1, "Course is required"),
  outStandingBalance: z.string().min(1, "Outstanding balance is required"),
  paymentAmount: z.string().min(1, "Payment amount is required"),
  paymentMode: paymentModeEnum,
  paymentDate: z.string().min(1, "Payment date is required"),
  collectedBy: collectedByEnum,
  notes: z.string().optional(),
});

export const expenseSchema = z.object({
  date: z.string().min(1, "Expense date is required"),
  amount: z.string().min(1, "Expense amount is required"),
  purpose: z.string().min(1, "Expense purpose is required"),
  paidTo: z.string().min(1, "Paid to is required"),
  paymentMode: paymentModeEnum,
  category: expenseCategoryEnum,
  description: z.string().optional(),
});

export const authSchema=z.object({
  email: z.string().email("Invalid email address").min(1, "Email is required"),
  password: z.string().min(6, "Password must be at least 6 characters"),
})
