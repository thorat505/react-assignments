import { useSelector } from "react-redux";
import StockChart from "../components/StockChart";
import StockGrid from "../components/StockGrid";
import type { RootState } from "../app/store";

const S1 = () => {
  const s1 = useSelector((state: RootState) => state.stock.s1);

  const min = Math.min(...s1);
  const max = Math.max(...s1);

  return (
    <div>
      <h2>S1 Stock</h2>

      <p>Min Value : {min}</p>
      <p>Max Value : {max}</p>

      <StockChart data={s1} />

      <br />

      <StockGrid data={s1} />
    </div>
  );
};

export default S1;
