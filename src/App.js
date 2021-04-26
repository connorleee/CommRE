import React from "react";
import Header from "./components/Header";
import SalesData from "./components/SalesData";
import { Container } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <Container>
        <Header />
        <SalesData />
      </Container>
    </div>
  );
}

export default App;
