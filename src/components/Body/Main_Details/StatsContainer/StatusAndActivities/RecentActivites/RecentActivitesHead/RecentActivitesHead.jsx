import React from "react";
import RevenueTabs from "../../../Revenue/RevenueChartHead/RevenueTabs/RevenueTabs";

const recentActivitiesTab = ["Message", "Email"];

const RecentActivitesHead = () => {
  return (
    <div className="flex items-center justify-between px-[15px] py-3.5 border-b-2 border-[#e3e6e7] ">
      <h2 className="text-[20px] font-semibold">
        Recent Orders
      </h2>
        <RevenueTabs revenueTabs={recentActivitiesTab} />
    </div>
  );
};

export default RecentActivitesHead;
