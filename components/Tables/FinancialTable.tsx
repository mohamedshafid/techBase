"use client";
import React from "react";
import { Table, Tag, Space, Button } from "antd";

interface FinancialIncome {
  month?: string;
  fees_collected?: number;
  total_expenses?: number;
  net_profit?: number;
}

interface FinancialTableProps {
  financial: FinancialIncome[];
  visibleColumns?: string[];
}

export const FinancialTable: React.FC<FinancialTableProps> = ({
  financial,
  visibleColumns,
}) => {
  const columns = [
    {
      title: "Month",
      dataIndex: "month",
      key: "month",
      render: (month: string) => {
        const date = new Date(`${month}-2025`);
        const formatted = date.toLocaleString("default", {
          month: "long",
          year: "numeric",
        });
        return <span>{formatted}</span>;
      }
    },
    
    {
      title: "Fees Collected",
      dataIndex: "fees_collected",
      key: "fees_collected",
      render: (fees_collected: number) => (
        <span className="text-green-600">₹ {fees_collected.toString()}</span>
      ),
    },
    {
      title: "Total Expenses",
      dataIndex: "total_expenses",
      key: "total_expenses",
      render: (total_expenses: number) => (
        <span className="text-red-600">₹ {total_expenses.toString()}</span>
      ),
    },
    {
      title: "Net Profit",
      dataIndex: "net_profit",
      key: "net_profit",
      render: (net_profit: number) => (
        <span className={"text-blue-600"}>
          ₹ {net_profit.toString()}
        </span>
      ),
    }
  ];

  const filteredColumns = visibleColumns
    ? columns.filter((col) => visibleColumns.includes(col.key))
    : columns;

   const filteredFinancial = financial.filter((item) => {
     return item.fees_collected!=0 && item.total_expenses!=0;
  });

  return (
    <Table
      key="financial-table"
      columns={filteredColumns}
      dataSource={filteredFinancial.map((p, index) => ({
        ...p,
        key: index.toString(),
      }))}
      bordered
    />
  );
};
