import React from "react";
import RecentActivitesHead from "./RecentActivitesHead/RecentActivitesHead";
import RecentActivitiesBody2 from "./RecentActivitesBody/RecentActivitiesBody2"

const RecentActivities = () => {
  return (
    <div className="flex-1 bg-[#eeeff0] rounded-xl border-2 border-[#e3e6e7]">
      <RecentActivitesHead />
      <RecentActivitiesBody2 />
    </div>
  );
};

export default RecentActivities;
