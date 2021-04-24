import React, { useState } from "react";
import Table from "./Table";
import Chart from "./Chart";
import { Container, Col, Row, Button } from "reactstrap";

const SalesData = () => {
  const [currentAgent, setCurrentAgent] = useState("");

  return (
    <Container>
      <Row color="primary">
        <h1 className="text-muted">Sales by agent: {currentAgent}</h1>
      </Row>
      <Row>
        <Col xl="6" lg="6" sm="12">
          <Table />
        </Col>
        <Col xl="6" lg="6" sm="12">
          <Chart />
        </Col>
      </Row>
    </Container>
  );
};

export default SalesData;
