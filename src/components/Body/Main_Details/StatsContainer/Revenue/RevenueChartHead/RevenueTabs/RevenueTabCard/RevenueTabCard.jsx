import { useState } from "react";

const RevenueTabCard = ({ tab, setCurrentTab, currentTab }) => {
  return (
    <div>
      <button
        className={
          "px-3 py-2 cursor-pointer" +
          (currentTab === tab ? " bg-white rounded-xl shadow-md" : "")
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
