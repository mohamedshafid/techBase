"use client";

import React, { useState } from "react";
import InputField from "../InputField";
import { expenseSchema } from "@/schemas/schema";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { BanknoteArrowUpIcon, CheckCheck, Loader } from "lucide-react";
import { expenseCategoryOptions, paymentModeOptions } from "@/constants";
import { createExpense } from "@/actions/expense.action";
import clsx from "clsx";

type expenseFormData = z.infer<typeof expenseSchema>;

const ExpenseForm = () => {
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<expenseFormData>({
    resolver: zodResolver(expenseSchema),
  });

  const onSubmit = async (data: expenseFormData) => {
    try {
      const expense = await createExpense(data);
      if (expense) {
        setIsSuccess(true);
        setTimeout(() => {
          reset();
          setIsSuccess(false);
        }, 2000);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="mb-6">
        <h1 className="heading font-nunito">Add New Expense</h1>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 form-div">
          <div>
            <label className="form-label">Date</label>
            <InputField
              type="date"
              placeholder="Select date"
              id="expenseDate"
              register={register("date")}
            />
            {errors.date && <p className="error">{errors.date?.message}</p>}
          </div>
          <div>
            <label className="form-label">Amount</label>
            <InputField
              type="number"
              placeholder="₹ 0"
              id="amount"
              register={register("amount")}
            />
            {errors.amount && <p className="error">{errors.amount?.message}</p>}
          </div>
        </div>

        <div className="form-div">
          <label className="form-label">Purpose</label>
          <InputField
            type="text"
            placeholder="e.g, Office Supplies,Rent,Utilities,Equipment..."
            id="purpose"
            register={register("purpose")}
          />
          {errors.purpose && <p className="error">{errors.purpose?.message}</p>}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 form-div">
          <div>
            <label className="form-label">Paid To</label>
            <InputField
              type="text"
              placeholder="Vendor/Person Name"
              id="paidTo"
              register={register("paidTo")}
            />
            {errors.paidTo && <p className="error">{errors.paidTo?.message}</p>}
          </div>
          <div>
            <label className="form-label">Payment Mode</label>
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
        </div>

        <div className="form-div">
          <label className="form-label">Category</label>
          <InputField
            type="select"
            placeholder="Select Category"
            id="category"
            options={expenseCategoryOptions}
            register={register("category")}
          />
          {errors.category && (
            <p className="error">{errors.category?.message}</p>
          )}
        </div>

        <div className="form-div">
          <label className="form-label">Description (Optional)</label>
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
            type="submit"
            className={clsx(
              "btn btn-primary flex-center gap-2 flex-1 py-3 transition-all duration-500 ease-in-out",
              {
                "bg-green-500 text-white": isSuccess,
                "cursor-not-allowed": isSubmitting,
              }
            )}
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
            className="btn btn-secondary border py-3"
            onClick={() => reset()}
          >
            Clear Form
          </button>
        </div>
      </form>
    </>
  );
};

export default ExpenseForm;
