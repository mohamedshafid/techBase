'use client'

import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Legend
);

interface LineChartProps {
  feeData: {
    labels: string[];
    values: number[];
  };
  expenseData: {
    labels: string[];
    values: number[];
  };
}

export default function LineChart({ feeData,expenseData }: LineChartProps) {
  const data = {
    labels: feeData.labels,
    datasets: [
      {
        label: "Fees",
        data: feeData.values,
        fill: true,
        backgroundColor: "green",
        borderColor: "green",
      },
      {
        label: "Expense",
        data: expenseData.values,
        fill: true,
        backgroundColor: "red",
        borderColor: "red",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: "top" as const },
    },
    scales: {
      x: { title: { display: true, text: "Month" } },
      y: { title: { display: true, text: "Amount" }, beginAtZero: true },
    },
  };

  return (
    <div className="flex-1 bg-white shadow-lg rounded-lg p-5 flex-center">
      <Line data={data} options={options}/>
    </div>
  );
}
