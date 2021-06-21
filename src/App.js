import ExpensesList from "./components/Expenses/Expenses";
import Data from "./Data";

function App() {
  return (
    <div className="App">
      <ExpensesList expenses={Data()}></ExpensesList>
    </div>
  );
}

export default App;
