import { prisma } from "@/lib/prisma";

export const getFeePayments = async () => {
  try {
    const payments = await prisma.fee.findMany({
      orderBy: {
        paymentDate: "desc",
      },
      include: {
        student: true,
      },
      take: 5,
    });
    return payments;
  } catch (error) {
    console.error("Error fetching fee payments:", error);
    return [];
  }
};

export const getTodayFee = async () => {
  const start = new Date();
  start.setHours(0, 0, 0, 0);

  const end = new Date();
  end.setHours(23, 59, 59, 999);

  const result = await prisma.fee.aggregate({
    _sum: {
      paymentAmount: true,
    },
    where: {
      paymentDate: {
        gte: start,
        lt: end,
      },
    },
  });

  return result._sum.paymentAmount ?? 0;
};

export const getPendingFee = async () => {
  const pendingFee = await prisma.student.aggregate({
    _sum: {
      remainingBalance: true,
    },
  });

  return pendingFee._sum.remainingBalance ?? 0;
};
