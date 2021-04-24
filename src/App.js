import Header from "./components/Header";
import Table from "./components/Table";
import Chart from "./components/Chart";

function App() {
  return (
    <div className="App">
      <Header />
      <div>
        <span>Table/Chart area</span>
        <div>
          <Table />
          <Chart />
        </div>
      </div>
    </div>
  );
}

export default App;
