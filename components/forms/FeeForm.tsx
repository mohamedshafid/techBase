"use client";

import React, { useEffect, useState } from "react";
import InputField from "../InputField";
import { feeSchema } from "@/schemas/schema";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { BanknoteArrowUpIcon, CheckCheck, Loader } from "lucide-react";
import {
  collectedByOptions,
  courseOptions,
  paymentModeOptions,
} from "@/constants";
import { createFee } from "@/actions/fee.action";
import { updateStudent } from "@/actions/student.action";
import toast from "react-hot-toast";
import clsx from "clsx";

type feeFormData = z.infer<typeof feeSchema>;

type StudentOption = {
  label: string;
  value: string;
  course: string;
  outStandingBalance?: string;
};

const FeeForm = ({
  studentOption = [],
}: {
  studentOption?: StudentOption[];
}) => {
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    handleSubmit,
    register,
    reset,
    setValue,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<feeFormData>({
    resolver: zodResolver(feeSchema),
  });

  const onSubmit = async (data: feeFormData) => {
    try {
      const fee = await createFee(data);
      await updateStudent(data);

      if (fee) {
        setIsSuccess(true);
        setTimeout(() => {
          reset();
          setIsSuccess(false);
        }, 2000);
      }
    } catch (error) {
      console.error("Error recording fee payment:", error);
      toast.error("Failed to record fee payment. Please try again.");
    }
  };

  const selectedStudentId = watch("student");

  useEffect(() => {
    if (!selectedStudentId) return;

    const selectedStudent = studentOption.find(
      (s) => s.value === selectedStudentId
    );

    if (selectedStudent?.course) {
      const course = selectedStudent?.course;
      const match = courseOptions.find((option) => option.value === course);

      setValue("course", match?.label ?? "");
      setValue(
        "outStandingBalance",
        selectedStudent?.outStandingBalance?.toString() || "0"
      );
    }
  }, [selectedStudentId, setValue]);

  return (
    <>
      <div className="mb-6">
        <h1 className="heading font-nunito">Record Fee Payment</h1>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 form-div">
          <div>
            <label htmlFor="" className="form-label">
              Select Student
            </label>
            <InputField
              type="select"
              placeholder="Enter Student's full name"
              id="name"
              register={register("student")}
              options={[
                ...studentOption.map((student) => ({
                  label: student.label,
                  value: student.value,
                })),
              ]}
            />
            {errors.student && (
              <p className="error">{errors.student?.message}</p>
            )}
          </div>
          <div>
            <label htmlFor="" className="form-label">
              Course
            </label>
            <InputField
              type="text"
              placeholder="Auto-Filled"
              id="course"
              register={register("course")}
            />
            {errors.course && <p className="error">{errors.course?.message}</p>}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 form-div">
          <div>
            <label htmlFor="" className="form-label">
              Outstanding Balance
            </label>
            <InputField
              type="text"
              placeholder="₹ 0"
              id="outStandingBalance"
              register={register("outStandingBalance")}
            />
            {errors.outStandingBalance && (
              <p className="error">{errors.outStandingBalance?.message}</p>
            )}
          </div>
          <div>
            <label htmlFor="" className="form-label">
              Payment Amount
            </label>
            <InputField
              type="number"
              placeholder="₹ 0"
              id="paymentAmount"
              register={register("paymentAmount")}
            />
            {errors.paymentAmount && (
              <p className="error">{errors.paymentAmount?.message}</p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 form-div">
          <div>
            <label htmlFor="" className="form-label">
              Payment Mode
            </label>
            <InputField
              type="select"
              placeholder="Select Payment Mode"
              id="paymentMode"
              options={paymentModeOptions}
              register={register("paymentMode")}
            />
            {errors.paymentMode && (
              <p className="error">{errors.paymentMode?.message}</p>
            )}
          </div>
          <div>
            <label htmlFor="" className="form-label">
              Payment Date
            </label>
            <InputField
              type="date"
              placeholder="Select Payment Date"
              id="paymentDate"
              register={register("paymentDate")}
            />
            {errors.paymentDate && (
              <p className="error">{errors.paymentDate?.message}</p>
            )}
          </div>
        </div>

        <div className="form-div">
          <label htmlFor="" className="form-label">
            Collected By
          </label>
          <InputField
            type="select"
            placeholder="Select Collected By"
            id="collectedBy"
            options={collectedByOptions}
            register={register("collectedBy")}
          />
          {errors.collectedBy && (
            <p className="error">{errors.collectedBy?.message}</p>
          )}
        </div>

        <div className="form-div">
          <label htmlFor="" className="form-label">
            Notes (Optional)
          </label>
          <InputField
            type="textarea"
            placeholder="Any additional notes..."
            id="notes"
            register={register("notes")}
          />
          {errors.notes && <p className="error">{errors.notes?.message}</p>}
        </div>

        <div className="mt-8 flex items-center gap-3">
          <button
            className={clsx(
              "btn flex-center gap-2 flex-1 py-3 transition-all duration-500 ease-in-out",
              {
                "bg-green-500 text-white": isSuccess,
                "btn-primary": !isSuccess && !isSubmitting,
                "cursor-not-allowed": isSubmitting,
              }
            )}
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <Loader className="animate-spin" />
            ) : isSuccess ? (
              <>
                <CheckCheck className="text-white" />
                <span>Success!</span>
              </>
            ) : (
              <>
                <BanknoteArrowUpIcon />
                Record Payment
              </>
            )}
          </button>
          <button
            type="button"
            onClick={() => reset()}
            className="btn btn-secondary border py-3"
          >
            Clear Form
          </button>
        </div>
      </form>
    </>
  );
};

export default FeeForm;
