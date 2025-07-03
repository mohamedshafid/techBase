import { getFeePayments } from "@/utils/fee.utils";

export const getFeeData = async () => {
  const [fee] = await Promise.all([getFeePayments()]);

  return {
    fee,
  };
};
