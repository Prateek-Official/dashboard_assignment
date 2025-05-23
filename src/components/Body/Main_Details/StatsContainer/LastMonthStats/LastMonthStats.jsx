import { useState } from "react";
import LastMonthStatsCard from "./LastMonthStatsCard/LastMonthStatsCard";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { lastMonthData, cardsPerPage } from "../../../../../utils/constants";
import { icons } from "../../../../../utils/icons";

const LastMonthStats = () => {
  const [startIndex, setStartIndex] = useState(0);

  const handleNext = () => {
    if (startIndex + cardsPerPage < lastMonthData.length) {
      setStartIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex((prev) => prev - 1);
    }
  };

  const visibleData = lastMonthData.slice(
    startIndex,
    startIndex + cardsPerPage
  );

  return (
    <div className="flex gap-2.5 justify-center items-center">
      <button
        onClick={handlePrev}
        className="w-[25px] h-[25px] shadow-lg text-[12px] flex justify-center items-center cursor-pointer border-2 border-[#e3e6e7] rounded-full hover:bg-black hover:text-white"
      >
        <FaChevronLeft />
      </button>
      <div className="flex gap-2.5">
        {visibleData.map((last) => {
          return <LastMonthStatsCard key={last.id} last={last} pic={icons[last.icon]} />;
        })}
      </div>

      <button
        className="w-[25px] h-[25px] text-[12px] shadow-lg flex justify-center items-center cursor-pointer border-2 border-[#e3e6e7] rounded-full hover:bg-black hover:text-white"
        onClick={handleNext}
        disabled={startIndex + cardsPerPage >= lastMonthData.length}
      >
        <FaChevronRight />
      </button>
    </div>
  );
};

export default LastMonthStats;
