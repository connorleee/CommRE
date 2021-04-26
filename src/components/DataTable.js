import React from "react";
import { Table } from "reactstrap";

const DataTable = (props) => {
  if (props.tableData === null) {
    return <h2>Loading Table...</h2>;
  }

  return (
    <div>
      <Table responsive>
        <thead>
          <tr>
            {Object.keys(props.tableData[0]).map((title, key) => {
              return (
                <th key={key}>
                  {title.charAt(0).toUpperCase() + title.slice(1)}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {props.tableData.map((row, key) => {
            return (
              <tr
                key={key}
                id={row.agent}
                onClick={(e) => {
                  props.setAgent(e.currentTarget.id);
                }}
              >
                <td>{row.agent}</td>
                <td>{row.sales}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default DataTable;
