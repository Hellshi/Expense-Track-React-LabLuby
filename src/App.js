import ExpensesList from "./components/Expenses";

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
      <ExpensesList expenses={Expenses}></ExpensesList>
    </div>
  );
}

export default App;
