import RevenueChartHead from "./RevenueChartHead/RevenueChartHead";
import RevenueChartDetails from "./RevenueChartDetails/RevenueChartDetails";
import RevenueChart from "./RevenueChart/RevenueChart";
import RevenueChartYear from "./RevenueChartYear/RevenueChartYear";
import { ThemeContext } from "../../../../ToggleTheme";
import { useContext } from "react";

const Revenue = () => {
  const { isLight } = useContext(ThemeContext);

  return (
    <div
      className={
        "rounded-xl border-2 " +
        (isLight
          ? "bg-[#eeeff0] border-[#e3e6e7] text-black"
          : "bg-[#010d19] border-[#192939] text-white")
      }
    >
      <RevenueChartHead />
      <RevenueChartDetails />
      <RevenueChart />
      <RevenueChartYear />
    </div>
  );
};

export default Revenue;
