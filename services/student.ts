import { createStudentOptions ,getAllStudents} from "@/utils/student.utils";


export const getStudentOptions = async () => {
  const allStudents = await getAllStudents();
  const studentOptions = createStudentOptions(allStudents);


  return studentOptions;
};
