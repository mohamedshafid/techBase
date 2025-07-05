"use server";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export const createStudent = async (data: any) => {
  try {
    const student = await prisma.student.create({
      data: {
        name: data.name,
        age: parseInt(data.age, 10),
        phone: data.phone,
        email: data.email,
        address: data?.address,
        joinDate: new Date(data.joinDate),
        course: data.course,
        courseFee: parseInt(data.courseFee, 10),
        initialPayment: parseInt(data.initialPayment, 10),
        remainingBalance: parseInt(data.remainingBalance, 10),
      },
    });

    revalidatePath("/dashboard");
    
  } catch (error) {
    console.error("Error creating student:", error);
  }
};


export const updateStudent = async (data:any) => {
  try {
    const student = await prisma.student.update({
      where: { id: data.student },
      data: {
        remainingBalance: {
          decrement: parseInt(data.paymentAmount, 10),
        },
      },
    });

    revalidatePath("/dashboard");
    
  } catch (error) {
    console.error("Error updating student:", error);
  }
};
