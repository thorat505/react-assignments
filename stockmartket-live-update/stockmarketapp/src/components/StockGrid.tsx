import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { AgGridReact } from "ag-grid-react";
import type { ColDef } from "ag-grid-community";

interface Props {
  data: number[];
}

interface RowData {
  id: number;
  value: number;
}

const StockGrid = ({ data }: Props) => {
  const rowData: RowData[] = data.map((value, index) => ({
    id: index + 1,
    value: value,
  }));

  const columnDefs: ColDef[] = [
    { headerName: "ID", field: "id", width: 100 },
    { headerName: "Value", field: "value", width: 150 },
  ];

  return (
    <div className="ag-theme-alpine" style={{ height: 300, width: 300 }}>
      <AgGridReact rowData={rowData} columnDefs={columnDefs} />
    </div>
  );
};

export default StockGrid;
