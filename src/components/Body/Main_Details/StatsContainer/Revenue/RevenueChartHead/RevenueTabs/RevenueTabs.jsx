import { useState, useContext } from "react";
import RevenueTabCard from "./RevenueTabCard/RevenueTabCard";
import { ThemeContext } from "../../../../../../ToggleTheme";

const RevenueTabs = ({ revenueTabs }) => {
  const [currentTab, setCurrentTab] = useState(revenueTabs[0]);
  const { isLight } = useContext(ThemeContext);

  return (
    <div
      className={
        "rounded-xl border-1 shadow-xs flex " +
        (isLight ? "border-[#eeeff0] bg-[#e3e6e7]" : "border-[#192939]")
      }
    >
      {revenueTabs.map((tab) => (
        <RevenueTabCard
          key={tab}
          tab={tab}
          setCurrentTab={setCurrentTab}
          currentTab={currentTab}
        />
      ))}
    </div>
  );
};

export default RevenueTabs;
