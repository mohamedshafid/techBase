import { prisma } from "@/lib/prisma";

export const getTodayExpenses = async () => {
  const start = new Date();
  start.setHours(0, 0, 0, 0);

  const end = new Date();
  end.setHours(23, 59, 59, 999);

  const result = await prisma.expense.aggregate({
    _sum: {
      amount: true,
    },
    where: {
      date: {
        gte: start,
        lt: end,
      },
    },
  });

  return result._sum.amount ?? 0;
};

export const getThisMonthExpenses = async () => {
  const now = new Date();

  const firstDay = new Date(now.getFullYear(), now.getMonth(), 1);
  const firstDayNextMonth = new Date(now.getFullYear(), now.getMonth() + 1, 1);

  const result = await prisma.expense.aggregate({
    _sum: {
      amount: true,
    },
    where: {
      date: {
        gte: firstDay,
        lt: firstDayNextMonth,
      },
    },
  });

  return result._sum.amount ?? 0;
};

export const getExpenseCount = async () => {
  return await prisma.expense.count();
};

export const getTodayExpenseCount = async () => {
  const start = new Date();
  start.setHours(0, 0, 0, 0);

  const end = new Date();
  end.setHours(23, 59, 59, 999);

  return await prisma.expense.count({
    where: {
      date: {
        gte: start,
        lt: end,
      },
    },
  });
};

export const getExpense = async () => {
  return prisma.expense.findMany({
    orderBy: { date: "desc" },
    take: 10,
  });
};



export const getMonthlyExpenseSummary = async () => {
  const expenses = await prisma.expense.findMany({
    where: {
      date: {
        gte: new Date(`2025-01-01`),
        lt: new Date(`2026-01-01`),
      },
    },
    select: {
      date: true,
      amount: true,
    },
  });

  const summary = new Array(12).fill(0);

  expenses.forEach((expense) => {
    const month = new Date(expense.date).getMonth();
    summary[month] += expense.amount;
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
};
