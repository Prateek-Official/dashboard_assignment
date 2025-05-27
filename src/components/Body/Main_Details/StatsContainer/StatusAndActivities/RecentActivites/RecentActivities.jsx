import { useContext } from "react";
import RecentActivitesHead from "./RecentActivitesHead/RecentActivitesHead";
import RecentActivitiesBody2 from "./RecentActivitesBody/RecentActivitiesBody2";
import { ThemeContext } from "../../../../../ToggleTheme";

const RecentActivities = () => {
  const { isLight } = useContext(ThemeContext);

  return (
    <div
      className={
        "flex-1 rounded-xl border-2 " +
        (isLight
          ? "bg-[#eeeff0] border-[#e3e6e7] text-black"
          : "bg-[#010d19] border-[#192939] text-white")
      }
    >
      <RecentActivitesHead />
      <RecentActivitiesBody2 />
    </div>
  );
};

export default RecentActivities;
