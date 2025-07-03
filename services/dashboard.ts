// lib/dashboardService.ts
import {
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
  ] = await Promise.all([
    getTotalStudents(),
    getTotalFeesCollected(),
    getPendingDues(),
    getTotalExpenses(),
    getRecentFeeCollections(),
    getRecentExpenses(),
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
  };
};
