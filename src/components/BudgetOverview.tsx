// src/components/BudgetOverview.tsx
import React from 'react';
import { Transaction } from '../models/Transaction';

interface BudgetOverviewProps {
  transactions: Transaction[];
}

export const BudgetOverview: React.FC<BudgetOverviewProps> = ({ transactions }) => {
  const totalIncome = transactions
    .filter((transaction) => transaction.type === 'Income')
    .reduce((acc, transaction) => acc + transaction.amount, 0);
  const totalExpenses = transactions
    .filter((transaction) => transaction.type === 'Expense')
    .reduce((acc, transaction) => acc + transaction.amount, 0);
  const balance = totalIncome - totalExpenses;

  return (
    <div className="my-4 p-4 bg-white shadow rounded-lg">
      <h2 className="text-lg font-semibold mb-2">Budget Overview</h2>
      <div className="flex justify-between">
        <div>
          <p>Total Income</p>
          <p className="text-green-500">${totalIncome}</p>
        </div>
        <div>
          <p>Total Expenses</p>
          <p className="text-red-500">${totalExpenses}</p>
        </div>
        <div>
          <p>Balance</p>
          <p className={`${balance >= 0 ? 'text-green-500' : 'text-red-500'}`}>${balance}</p>
        </div>
      </div>
    </div>
  );
};
