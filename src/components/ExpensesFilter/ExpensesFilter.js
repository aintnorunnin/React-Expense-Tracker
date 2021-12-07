import "./expensesFilter.css";

const ExpensesFilter = (props) => {
  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select value={props.selectedYear} onChange={selectHandler(props)}>
          <option value="N/A">N/A</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

function selectHandler(props) {
  return (event) => {
    props.onFilter(event.target.value);
  };
}

export default ExpensesFilter;
