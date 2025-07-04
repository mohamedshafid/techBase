"use client";

import React from "react";
import { Table, Tag } from "antd";

interface Expense {
  id: string;
  date: string;
  purpose: string;
  paidTo: string;
  category: string;
  paymentMode: string;
  amount: number;
}

interface ExpenseTableProps {
  expenses: Expense[];
  visibleColumns?: string[];
}

export const ExpenseTable: React.FC<ExpenseTableProps> = ({
  expenses,
  visibleColumns,
}) => {
  const columns = [
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Purpose",
      dataIndex: "purpose",
      key: "purpose",
    },
    {
      title: "Paid To",
      dataIndex: "paidTo",
      key: "paidTo",
    },
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
      render: (category: string) => <Tag color={"green"}>{category}</Tag>,
    },
    {
      title: "Mode",
      dataIndex: "paymentMode",
      key: "paymentMode",
      render: (mode: string) => <Tag color="blue">{mode}</Tag>,
    },
    {
      title: "Amount",
      dataIndex: "amount",
      key: "amount",
      render: (amount: number) => (
        <span className="text-red-600">₹ {amount.toString()}</span>
      ),
    },
  ];

  const filteredColumns = visibleColumns
    ? columns.filter((col) => visibleColumns.includes(col.key))
    : columns;

  return (
    <Table
      key={"expense-table"}
      columns={filteredColumns}
      dataSource={expenses.map((e) => ({ ...e, key: e.id }))}
    />
  );
};
