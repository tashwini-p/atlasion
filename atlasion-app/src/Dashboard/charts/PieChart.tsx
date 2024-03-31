import { Chart } from "react-google-charts";
import options from "./piechartOptions"
import {data} from "./piechartData"

export default function PieChart() {
  return (
    <Chart
      chartType="PieChart"
      width="100%"
      height="400px"
      data={data}
      options={options}
    />
  );
}
