import React from "react";
import { Chart } from "react-google-charts";

const DataChart = (props) => {
  let chartDataObject = {};
  let chartDataFormatted = [];

  if (props.chartData) {
    for (let i = 0; i < props.chartData.length; i++) {
      let property = props.chartData[i];

      if (chartDataObject[property]) {
        chartDataObject[property]++;
      } else {
        chartDataObject[property] = 1;
      }
    }

    for (const [key, value] of Object.entries(chartDataObject)) {
      chartDataFormatted.push([key, value]);
    }
  }

  return (
    <div>
      <Chart
        width={"500px"}
        height={"300px"}
        chartType="PieChart"
        loader={<div>Loading Chart</div>}
        data={[["Property-Type", "Sales"], ...chartDataFormatted]}
        options={{
          title: `Property-types sold by agent: ${props.agent}`,
        }}
        rootProps={{ "data-testid": "1" }}
      />
    </div>
  );
};

export default DataChart;
