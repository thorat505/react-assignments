import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

interface Props {
  data: number[];
}

function StockChart({ data }: Props) {
  const options = {
    title: { text: "Stock Data" },
    series: [
      {
        type: "line",
        data: [...data],
      },
    ],
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
}

export default StockChart;
