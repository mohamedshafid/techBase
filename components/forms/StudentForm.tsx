"use client";

import React, { useEffect } from "react";
import InputField from "../InputField";
import { RefreshCcwDot, UserPlus } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { studentSchema } from "@/schemas/schema";
import { z } from "zod";
import { courseOptions } from "@/constants";
import { createStudent } from "@/actions/student.action";
import { useRouter } from "next/navigation";
// import { createStudent } from "@/actions/student.action";

type studentFormData = z.infer<typeof studentSchema>;

const StudentForm = () => {

  const router=useRouter();

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
    watch,
    setValue,
  } = useForm<studentFormData>({
    resolver: zodResolver(studentSchema),
  });

  const onSubmit = async (data: studentFormData) => {
    try {
      const student = await createStudent(data);
      alert("Student registered successfully!");
      reset();
      router.push("/dashboard");
    } catch (error) {
      console.error("Error registering student:", error);
      alert("Failed to register student.");
    }
  };

  const courseFee = watch("courseFee") || 0;
  const initialPayment = watch("initialPayment") || 0;

  useEffect(() => {
    const remainingBalance = Number(courseFee) - Number(initialPayment);

    setValue(
      "remainingBalance",
      (remainingBalance >= 0 ? remainingBalance : 0).toString()
    );
  }, [courseFee, initialPayment]);

  return (
    <form onSubmit={handleSubmit(onSubmit)} id="student-form">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 form-div">
        <div>
          <label htmlFor="" className="form-label">
            Full Name
          </label>
          <InputField
            type="text"
            placeholder="Enter Student's full name"
            id="name"
            register={register("name")}
          />
          {errors.name && <p className="error">{errors.name?.message}</p>}
        </div>
        <div>
          <label htmlFor="" className="form-label">
            Age
          </label>
          <InputField
            type="number"
            placeholder="Enter age"
            id="age"
            register={register("age")}
          />

          {errors.age && <p className="error">{errors.age?.message}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="" className="form-label">
            Phone
          </label>
          <InputField
            type="phone"
            placeholder="Enter 10-digit phone number"
            id="phone"
            register={register("phone")}
          />
          {errors.phone && <p className="error">{errors.phone?.message}</p>}
        </div>
        <div className="form-div">
          <label htmlFor="" className="form-label">
            Course
          </label>
          <InputField
            type="select"
            placeholder="Select Course"
            id="course"
            options={courseOptions}
            register={register("course")}
          />
          {errors.course && <p className="error">{errors.course?.message}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 form-div">
        <div>
          <label htmlFor="" className="form-label">
            Total Course Fee (₹)
          </label>
          <InputField
            type="number"
            placeholder="Enter total fees amount"
            id="courseFee"
            register={register("courseFee")}
          />
          {errors.courseFee && (
            <p className="error">{errors.courseFee?.message}</p>
          )}
        </div>
        <div>
          <label htmlFor="" className="form-label">
            Initial Payment (₹)
          </label>
          <InputField
            type="number"
            placeholder="Enter Initial payment amount"
            id="initialPayment"
            register={register("initialPayment", {
              validate: (value) =>
                Number(value) <= Number(watch("courseFee")) ||
                "Initial payment cannot be more than total course fee",
            })}
          />
          {errors.initialPayment && (
            <p className="error">{errors.initialPayment?.message}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 form-div">
        <div>
          <label htmlFor="" className="form-label">
            Remaining Balance (₹)
          </label>
          <InputField
            type="number"
            placeholder="Auto-Calculated"
            id="remainingBalance"
            register={register("remainingBalance")}
            readOnly
          />
          {errors.remainingBalance && (
            <p className="error">{errors.remainingBalance?.message}</p>
          )}
        </div>
        <div>
          <label htmlFor="" className="form-label">
            Join Date
          </label>
          <InputField
            type="date"
            placeholder="Select Join Date"
            id="joinDate"
            register={register("joinDate")}
          />
          {errors.joinDate && (
            <p className="error">{errors.joinDate?.message}</p>
          )}
        </div>
      </div>

      <h1 className="heading mt-10">Additional Information</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 form-div">
        <div>
          <label htmlFor="" className="form-label">
            Email Address (optional)
          </label>
          <InputField
            type="email"
            placeholder="Enter Email Address"
            id="email"
            register={register("email")}
          />
          {errors.email && <p className="error">{errors.email?.message}</p>}
        </div>
        <div>
          <label htmlFor="" className="form-label">
            Address (optional)
          </label>
          <InputField
            type="textarea"
            placeholder="Enter Complete Address"
            id="address"
            register={register("address")}
          />
          {errors.address && <p className="error">{errors.address?.message}</p>}
        </div>
      </div>

      {/* Buttons */}
      <div className="mt-10 flex justify-end gap-4">
        <button
          className="btn btn-secondary flex gap-2 items-center border"
          onClick={() => reset()}
        >
          <RefreshCcwDot />
          Reset Form
        </button>
        <button className="btn btn-primary flex gap-2 items-center">
          <UserPlus />
          Register Student
        </button>
      </div>
    </form>
  );
};

export default StudentForm;
