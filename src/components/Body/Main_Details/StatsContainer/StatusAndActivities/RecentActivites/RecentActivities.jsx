import React from "react";
import RecentActivitesHead from "./RecentActivitesHead/RecentActivitesHead";
import RecentActivitesBody from "./RecentActivitesBody/RecentActivitesBody";

const RecentActivities = () => {
  return (
    <div className="flex-1 bg-[#eeeff0] rounded-xl border-2 border-[#e3e6e7]">
      <RecentActivitesHead />
      <RecentActivitesBody />
    </div>
  );
};

export default RecentActivities;
