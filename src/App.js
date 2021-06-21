import React, { useState } from "react";
import ExpensesList from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpenses/NewExpenses";

const DUMMY_EXPENSES = [
  {
    id: "a1",
    title: "AAAA",
    amount: 450,
    Date: new Date(2021, 5, 10),
  },

  {
    id: "a1",
    title: "AAAA",
    amount: 450,
    Date: new Date(2021, 5, 10),
  },

  {
    id: "a1",
    title: "AAAA",
    amount: 450,
    Date: new Date(2021, 5, 10),
  },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

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
