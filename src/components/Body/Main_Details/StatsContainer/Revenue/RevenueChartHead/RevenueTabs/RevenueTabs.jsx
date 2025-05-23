import { useState } from "react";
import RevenueTabCard from "./RevenueTabCard/RevenueTabCard";

const RevenueTabs = ({ revenueTabs }) => {
  const [currentTab, setCurrentTab] = useState(revenueTabs[0]);
  return (
    <div className="bg-[#e3e6e7] rounded-xl border-2 border-[#eeeff0] shadow-xs flex">
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
