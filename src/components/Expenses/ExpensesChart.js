import Chart from "../Chart/Chart.js";

const ExpensesChart = (props) => {
  const chartPoints = [
    { label: "Jan", value: 0 },
    { label: "Feb", value: 0 },
    { label: "Mar", value: 0 },
    { label: "Apr", value: 0 },
    { label: "May", value: 0 },
    { label: "Jun", value: 0 },
    { label: "Jul", value: 0 },
    { label: "Aug", value: 0 },
    { label: "Sep", value: 0 },
    { label: "Oct", value: 0 },
    { label: "Nov", value: 0 },
    { label: "Dec", value: 0 },
  ];
  calculateMonthlyValue(props.filteredExpenses, chartPoints)
  return <Chart dataPoints={chartPoints} />;
};

function calculateMonthlyValue(expenses, chartPoints) {
  for (const expense of expenses) {
    const month = expense.date.getMonth(); //Starting at 0. 0 = January
    chartPoints[month].value += expense.amount;
  }
}
export default ExpensesChart;
