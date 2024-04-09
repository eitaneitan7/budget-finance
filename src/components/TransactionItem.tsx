// src/components/TransactionItem.tsx
import React from 'react';
import { Transaction } from '../models/Transaction';

interface TransactionItemProps {
  transaction: Transaction;
  onDeleteTransaction: (id: number) => void;
  onEditTransaction: (id: number) => void;
}

export const TransactionItem: React.FC<TransactionItemProps> = ({
  transaction,
  onDeleteTransaction,
  onEditTransaction,
}) => {
  return (
    <li className={`flex justify-between items-center p-4 ${transaction.type === 'Expense' ? 'bg-red-100' : 'bg-green-100'}`}>
      <div>
        <p className="text-lg">{transaction.description}</p>
        <p className="text-sm">{transaction.category} - {transaction.date}</p>
      </div>
      <div className="flex items-center">
        <span className="font-bold">{transaction.amount}₪</span>
        <button
          onClick={() => onEditTransaction(transaction.id)}
          className="ml-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded"
        >
          Edit
        </button>
        <button
          onClick={() => onDeleteTransaction(transaction.id)}
          className="ml-4 bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
        >
          Delete
        </button>
      </div>
    </li>
  );
};
