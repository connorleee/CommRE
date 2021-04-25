import React, { useState, useEffect } from "react";
import DataTable from "./DataTable";
import DataChart from "./DataChart";
import { Container, Col, Row, Button } from "reactstrap";

const SalesData = () => {
  const [currentAgent, setCurrentAgent] = useState("");
  const [tableData, setTableData] = useState(null);
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const data = await fetch("http://localhost:3001/agents").then((res) =>
        res.json()
      );

      console.log(data);

      //table data
      //create map -> key = name, value = int (number of occurances)
      let map = {};

      //loop through data and populate map (this would usually be done with a database query)
      for (let i = 0; i < data.length; i++) {
        if (map[data[i].agent]) {
          map[data[i].agent]++;
        } else {
          map[data[i].agent] = 1;
        }
      }

      console.log(map);

      let condensedData = [];

      for (const [agent, sales] of Object.entries(map)) {
        condensedData.push({
          agent: agent.charAt(0).toUpperCase() + agent.slice(1),
          sales,
        });
      }

      console.log(condensedData);
      //setTableData by looping through object and making an array of

      setTableData(condensedData);
    }

    fetchData();
  }, []);

  return (
    <Container>
      <Row className="bg-dark pl-2 pr-2">
        <h3 className="text-white">Sales by agent: {currentAgent}</h3>
      </Row>
      <Row>
        <Col xl="6" lg="6" sm="12">
          <DataTable tableData={tableData} setAgent={setCurrentAgent} />
        </Col>
        <Col xl="6" lg="6" sm="12">
          <DataChart agent={currentAgent} chartData={chartData} />
        </Col>
      </Row>
    </Container>
  );
};

export default SalesData;
