"use client";

import React from "react";
import InputField from "../InputField";
import { useForm } from "react-hook-form";
import { financialSchema } from "@/schemas/schema";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

type FinancialFormData = z.infer<typeof financialSchema>;

const FinancialForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FinancialFormData>({
    resolver: zodResolver(financialSchema),
  });

  return (
    <form action="" className="w-full flex flex-col xl:flex-row items-center justify-around">
      <div className="flex flex-col sm:flex-row items-center gap-2">
        <div className="form-div">
          <label htmlFor="" className="form-label">
            From Date
          </label>
          <InputField
            type="date"
            placeholder="Select a date"
            id="fromDate"
            register={register("fromDate")}
          />
        </div>
        <div className="form-div">
          <label htmlFor="" className="form-label">
            From Date
          </label>
          <InputField
            type="date"
            placeholder="Select a date"
            id="fromDate"
            register={register("fromDate")}
          />
        </div>
        <div className="form-div">
          <label htmlFor="" className="form-label">
            Report Type
          </label>
          <InputField
            type="select"
            placeholder="All reports"
            id="reportType"
            options={["All Reports", "Income Report", "Expense Report"]}
            register={register("reportType")}
          />
        </div>
      </div>

      <div className="flex items-center justify-beween gap-4">
        <button className="btn btn-primary">Apply Filter</button>
        <button className="btn btn-success">Export PDF</button>
        <button className="btn btn-excel">Export Excel</button>
      </div>
    </form>
  );
};

export default FinancialForm;
