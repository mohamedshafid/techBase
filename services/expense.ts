import {
  getTodayExpenses,
  getThisMonthExpenses,
  getExpenseCount,
  getTodayExpenseCount,
  getExpense,
} from "@/utils/expense.utils";
import { prisma } from "@/lib/prisma";

export const getExpenseData = async () => {
  const [
    todayExpenses,
    thisMonthExpenses,
    expenseCount,
    todayExpenseCount,
    expenses,
  ] = await Promise.all([
    getTodayExpenses(),
    getThisMonthExpenses(),
    getExpenseCount(),
    getTodayExpenseCount(),
    getExpense(),
  ]);

  return {
    todayExpenses,
    thisMonthExpenses,
    expenseCount,
    todayExpenseCount,
    expenses,
  };
};
