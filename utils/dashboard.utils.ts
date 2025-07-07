"use server";

import { prisma } from "@/lib/prisma";

export const getTotalFeesCollected = async () => {
  const [initialPaymentsSum, feePaymentsSum] = await Promise.all([
    prisma.student.aggregate({ _sum: { initialPayment: true } }),
    prisma.fee.aggregate({ _sum: { paymentAmount: true } }),
  ]);

  return (
    (initialPaymentsSum._sum.initialPayment ?? 0) +
    (feePaymentsSum._sum.paymentAmount ?? 0)
  );
};

export const getTotalFeesCollectedByDate = async (
  startDate: Date,
  endDate: Date
) => {
  const fees = await prisma.fee.aggregate({
    _sum: { paymentAmount: true },
    where: {
      paymentDate: {
        gte: startDate,
        lt: endDate,
      },
    },
  });
  return fees._sum.paymentAmount ?? 0;
};

export const getTotalStudents = async () => {
  return await prisma.student.count();
};

export const getPendingDues = async () => {
  const pendingDues = await prisma.student.aggregate({
    _sum: { remainingBalance: true },
  });
  return pendingDues._sum.remainingBalance ?? 0;
};

export const getTotalExpenses = async () => {
  const totalExpenses = await prisma.expense.aggregate({
    _sum: { amount: true },
  });

  return totalExpenses._sum.amount ?? 0;
};

export const getTotalyExpensesByDate = async (
  startDate: Date,
  endDate: Date
) => {
  const expenses = await prisma.expense.aggregate({
    _sum: { amount: true },
    where: {
      date: {
        gte: startDate,
        lt: endDate,
      },
    },
  });
  return expenses._sum.amount ?? 0;
};

export const getRecentFeeCollections = async (limit = 5) => {
  const fees = await prisma.fee.findMany({
    take: limit,
    orderBy: {
      paymentDate: "desc",
    },
    include: {
      student: true,
    },
  });

  return fees.map((fee) => ({
    studentName: fee.student.name,
    course: fee.student.course,
    date: fee.paymentDate,
    amount: fee.paymentAmount,
  }));
};

export const getRecentExpenses = async (limit = 5) => {
  const expenses = await prisma.expense.findMany({
    take: limit,
    orderBy: {
      date: "desc",
    },
  });

  return expenses.map((exp) => ({
    purpose: exp.purpose,
    paidTo: exp.paidTo,
    date: exp.date,
    amount: exp.amount,
  }));
};

export async function getMonthlyFeeSummary() {
  const fees = await prisma.fee.findMany({
    where: {
      paymentDate: {
        gte: new Date(`2025-01-01`),
        lt: new Date(`2026-01-01`),
      },
    },
    select: {
      paymentAmount: true,
      paymentDate: true,
    },
  });
  const summary = new Array(12).fill(0);
  fees.forEach((fee) => {
    const month = new Date(fee.paymentDate).getMonth();
    summary[month] += fee.paymentAmount;
  });
  return {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    values: summary,
  };
}
