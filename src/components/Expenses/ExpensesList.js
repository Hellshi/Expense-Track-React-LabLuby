import React from "react";
import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";

function ExpensesList({ item }) {
  if (item.length === 0) {
    return <p className="expenses-list__fallback">No expenses found</p>;
  }

  return (
    <ul className="expenses-list">
      {item.map((item) => (
        <ExpenseItem
          key={item.id}
          title={item.title}
          amount={item.amount}
          date={item.Date}
        />
      ))}
    </ul>
  );
}
export default ExpensesList;
