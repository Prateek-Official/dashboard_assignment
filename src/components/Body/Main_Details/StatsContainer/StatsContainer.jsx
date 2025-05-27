import LastMonthStats from "./LastMonthStats/LastMonthStats";
import StatusAndActivities from "./StatusAndActivities/StatusAndActivities";
import RecentOrders from "./RecentOrders/RecentOrders";
import Revenue from "./Revenue/Revenue";
import { ThemeContext } from "../../../ToggleTheme";
import { useContext } from "react";

const StatsContainer = () => {
  const { isLight } = useContext(ThemeContext);

  return (
    <div
      className={
        "rounded-b-xl border-2 border-t-0 px-2 py-4 " +
        (isLight
          ? "bg-white border-[#eeeff0]"
          : "bg-[#152330] border-[#192939]")
      }
    >
      <LastMonthStats />
      <StatusAndActivities />
      <RecentOrders />
      <Revenue />
    </div>
  );
};

export default StatsContainer;
