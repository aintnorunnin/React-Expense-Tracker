import { useState } from "react";
import Card from "../Card/Card";
import ExpenseForm from "./ExpenseForm";
import "./newExpense.css";

const NewExpense = (props) => {
  const [isFormVisible, setVisibility] = useState(false);
  const enableForm = () => setVisibility(true);
  const disableForm = () => setVisibility(false);

  return (
    <Card className="new-expense">
      {!isFormVisible && <button onClick={enableForm}>Add Expense</button>}

      {isFormVisible && (
        <ExpenseForm
          onSavedUserInput={savedUserInput(props, setVisibility)}
          onCancel={disableForm}
        />
      )}
    </Card>
  );
};

function savedUserInput(props, setVisibility) {
  return (userInput) => {
    const expenseData = {
      ...userInput,
      id: Math.random().toString(),
      date: new Date(userInput.date),
    };
    props.onNewExpense(expenseData);
    setVisibility(false);
  };
}

export default NewExpense;
