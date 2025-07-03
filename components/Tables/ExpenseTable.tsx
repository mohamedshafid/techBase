"use client";

import React from "react";
import { Table, Tag} from "antd";

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
}

export const ExpenseTable: React.FC<ExpenseTableProps> = ({ expenses }) => {
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
      render: (category: string) => (
        <Tag
          color={
           "green"
          }
        >
          {category}
        </Tag>
      ),
    },
    {
      title: "Mode",
      dataIndex: "paymentMode",
      key: "paymentMode",
    },
    {
      title: "Amount",
      dataIndex: "amount",
      key: "amount",
      render: (amount: number) => `₹ ${amount.toLocaleString()}`,
    },
  ];

  return (
    <Table
      columns={columns}
      dataSource={expenses.map((e) => ({ ...e, key: e.id }))}
    />
  );
};
