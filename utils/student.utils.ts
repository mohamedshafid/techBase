import { prisma } from "@/lib/prisma";

export const createStudentOptions = (students: any) => {
  students = students.map((student: any) => {
    return {
      label: student.name,
      value: student.id,
      course: student.course,
      outStandingBalance: student.remainingBalance || 0,
    };
  });

  students.unshift({
    label: "Select Student",
    value: "",
    course: "",
  });
  return students;
};

export const getAllStudents = async () => {
  try {
    const students = await prisma.student.findMany();
    return students;
  } catch (error) {
    console.error("Error fetching students:", error);
  }
};

export const getStudentCourseById = async (studentId: string) => {
  try {
    const student = await prisma.student.findUnique({
      where: { id: studentId },
      select: { course: true },
    });

    return student?.course || "";
  } catch (error) {
    console.error("Error fetching student course:", error);
  }
};
