"use client";

import React from "react";
import InputField from "../InputField";
import { feeSchema } from "@/schemas/schema";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { BanknoteArrowUpIcon } from "lucide-react";

type feeFormDate = z.infer<typeof feeSchema>;

const FeeForm = () => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<feeFormDate>({
    resolver: zodResolver(feeSchema),
  });

  return (
    <form>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 form-div">
        <div>
          <label htmlFor="" className="form-label">
            Select Student
          </label>
          <InputField
            type="select"
            placeholder="Enter Student's full name"
            id="name"
            options={[
              "Select Student",
              "John Doe",
              "Jane Smith",
              "Alice Johnson",
              "Bob Brown",
            ]}
            register={register("student")}
          />
          {errors.student && <p className="error">{errors.student?.message}</p>}
        </div>
        <div>
          <label htmlFor="" className="form-label">
            Age
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
            Oustanding Balance
          </label>
          <InputField
            type="number"
            placeholder="₹ 0"
            id="oustandingBalance"
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
            options={["Select Payment Mode", "Cash", "Card", "Gpay"]}
            register={register("paymentMode")}
          />
          {errors.paymentMode && (
            <p className="error">{errors.paymentMode?.message}</p>
          )}
        </div>
        <div>
          <label htmlFor="" className="form-label">
            Payment Amount
          </label>
          <InputField
            type="date"
            placeholder="Select Payment Date"
            id="paymentDate"
            register={register("paymentDate")}
          />

          {errors.paymentAmount && (
            <p className="error">{errors.paymentAmount?.message}</p>
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
          options={[
            "Select Collected By",
            "John Doe",
            "Jane Smith",
            "Alice Johnson",
          ]}
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
        <button className="btn btn-primary flex-center gap-2 flex-1 py-3">
          <BanknoteArrowUpIcon />
          Record Payment
        </button>
        <button className="btn btn-secondary border py-3">
          Clear Form
        </button>
      </div>
    </form>
  );
};

export default FeeForm;
