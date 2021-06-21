import React from "react";
import Chart from "../Chart/Chart";

function ExpensesChart({ expenses }) {
  const charDataPoints = [
    { label: "Jan", value: 0 },
    { label: "Feb", value: 0 },
    { label: "Mar", value: 0 },
    { label: "Abr", value: 0 },
    { label: "Mai", value: 0 },
    { label: "Jun", value: 0 },
    { label: "Jul", value: 0 },
    { label: "Ago", value: 0 },
    { label: "Set", value: 0 },
    { label: "Out", value: 0 },
    { label: "Nov", value: 0 },
    { label: "Dez", value: 0 },
  ];

  for (const expense of expenses) {
    const expenseMonth = expense.Date.getMonth();
    charDataPoints[expenseMonth].value += expense.amount;
  }
  return <Chart dataPoints={charDataPoints} />;
}

export default ExpensesChart;
