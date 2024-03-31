import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Year", "Sales", "Expenses", "Profit"],
  ["2014", 1000, 400, 200],
  ["2015", 1170, 460, 250],
  ["2016", 660, 1120, 300],
  ["2017", 1030, 540, 350],
  ["2018", 1000, 400, 200],
  ["2019", 1170, 460, 250],
  ["2020", 660, 1120, 300],
  ["2021", 1030, 540, 350],
];

export const options = {
  chart: {
    title: "Company Performance",
    subtitle: "Sales, Expenses, and Profit: 2014-2021",
  },
  colors: ["rgb(0,101,255)", "rgb(37,11,165)", "rgb(131,181,55)"]
};

export default function BarChart() {
  return (
    <Chart
      chartType="Bar"
      width="100%"
      height="300px"
      data={data}
      options={options}
    />
  );
}
