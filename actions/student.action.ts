"use server";
import { prisma } from "@/lib/prisma";

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
    return student;
  } catch (error) {
    console.error("Error creating student:", error);
    throw error;
  }
};
