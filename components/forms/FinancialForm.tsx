"use client";

import React, { useEffect, useState } from "react";
import InputField from "../InputField";
import { useForm } from "react-hook-form";
import { financialSchema } from "@/schemas/schema";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  getTotalFeesCollectedByDate,
  getTotalyExpensesByDate,
} from "@/utils/dashboard.utils";
import Cards from "../Cards";
import { BadgeIndianRupee, BanknoteArrowDown, ChartPie } from "lucide-react";
import { getDashboardData } from "@/services/dashboard";
import Loading from "@/app/loading";
import { exportToExcel } from "@/lib/exportToExcel";


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

  const [totalFeesCollectedByDate, setTotalFeesCollectedByDate] = useState(0);
  const [totalExpenseCollectedByDate, setTotalExpenseCollectedByDate] =
    useState(0);
  const [totalProfitCollectedByDate, setTotalProfitCollectedByDate] =
    useState(0);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const fetchDashboardData = async () => {
      setLoading(true);
      const { totalFeesCollected, totalExpenses, netProfit } =
        await getDashboardData();

      setTotalFeesCollectedByDate(totalFeesCollected);
      setTotalExpenseCollectedByDate(totalExpenses);
      setTotalProfitCollectedByDate(netProfit);

      setLoading(false);
    };

    fetchDashboardData();
  }, []);

  const onSubmit = async (data: FinancialFormData) => {
    const { fromDate, toDate } = data;
    const from = new Date(fromDate);
    const to = new Date(toDate);

    setLoading(true);

    const totalFees = await getTotalFeesCollectedByDate(from, to);
    const totalExpenses = await getTotalyExpensesByDate(from, to);

    setTotalFeesCollectedByDate(totalFees);
    setTotalExpenseCollectedByDate(totalExpenses);
    setTotalProfitCollectedByDate(totalFees - totalExpenses);

    setLoading(false);
    reset();
  };

  const handleExportExcel = () => {
    const dataToExport = [
      {
        Metric: "Total Fees Collected",
        Amount: totalFeesCollectedByDate,
      },
      {
        Metric: "Total Expenses",
        Amount: totalExpenseCollectedByDate,
      },
      {
        Metric: "Net Profit",
        Amount: totalProfitCollectedByDate,
      },
    ];

    exportToExcel(dataToExport, `financial-report-${Date.now()}.xlsx`);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full mt-8 bg-white rounded-lg p-6 flex flex-col xl:flex-row items-center justify-around"
      >
        <div className="flex flex-col sm:flex-row items-center gap-2">
          <div className="form-div">
            <label className="form-label">From Date</label>
            <InputField
              type="date"
              placeholder="Select a date"
              id="fromDate"
              register={register("fromDate")}
            />
            {errors.fromDate && (
              <span className="text-red-500 text-sm">
                {errors.fromDate.message}
              </span>
            )}
          </div>
          <div className="form-div">
            <label className="form-label">To Date</label>
            <InputField
              type="date"
              placeholder="Select a date"
              id="toDate"
              register={register("toDate")}
            />
            {errors.toDate && (
              <span className="text-red-500 text-sm">
                {errors.toDate.message}
              </span>
            )}
          </div>
        </div>

        <div className="flex items-center justify-beween gap-4 mt-4 xl:mt-0">
          <button className="btn btn-primary" type="submit">
            Apply Filter
          </button>
          <button className="btn btn-excel" onClick={handleExportExcel}>
            Export Excel
          </button>
        </div>
      </form>

      {loading ? (
        <Loading />
      ) : (
        <div className="w-full mt-6 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
          <Cards
            label="Total Fees Collected"
            value={`₹${totalFeesCollectedByDate.toLocaleString()}`}
            valueColor="green"
            iconAndColor={{
              icon: BadgeIndianRupee,
              color: "green",
            }}
            change={{
              amount: "+12% from last month",
            }}
          />
          <Cards
            label="Total Expenses"
            value={`₹${totalExpenseCollectedByDate.toLocaleString()}`}
            valueColor="red"
            iconAndColor={{
              icon: BanknoteArrowDown,
              color: "red",
            }}
            change={{
              amount: "+8% from last month",
            }}
          />
          <Cards
            label="Net Profit"
            value={`₹${totalProfitCollectedByDate.toLocaleString()}`}
            valueColor="blue"
            iconAndColor={{
              icon: ChartPie,
              color: "blue",
            }}
            change={{
              amount: "+15% from last month",
            }}
          />
        </div>
      )}
    </>
  );
};

export default FinancialForm;
