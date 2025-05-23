import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { doughnutData, doughnutOptions } from "../../../../../../../../utils/constants";

ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

const OrderGraph = () => {
  return (
    <div className="flex-1 flex justify-center">
      <div className="flex justify-center items-center w-60 h-full relative">
        <Doughnut data={doughnutData} options={doughnutOptions} />
        <p className="font-semibold text-[28px] top-[172px] left-[100px] absolute">
          250
        </p>
      </div>
    </div>
  );
};

export default OrderGraph;
