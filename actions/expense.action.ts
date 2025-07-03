"use server";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export const createExpense = async (data: any) => {
  try {
    const expense = await prisma.expense.create({
      data: {
        date: new Date(data.date),
        amount: parseInt(data.amount, 10),
        purpose: data.purpose,
        paidTo: data.paidTo,
        paymentMode: data.paymentMode,
        category: data.category,
        description: data.description,
      },
    });

    revalidatePath("/expenses");
    return expense;

    
  } catch (error) {
    console.log(error);
  }
};
