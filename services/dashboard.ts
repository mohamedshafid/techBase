// lib/dashboardService.ts
import {
  getMonthlyFeeSummary,
  getPendingDues,
  getRecentExpenses,
  getRecentFeeCollections,
  getTotalExpenses,
  getTotalFeesCollected,
  getTotalStudents,
} from "@/utils/dashboard.utils";

export const getDashboardData = async () => {
  const [
    totalStudents,
    totalFeesCollected,
    pendingDues,
    totalExpenses,
    recentFeeCollection,
    recentExpenses,
    monthlyFeeSummary,
  ] = await Promise.all([
    getTotalStudents(),
    getTotalFeesCollected(),
    getPendingDues(),
    getTotalExpenses(),
    getRecentFeeCollections(),
    getRecentExpenses(),
    getMonthlyFeeSummary(),
  ]);

  const netProfit = Math.max(0, totalFeesCollected - totalExpenses);

  return {
    totalStudents,
    totalFeesCollected,
    pendingDues,
    totalExpenses,
    netProfit,
    recentFeeCollection,
    recentExpenses,
    monthlyFeeSummary,
  };
};
