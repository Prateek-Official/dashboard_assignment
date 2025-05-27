import { useState, useContext } from "react";
import { tabs } from "../../../../utils/constants";
import { ThemeContext } from "../../../ToggleTheme";

const TabNavigation = () => {
  const [activeTab, setActiveTab] = useState("Dashboard");
  const { isLight } = useContext(ThemeContext);

  return (
    <div className="flex items-end">
      {tabs.map((tab) => {
        const isActive = activeTab === tab;
        return (
          <button
            key={tab}
            className={
              "border-2 p-2 rounded-t-xl text-[14px] mr-1 min-w-[70px] inline-flex justify-center items-center border-b-0 cursor-pointer " +
              (isActive
                ? "text-[#5d51a9] text-[15px] font-semibold h-[45px] "
                : isLight && !isActive
                ? "text-black "
                : "text-white ") +
              (isActive && isLight
                ? "bg-white "
                : isActive & !isLight
                ? "bg-[#152330] "
                : " ") +
              (isLight ? "border-[#eeeff0] " : "border-[#192939] ") +
              (!isActive ? "hover:text-[15px] hover:h-[45px]" : "")
            }
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
