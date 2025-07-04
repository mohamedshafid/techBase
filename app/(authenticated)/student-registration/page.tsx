import {
  AnimatedWrapper,
  Header,
  StudentForm,
} from "@/components";
import { User } from "lucide-react";

import React from "react";

const StudentRegistration = () => {
  return (
    <main>
      <Header
        title="Student Registration"
        subtitle="Add a new student to the system"
      />
      <AnimatedWrapper>
        <div className="mt-10 w-full max-w-[1120px] mx-auto p-4 bg-white shadow-md rounded-lg">
          <div className="flex items-center gap-4 mb-6">
            <User className="text-accent bg-accent/10 rounded-full p-2 w-10 h-10" />
            <div>
              <h1 className="heading font-nunito">New Student Registration</h1>
              <p className="sub-heading font-nunito">
                Fill in the details to register a new student
              </p>
            </div>
          </div>
          <StudentForm />
        </div>
      </AnimatedWrapper>
    </main>
  );
};

export default StudentRegistration;
