"use client";
import React from "react";
import { Table, Tag, Space, Button } from "antd";
import { vi } from "date-fns/locale";

interface FeePayment {
  id?: string;
  studentName?: string;
  course?: string;
  date?: string;
  mode?: string;
  amount?: number;
  collectedBy?: string;
}

interface FeePaymentTableProps {
  payments: FeePayment[];
  visibleColumns?: string[];
}

export const FeeTable: React.FC<FeePaymentTableProps> = ({ payments ,visibleColumns}) => {
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

  const filteredColumns = visibleColumns
    ? columns.filter((col) => visibleColumns.includes(col.key))
    : columns;

  return (
      <Table
        key={"fee-table"}
        columns={filteredColumns}
        dataSource={payments.map((p,index) => ({ ...p, key: index.toString() }))}
      />
  );
};
