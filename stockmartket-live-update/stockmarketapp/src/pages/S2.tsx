import { useSelector } from "react-redux";
import { RootState } from "../app/store";
import StockChart from "../components/StockChart";
import StockGrid from "../components/StockGrid";

const S2 = () => {

  const s2 = useSelector((state: RootState) => state.stock.s2);

  const min = Math.min(...s2);
  const max = Math.max(...s2);

  return (
    <div>

      <h2>S2 Stock</h2>

      <p>Min Value : {min}</p>
      <p>Max Value : {max}</p>

      <StockChart data={s2} />

      <br />

      <StockGrid data={s2} />

    </div>
  );
};

export default S2;