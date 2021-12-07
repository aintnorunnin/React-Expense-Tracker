import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const INITIAL_EXPENSES = [
  {
    id: 0,
    title: "Car Insurance",
    amount: 200,
    date: new Date(2021, 2, 28),
  },
  {
    id: 1,
    title: "Dental Insurance",
    amount: 100,
    date: new Date(2020, 0, 1),
  },
  {
    id: 2,
    title: "Health Insurance",
    amount: 500,
    date: new Date(2019, 1, 18),
  },
];

function App() {
  const [expenses, setExpenses] = useState(INITIAL_EXPENSES);

  return (
    <div>
      <NewExpense onNewExpense={addNewExpense(setExpenses)} />
      <Expenses
        items={expenses}
      />
    </div>
  );
}

function addNewExpense(setExpenses) {
  return (newExpense) => {
    setExpenses((prevExpenses) => {
      return [newExpense, ...prevExpenses];
    });
  };
}

export default App;
