import React, { useState } from "react";
import ExpensesList from "./components/Expenses/Expenses";
import Data from "./Data";
import NewExpense from "./components/NewExpenses/NewExpenses";

function App() {
  const [expenses, setExpenses] = useState(Data());

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };
  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler} />
      <ExpensesList expenses={expenses}></ExpensesList>
    </div>
  );
}

export default App;
