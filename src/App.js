import ExpenseItem from "./components/ExpenseItem";

function App() {
  const Expenses = [
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

  return (
    <div className="App">
      {Expenses.map((item) => {
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

export default App;
