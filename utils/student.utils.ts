import { prisma } from "@/lib/prisma";
import { courseCategory } from "@prisma/client";

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
    outStandingBalance: 0,
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

export async function getStudentCountByCourse() {
  const courses = Object.values(courseCategory);

  const counts = await Promise.all(
    courses.map(async (labels: courseCategory) => {
      const values = await prisma.student.count({
        where: { course: labels },
      });
      return { labels, values };
    })
  );

  return counts;
}
