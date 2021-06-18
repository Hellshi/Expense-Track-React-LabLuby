import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

function Expenses(props) {
  return (
    <div className="expenses">
      {props.expenses.map((item) => {
        return (
          <ExpenseItem
            title={item.title}
            amount={item.amount}
            date={item.Date}
          ></ExpenseItem>
        );
      })}
    </div>
  );
}

export default Expenses;
