// src/models/Transaction.ts
export interface Transaction {
    id: number;
    type: 'Income' | 'Expense';
    category: string;
    amount: number;
    description: string;
    date: string; // ISO 8601 format
  }
  