"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export const createFee = async (data: any) => {
  try {
    const fee = await prisma.fee.create({
      data: {
        studentId: data.student,
        paymentDate: new Date(data.paymentDate),
        paymentAmount: parseInt(data.paymentAmount, 10),
        paymentMode: data.paymentMode,
        collectedBy: data.collectedBy,
        notes: data.notes,
      },
    });
    revalidatePath("/fees-collection");
    revalidatePath("/dashboard");
    return fee;
  } catch (error) {
    console.log("Error creating fee:", error);
  }
};
