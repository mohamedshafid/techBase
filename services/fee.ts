import { getFeePayments, getPendingFee, getTodayFee } from "@/utils/fee.utils";

export const getFeeData = async () => {
  const [fee,todayFee,pendingFee] = await Promise.all([getFeePayments(),getTodayFee(),getPendingFee()]);

  return {
    fee,
    todayFee,
    pendingFee
  };
};


