import "./ChartBar.css";

const ChartBar = (props) => {
  let barFillHeight = "0%";

  if (props.maxValue > 0) {
    barFillHeight = calculateBarFillHeight(props.value, props.maxValue);
  }
  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div
          className="chart-bar__fill"
          style={{height: barFillHeight}}
        ></div>
      </div>
      <div className="chart-bar__label">{props.label}</div>
    </div>
  );
};

/**
 * Returns a String percentage representing how much of a chart ball should be filled
 */
function calculateBarFillHeight(value, maxValue) {
  return Math.round((value / maxValue) * 100) + "%";
}

export default ChartBar;
