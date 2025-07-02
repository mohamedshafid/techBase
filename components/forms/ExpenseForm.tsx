"use client";

import React from "react";
import InputField from "../InputField";
import { expenseSchema, feeSchema } from "@/schemas/schema";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { BanknoteArrowUpIcon } from "lucide-react";
import { date } from "zod/v4-mini";

type expenseFormData = z.infer<typeof expenseSchema>;

const ExpenseForm = () => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<expenseFormData>({
    resolver: zodResolver(expenseSchema),
  });

  const onSubmit = (data: expenseFormData) => {
    console.log("Expense Form submitted ");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 form-div">
        <div>
          <label htmlFor="" className="form-label">
            Date
          </label>
          <InputField
            type="date"
            placeholder="Select date"
            id="expenseDate"
            register={register("expenseDate")}
          />
          {errors.expenseDate && (
            <p className="error">{errors.expenseDate?.message}</p>
          )}
        </div>
        <div>
          <label htmlFor="" className="form-label">
            Amount
          </label>
          <InputField
            type="number"
            placeholder="Auto-Filled"
            id="course"
            register={register("expenseAmount")}
          />

          {errors.expenseAmount && (
            <p className="error">{errors.expenseAmount?.message}</p>
          )}
        </div>
      </div>

      <div className="form-div">
        <label htmlFor="" className="form-label">
          Purpose
        </label>
        <InputField
          type="text"
          placeholder="e.g, Office Supplies,Rent,Utilities,Equipment..."
          id="course"
          register={register("expenseAmount")}
        />

        {errors.expenseAmount && (
          <p className="error">{errors.expenseAmount?.message}</p>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 form-div">
        <div>
          <label htmlFor="" className="form-label">
            Paid To
          </label>
          <InputField
            type="text"
            placeholder="Vendor/Person Name"
            id="paidTo"
            register={register("paidTo")}
          />
          {errors.paidTo && (
            <p className="error">{errors.paidTo?.message}</p>
          )}
        </div>
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
      </div>
      <div className="form-div">
        <label htmlFor="" className="form-label">
          Category
        </label>
        <InputField
          type="select"
          placeholder="Select Category"
          id="category"
          options={[
            "Select Category",
            "Office Supplies",
            "Rent",
            "Utilities",
            "Equipment",
          ]}
          register={register("category")}
        />

        {errors.expenseAmount && (
          <p className="error">{errors.expenseAmount?.message}</p>
        )}
      </div>
      <div className="form-div">
        <label htmlFor="" className="form-label">
          Descriptiion (Optional)
        </label>
        <InputField
          type="textarea"
          placeholder="Additional details about the expense..."
          id="description"
          register={register("description")}
        />

        {errors.description && (
          <p className="error">{errors.description?.message}</p>
        )}
      </div>

      <div className="mt-8 flex items-center gap-3">
        <button
          className="btn btn-primary flex-center gap-2 flex-1 py-3"
          type="submit"
        >
          <BanknoteArrowUpIcon />
          Record Payment
        </button>
        <button className="btn btn-secondary border py-3">Clear Form</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
