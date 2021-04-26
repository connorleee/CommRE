import React from "react";
import Header from "./components/Header";
import SalesData from "./components/SalesData";
import { Container, Row } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <Container>
        <Row className="mb-2">
          <Header />
        </Row>
        <Row>
          <SalesData />
        </Row>
      </Container>
    </div>
  );
}

export default App;
