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
export const getTotalStudents = async () => {
  return await prisma.student.count();
};

export const getPendingDues = async () => {
  const pendingDues=await prisma.student.aggregate({
    _sum: { remainingBalance: true },
  });
  return pendingDues._sum.remainingBalance ?? 0;
};

export const getTotalExpenses=async()=>{
  const totalExpenses=await prisma.expense.aggregate({
    _sum:{amount:true}
  });

  return totalExpenses._sum.amount ?? 0;
}
