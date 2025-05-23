import { useState } from "react";
import { tabs } from "../../../../utils/constants";

const TabNavigation = () => {
  const [activeTab, setActiveTab] = useState("Dashboard");

  return (
    <div className="flex items-end">
      {tabs.map((tab) => {
        return (
          <button
            key={tab}
            className={`border-2 border-[#eeeff0] p-2 rounded-t-xl text-[14px] mr-1 min-w-[70px] inline-flex justify-center items-center border-b-0 ${
              activeTab === tab
                ? "text-[#5d51a9] text-[15px] font-semibold h-[45px] bg-white z-10"
                : "hover:text-[15px] hover:h-[45px]"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        );
      })}
    </div>
  );
};

export default TabNavigation;
