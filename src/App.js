import React from "react";
import ExpensesList from "./components/Expenses/Expenses";
import Data from "./Data";
import NewExpense from "./components/NewExpenses/NewExpenses";

function App() {
  const onAddExpense = (expense) => {
    console.log("In App.js");
    console.log(expense);
  };

  return (
    <div className="App">
      <NewExpense onAddExpense={onAddExpense} />
      <ExpensesList expenses={Data()}></ExpensesList>
    </div>
  );
}

export default App;
