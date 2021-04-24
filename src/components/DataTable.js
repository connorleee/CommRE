import React, { useState, useEffect } from "react";
import { Table } from "reactstrap";

const DataTable = (props) => {
  const [tableData, setTableData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const data = await fetch("http://localhost:3001/agents").then((res) =>
        res.json()
      );

      setTableData(data);
    }

    fetchData();
  }, []);

  if (tableData === null) {
    return <h2>Loading Table...</h2>;
  }

  return (
    <div>
      <h2>Table</h2>
      <Table responsive>
        <thead>
          <tr>
            {Object.keys(tableData[0]).map((title, key) => {
              return <th key={key}>{title}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, key) => {
            return (
              <tr key={key} id={row.agent}>
                <td>{row.agent}</td>
                <td>{row.propertyType}</td>
                <td>{row.date}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default DataTable;
