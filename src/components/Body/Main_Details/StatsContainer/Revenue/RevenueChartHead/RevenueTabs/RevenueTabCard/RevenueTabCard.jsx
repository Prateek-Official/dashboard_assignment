import { useState, useContext } from "react";
import { ThemeContext } from "../../../../../../../ToggleTheme";

const RevenueTabCard = ({ tab, setCurrentTab, currentTab }) => {
  const { isLight } = useContext(ThemeContext);

  return (
    <div>
      <button
        className={
          "px-3 py-2 cursor-pointer " +
          (currentTab === tab
            ? (isLight ? "bg-white " : "bg-[#8478ff] text-black ") +
              "rounded-xl shadow-md"
            : "")
        }
        value={tab}
        onClick={(e) => setCurrentTab(e.target.value)}
      >
        {tab}
      </button>
    </div>
  );
};

export default RevenueTabCard;
