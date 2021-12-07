import { useState } from "react";
import "./expenseForm.css";

const emptyInput = { title: "", date: "", amount: "" };

const ExpenseForm = (props) => {
  const newExpenseControlClass = "new-expense_control";
  const [userInput, setUserInput] = useState(emptyInput);

  return (
    <form onSubmit={submitHandler(props, userInput, setUserInput)}>
      <div className="new-expense__controls">
        <div className={newExpenseControlClass}>
          <label>Title</label>
          <input
            type="text"
            value={userInput.title}
            onChange={titleChangeHandler(setUserInput)}
          />
        </div>
        <div className={newExpenseControlClass}>
          <label>Date</label>
          <input
            type="date"
            value={userInput.date.toString()}
            min="2018-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler(setUserInput)}
          />
        </div>
        <div className={newExpenseControlClass}>
          <label>Amount</label>
          <input
            type="number"
            value={userInput.amount}
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler(setUserInput)}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

function submitHandler(props, userInput, setUserInput) {
  return (event) => {
    event.preventDefault();
    props.onSavedUserInput(userInput);
    setUserInput(emptyInput);
  };
}

function titleChangeHandler(setUserInput) {
  return (event) => {
    setUserInput((prevState) => {
      return { ...prevState, title: event.target.value };
    });
  };
}

function dateChangeHandler(setUserInput) {
  return (event) => {
    setUserInput((prevState) => {
      return { ...prevState, date: event.target.value };
    });
  };
}

function amountChangeHandler(setUserInput) {
  return (event) => {
    setUserInput((prevState) => {
      return { ...prevState, amount: event.target.value };
    });
  };
}

export default ExpenseForm;
