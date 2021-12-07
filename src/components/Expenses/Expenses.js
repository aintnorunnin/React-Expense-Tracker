import { useState } from "react";
import Card from "../Card/Card";
import ExpensesChart from "./ExpensesChart";
import ExpenseList from "../ExpenseList/ExpenseList";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import "./expenses.css";

const Expenses = (props) => {
  const [selectedYear, setDate] = useState("N/A");
  let expenses = getExpensesToDisplay(props.items, selectedYear);

  return (
    <Card className="expenses">
      <ExpensesFilter
        selectedYear={selectedYear}
        onFilter={filterDate(setDate)}
      />
      <ExpensesChart filteredExpenses={expenses} />
      <ExpenseList filteredExpenses={expenses} />
    </Card>
  );
};

function filterDate(setDate) {
  return (selectedYear) => {
    setDate(selectedYear);
  };
}

function getExpensesToDisplay(expenses, selectedYear) {
  return expenses.filter((expense) => {
    if (selectedYear === "N/A") return true;
    return expense.date.getFullYear().toString() === selectedYear;
  });
}

export default Expenses;
