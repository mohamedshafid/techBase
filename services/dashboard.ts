// lib/dashboardService.ts
import {
  getMonthlyFeeSummary,
  getPendingDues,
  getRecentExpenses,
  getRecentFeeCollections,
  getTotalFeesCollectedByDate,
  getTotalExpenses,
  getTotalFeesCollected,
  getTotalStudents,
  getTotalyExpensesByDate,
} from "@/utils/dashboard.utils";

export const getDashboardData = async () => {
  const [
    totalStudents,
    totalFeesCollected,
    totalFeesCollectedByDate,
    pendingDues,
    totalExpenses,
    totalExpensesByDate,
    recentFeeCollection,
    recentExpenses,
    monthlyFeeSummary,
  ] = await Promise.all([
    getTotalStudents(),
    getTotalFeesCollected(),
    getTotalFeesCollectedByDate(new Date(), new Date()),
    getPendingDues(),
    getTotalExpenses(),
    getTotalyExpensesByDate(new Date(), new Date()),
    getRecentFeeCollections(),
    getRecentExpenses(),
    getMonthlyFeeSummary(),
  ]);

  const netProfit = Math.max(0, totalFeesCollected - totalExpenses);

  return {
    totalStudents,
    totalFeesCollected,
    totalFeesCollectedByDate,
    pendingDues,
    totalExpenses,
    netProfit,
    recentFeeCollection,
    recentExpenses,
    monthlyFeeSummary,
    totalExpensesByDate,
  };
};
