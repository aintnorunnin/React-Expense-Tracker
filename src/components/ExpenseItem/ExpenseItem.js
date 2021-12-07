import Card from "../Card/Card";
import ExpenseDate from "../ExpenseDate/ExpenseDate";
import "./expenseItem.css";

const expenseItemClass = "expense-item";
const expenseItemDescriptionClass = "expense-item__description";
const expenseItemPrice = "expense-item__price";

function ExpenseItem(props) {
  return (
    <Card className={expenseItemClass}>
      <ExpenseDate date={props.date} />
      <div className={expenseItemDescriptionClass}>
        <h2>{props.title}</h2>
        <div className={expenseItemPrice}>${props.amount}</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;
