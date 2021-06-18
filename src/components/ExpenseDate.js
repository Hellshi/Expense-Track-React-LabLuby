import "./ExpenseDate.css";
function ExpenseDate(props) {
  const Month = props.date.toLocaleString("pt-BR", { month: "long" });
  const Day = props.date.toLocaleString("pt-BR", { day: "2-digit" });
  const Year = props.date.getFullYear();

  return (
    <div className="expense-date">
      <div className="expense-date__day">{Day}</div>
      <div className="expense-date__month">{Month}</div>
      <div className="expense-date__year">{Year}</div>
    </div>
  );
}

export default ExpenseDate;
