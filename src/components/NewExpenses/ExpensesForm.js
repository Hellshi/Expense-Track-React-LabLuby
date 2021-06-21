import React, { useState } from "react";
import "./ExpensesForm.css";

function ExpensesForm({ onSaveData }) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [ButtonClass, setButtonClass] = useState("unselected");
  const [Class, setClass] = useState("new-expense__controls");

  const getTitleHandler = (e) => {
    setTitle(e.target.value);
  };

  const getAmountHandler = (e) => {
    setAmount(e.target.value);
  };

  const getDateHandler = (e) => {
    setDate(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newExpense = {
      title: title,
      amount: amount,
      Date: new Date(date),
    };
    onSaveData(newExpense);
    setTitle("");
    setAmount("");
    setDate("");
    setButtonClass("button-unselected");
    setClass("new-expense__controls");
  };

  const handleClick = () => {
    if (Class === "new-expense__controls") {
      setClass("new-expense__controls selected");
      setButtonClass("button-selected");
    } else {
      setClass("new-expense__controls");
    }
  };

  return (
    <div>
      <button onClick={handleClick} Class={ButtonClass}>
        Add an Expense
      </button>
      <form onSubmit={handleSubmit}>
        <div className={Class}>
          <div className="new-expense__control">
            <label>Title</label>
            <input type="text" onChange={getTitleHandler} value={title} />
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
            <input
              type="number"
              min="0.01"
              step="0.01"
              onChange={getAmountHandler}
              value={amount}
            />
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input
              type="date"
              min="2019-01-01"
              max="2022-12-31"
              onChange={getDateHandler}
              value={date}
            />
          </div>
          <div className="new-expense__actions">
            <button onClick={handleClick}>Cancel</button>
            <button type="submit">Add Expense</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ExpensesForm;
