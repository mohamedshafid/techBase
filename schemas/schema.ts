import { z } from "zod";

export const studentSchema = z.object({
  name: z.string().min(1, "Name is required"),
  age: z.coerce.number().refine((val) => isNaN(val), "Age is Required"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  course: z.string().min(1, "Please select a course"),
  courseFee: z.coerce.number().refine((val) => isNaN(val), "Course fee is required"),
  initialPayment: z.coerce.number().refine((val) => isNaN(val), "Initial payment is required"),
  remainingBalance: z.string().min(1, "Remaining balance is required"),
  joinDate: z.string().min(1, "Join date is required"),
  email: z.string().email("Invalid email").optional(),
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
  outStandingBalance: z.coerce.number().refine((val) => isNaN(val), "Outstanding balance is required"),
  paymentAmount: z.coerce.number().refine((val) => isNaN(val), "Payment amount is required"),
  paymentMode: z.string().min(1, "Payment mode is required"),
  paymentDate: z.string().min(1, "Payment date is required"),
  collectedBy: z.string().min(1, "Collected by is required"),
  notes: z.string().optional(),
});

export const expenseSchema = z.object({
  expenseDate: z.string().min(1, "Expense date is required"),
  expenseAmount: z.coerce.number().refine((val) => isNaN(val), "Expense amount is required"),
  expensePurpose: z.string().min(1, "Expense purpose is required"),
  paidTo: z.string().min(1, "Paid to is required"),
  paymentMode: z.string().min(1, "Payment mode is required"),
  category: z.string().min(1, "Category is required"),
  description: z.string().optional(),
});
