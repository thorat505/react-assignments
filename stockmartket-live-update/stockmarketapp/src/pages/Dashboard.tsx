import { useSelector } from "react-redux";
import { ColDef } from "ag-grid-community";

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import type { RootState } from "../app/store";
import { AgGridReact } from "ag-grid-react";

const Dashboard = () => {
  const { s1, s2 } = useSelector((state: RootState) => state.stock);

  const rowData = s1.map((value, index) => ({
    id: index + 1,
    s1: value,
    s2: s2[index],
  }));

  const columnDefs: ColDef[] = [
    { headerName: "ID", field: "id", width: 90 },
    { headerName: "Stock S1", field: "s1", width: 150 },
    { headerName: "Stock S2", field: "s2", width: 150 },
  ];

  // statistics
  const all = [...s1, ...s2];

  const min = Math.min(...all);
  const max = Math.max(...all);
  const avg = Math.floor(all.reduce((a, b) => a + b, 0) / all.length);

  return (
    <div>
      <h2>Dashboard</h2>

      <p>Min : {min}</p>
      <p>Max : {max}</p>
      <p>Average : {avg}</p>

      <div className="ag-theme-alpine" style={{ height: 400, width: 400 }}>
        <AgGridReact rowData={rowData} columnDefs={columnDefs} />
      </div>
    </div>
  );
};

export default Dashboard;
