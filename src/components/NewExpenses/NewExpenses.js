import React from "react";
import ExpensesForm from "./ExpensesForm";
import "./NewExpenses.css";

function NewExpenses({ onAddExpense }) {
  const onSaveDataHandler = (Data) => {
    const expenseData = {
      ...Data,
      id: Math.floor(Math.random()).toString(),
    };
    console.log(expenseData);
    onAddExpense(expenseData);
  };

  return (
    <div className="new-expense">
      <ExpensesForm onSaveData={onSaveDataHandler} />
    </div>
  );
}

export default NewExpenses;
