import React from 'react';
import { Transaction } from '../models/Transaction';

interface CategoryInsightsProps {
  transactions: Transaction[];
}

export const CategoryInsights: React.FC<CategoryInsightsProps> = ({ transactions }) => {
  const expenseTransactions = transactions.filter(t => t.type === 'Expense');
   // Initialize an empty object to hold category sums
  let expensesByCategory: Record<string, number> = {};
  // Step 3: Iterate over each expense transaction and accumulate amounts by category
  expenseTransactions.forEach(transaction => {
    if (expensesByCategory[transaction.category]) {
      // If the category already exists, add the current transaction amount to it
      expensesByCategory[transaction.category] += transaction.amount;
    } else {
      // If the category doesn't exist, create it and set its value to the current transaction amount
      expensesByCategory[transaction.category] = transaction.amount;
    }
  });

  // Convert the expensesByCategory object into an array of entries to map over in the JSX
  const expensesEntries = Object.entries(expensesByCategory);

  return (
    <div className="my-4 p-4 bg-white shadow rounded-lg">
      <h2 className="text-lg font-semibold mb-4">Expenses by Category</h2>
      {expensesEntries.length > 0 ? (
        expensesEntries.map(([category, amount]) => (
          <div key={category} className="mb-2">
            <div className="flex justify-between">
              <span className="text-sm font-medium text-gray-700">{category}</span>
              <span className="text-sm font-medium text-gray-700">${amount.toFixed(2)}</span>
            </div>
          </div>
        ))
      ) : (
        <p className="text-center text-gray-500">No expenses recorded.</p>
      )}
    </div>
  );
};
