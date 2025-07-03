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

    console.log(payments);

    return payments;
  } catch (error) {
    console.error("Error fetching fee payments:", error);
    return [];
  }
};
