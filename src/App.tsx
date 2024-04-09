// src/App.tsx
import React, { useState } from 'react';
import { Transaction } from './models/Transaction';
import { AddTransactionForm } from './components/AddTransactionForm';
import { TransactionList } from './components/TransactionList';
import { CategoryInsights } from './components/CategoryInsights';

export const App: React.FC = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  const addTransaction = (transactionData: Omit<Transaction, 'id'>) => {
    const newTransaction: Transaction = { id: Date.now(), ...transactionData };
    setTransactions((prevTransactions) => [newTransaction, ...prevTransactions]);
  };

  const deleteTransaction = (id: number) => {
    setTransactions(transactions.filter(transaction => transaction.id !== id));
  };

  const editTransactionDescription = (id: number) => {
    const newDescription = prompt("Enter new description:");
    if (newDescription) {
      setTransactions(transactions.map(transaction =>
        transaction.id === id ? { ...transaction, description: newDescription } : transaction
      ));
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto py-8">
        <h1 className="text-2xl font-semibold text-center mb-6">Personal Budget Tracker</h1>
        <AddTransactionForm onAddTransaction={addTransaction} />
        <TransactionList 
          transactions={transactions} 
          onDeleteTransaction={deleteTransaction}
          onEditTransaction={editTransactionDescription} 
        />
        <CategoryInsights transactions={transactions} />
      </div>
    </div>
  );
};
