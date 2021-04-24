import React, { useState } from "react";
import Table from "./Table";
import Chart from "./Chart";
import { Container, Col, Row, Button } from "reactstrap";

const SalesData = () => {
  const [currentAgent, setCurrentAgent] = useState("");

  return (
    <Container>
      <Row className="bg-dark pl-2 pr-2">
        <h3 className="text-white">Sales by agent: {currentAgent}</h3>
      </Row>
      <Row>
        <Col xl="6" lg="6" sm="12">
          <Table setAgent={setCurrentAgent} />
        </Col>
        <Col xl="6" lg="6" sm="12">
          <Chart />
        </Col>
      </Row>
    </Container>
  );
};

export default SalesData;
