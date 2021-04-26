import React from "react";
import Header from "./components/Header";
import SalesData from "./components/SalesData";
import { Container, Row } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <Container fluid="md">
        <Row className="mb-2 ml-2 mr-2">
          <Header />
        </Row>
        <Row className="mx-2">
          <SalesData />
        </Row>
      </Container>
    </div>
  );
}

export default App;
