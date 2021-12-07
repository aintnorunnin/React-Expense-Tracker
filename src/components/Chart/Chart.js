import "./Chart.css";
import ChartBar from "./ChartBar.js";

const Chart = (props) => {
  const dataPointValues = props.dataPoints.map((point) => point.value);
  const totalMax = Math.max(...dataPointValues);
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => {
        return <ChartBar
          key={dataPoint.label}
          label={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMax}
        />;
      })}
    </div>
  );
};

export default Chart;
