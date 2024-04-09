// src/components/TransactionList.tsx
import React from "react";
import { Transaction } from "../models/Transaction";
import { TransactionItem } from "./TransactionItem";

interface TransactionListProps {
  transactions: Transaction[];
  onDeleteTransaction: (id: number) => void;
  onEditTransaction: (id: number) => void;
}
export const TransactionList: React.FC<TransactionListProps> = ({
  transactions,onDeleteTransaction,onEditTransaction
}) => {
  return (
    <div className="my-4">
      <h2 className="text-lg font-semibold mb-2">Transactions</h2>
      <ul className="divide-y divide-gray-200">
        {transactions.map((transaction) => (
          <TransactionItem
            key={transaction.id}
            transaction={transaction}
            onDeleteTransaction={onDeleteTransaction}
            onEditTransaction={onEditTransaction}
          />
        ))}
      </ul>
    </div>
  );
};
