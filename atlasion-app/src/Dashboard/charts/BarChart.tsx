import { Chart } from "react-google-charts";
import { options } from "./barchartOption";
import {data} from "./barchartData"

export default function BarChart() {
  return (
    <Chart
      chartType="Bar"
      width="100%"
      height="400px"
      data={data}
      options={options}
    />
  );
}
