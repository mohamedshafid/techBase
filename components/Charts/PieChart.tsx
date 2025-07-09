"use client";

import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { courseCategory } from "@/generated/prisma";

ChartJS.register(ArcElement, Tooltip, Legend);

interface PieChartProps {
  data: {
    labels: courseCategory[];
    values: number[];
  };
}

const courseValuesMap: { [key: string]: string } = {
  FULL_STACK_DEVELOPMENT: "Full Stack Development",
  PYTHON_PROGRAMMING: "Python Programming",
  DATA_SCIENCE: "Data Science",
  UI_UX_DESIGN: "UI/UX Design",
  DIGITAL_MARKETING: "Digital Marketing",
  MOBILE_APP_DEVELOPMENT: "Mobile App Development",
};

export default function PieChart({ data: { labels, values } }: PieChartProps) {
  const label = labels.map((label) => courseValuesMap[label] || label);

  const data = {
    labels: label,
    datasets: [
      {
        label: "Course Distribution",
        data: values,
        backgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#4BC0C0",
          "#9966FF",
          "#FF9F40",
          "#FF6384",
        ],
        borderColor: "rgba(255, 255, 255, 0.8)",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'right' as const,
        labels: {
          boxWidth: 10,
          padding: 10,
        },
      },
    },
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-5 flex-1">
      <Pie data={data} options={options} />
    </div>
  );
}
