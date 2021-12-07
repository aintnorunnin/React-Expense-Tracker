import ExpenseItem from "../ExpenseItem/ExpenseItem";
import "./expenseList.css";

const ExpenseList = (props) => {
  if (props.filteredExpenses.length === 0) {
    return <h2 className="expense-list__fallback">No Expenses</h2>;
  }
  return (
    <ul className="expense-list">{displayContent(props.filteredExpenses)}</ul>
  );
};

function displayContent(expenses) {
  return expenses.map((expense) => (
    <ExpenseItem
      key={expense.id}
      date={new Date(expense.date)}
      title={expense.title}
      amount={expense.amount}
    />
  ));
}

export default ExpenseList;
