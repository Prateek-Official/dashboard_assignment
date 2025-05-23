import RevenueChartHead from "./RevenueChartHead/RevenueChartHead";
import RevenueChartDetails from "./RevenueChartDetails/RevenueChartDetails";
import RevenueChart from "./RevenueChart/RevenueChart";
import RevenueChartYear from "./RevenueChartYear/RevenueChartYear";

const Revenue = () => {
  return (
    <div className="bg-[#eeeff0] rounded-xl border-2 border-[#e3e6e7]">
      <RevenueChartHead />
      <RevenueChartDetails />
      <RevenueChart />
      <RevenueChartYear />
    </div>
  );
};

export default Revenue;
