import React, { useState, useEffect } from "react";
import DataTable from "./DataTable";
import DataChart from "./DataChart";
import { Container, Col, Row } from "reactstrap";

const SalesData = () => {
  const [currentAgent, setCurrentAgent] = useState("");
  const [tableData, setTableData] = useState(null);
  const [chartData, setChartData] = useState(null);

  // fetch tableData on page load
  useEffect(() => {
    async function fetchData() {
      const data = await fetch("http://localhost:3001/agents").then((res) =>
        res.json()
      );

      //map of objects -> {agent: [properties]}
      let map = {};

      //loop through data and populate map to condense data into relavent data structure (this would usually be done with a database query since databases can optimize better)
      for (let i = 0; i < data.length; i++) {
        if (map[data[i].agent]) {
          map[data[i].agent].push(data[i].propertyType);
        } else {
          map[data[i].agent] = [data[i].propertyType];
        }
      }

      let condensedData = [];

      for (const [agent, sales] of Object.entries(map)) {
        condensedData.push({
          agent: agent.charAt(0).toUpperCase() + agent.slice(1),
          sales: sales.length,
        });
      }

      await setTableData(condensedData);
    }

    fetchData();
  }, []);

  //update current agent after table data is retrieved
  useEffect(() => {
    if (tableData) setCurrentAgent(tableData[0].agent);
  }, [tableData]);

  //fetch property sales to load into chart Data on currentAgent update
  useEffect(() => {
    async function fetchData() {
      const data = await fetch(
        "http://localhost:3001/property-sales"
      ).then((res) => res.json());

      //map of objects -> {agent: [properties]}
      let map = {};

      //loop through data and populate map to condense data into relavent data structure (this would usually be done with a database query since databases can optimize better)
      for (let i = 0; i < data.length; i++) {
        if (map[data[i].agent]) {
          map[data[i].agent].push(data[i].propertyType);
        } else {
          map[data[i].agent] = [data[i].propertyType];
        }
      }

      setChartData(map[currentAgent.toLowerCase()]);
    }

    fetchData();
  }, [currentAgent]);

  //this useEffect is only to demonstrate fetching data from the /property-types endpoint. this data is not utilized in the application
  useEffect(() => {
    async function fetchPropertyTypes() {
      const data = await fetch(
        "http://localhost:3001/property-types"
      ).then((res) => res.json());

      let propertyTypes = new Set();

      for (let i = 0; i < data.length; i++) {
        let propertyType = data[i].propertyType;
        propertyTypes.add(propertyType);
      }

      //   console.log(`Propert Types:`, propertyTypes);
    }

    fetchPropertyTypes();
  }, []);

  return (
    <Container fluid="md">
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
