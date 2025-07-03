"use client";
import React from "react";
import { Table, Tag, Space, Button } from "antd";

interface FeePayment {
  id: string;
  studentName: string;
  course: string;
  date: string;
  mode: string;
  amount: number;
  collectedBy: string;
}

interface FeePaymentTableProps {
  payments: FeePayment[];
}

export const FeeTable: React.FC<FeePaymentTableProps> = ({ payments }) => {
  const columns = [
    {
      title: "Student",
      dataIndex: "studentName",
      key: "studentName",
    },
    {
      title: "Course",
      dataIndex: "course",
      key: "course",
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Mode",
      dataIndex: "mode",
      key: "mode",
      render: (mode: string) => <Tag color={"blue"}>{mode}</Tag>,
    },
    {
      title: "Amount",
      dataIndex: "amount",
      key: "amount",
      render: (amount: number) => (
        <span className="text-green-600">₹ {amount.toString()}</span>
      ),
    },
    {
      title: "Collected By",
      dataIndex: "collectedBy",
      key: "collectedBy",
    },
  ];

  return (
    <Table
      columns={columns}
      dataSource={payments.map((p) => ({ ...p, key: p.id }))}
      pagination={false}
    />
  );
};
