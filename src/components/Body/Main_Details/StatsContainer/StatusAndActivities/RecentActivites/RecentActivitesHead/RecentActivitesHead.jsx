import { useContext } from "react";
import RevenueTabs from "../../../Revenue/RevenueChartHead/RevenueTabs/RevenueTabs";
import { ThemeContext } from "../../../../../../ToggleTheme";

const recentActivitiesTab = ["Message", "Email"];

const RecentActivitesHead = () => {
  const { isLight } = useContext(ThemeContext);

  return (
    <div
      className={
        "flex items-center justify-between px-[15px] py-3.5 border-b-2 " +
        (isLight ? "border-[#e3e6e7]" : "border-[#192939]")
      }
    >
      <h2 className="text-[20px] font-semibold">Recent Activities</h2>
      <RevenueTabs revenueTabs={recentActivitiesTab} />
    </div>
  );
};

export default RecentActivitesHead;
