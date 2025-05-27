import { useState, useContext } from "react";
import LastMonthStatsCard from "./LastMonthStatsCard/LastMonthStatsCard";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { lastMonthData, cardsPerPage } from "../../../../../utils/constants";
import { icons } from "../../../../../utils/icons";
import { ThemeContext } from "../../../../ToggleTheme";

const LastMonthStats = () => {
  const [startIndex, setStartIndex] = useState(0);
  const { isLight } = useContext(ThemeContext);

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
        disabled={startIndex === 0}
        className={
          "w-[25px] h-[25px] shadow-lg text-[12px] flex justify-center items-center cursor-pointer border-2 rounded-full hover:bg-black hover:text-white" +
          (isLight
            ? "bg-[#eeeff0] border-[#e3e6e7] text-black"
            : "bg-[#010d19] border-[#192939] text-white")
        }
      >
        <FaChevronLeft />
      </button>
      <div className="flex gap-2.5">
        {visibleData.map((last) => {
          return (
            <LastMonthStatsCard
              key={last.id}
              last={last}
              pic={icons[last.icon]}
            />
          );
        })}
      </div>

      <button
        className={
          "w-[25px] h-[25px] shadow-lg text-[12px] flex justify-center items-center cursor-pointer border-2 rounded-full hover:bg-black hover:text-white" +
          (isLight
            ? "bg-[#eeeff0] border-[#e3e6e7] text-black"
            : "bg-[#010d19] border-[#192939] text-white")
        }
        onClick={handleNext}
        disabled={startIndex + cardsPerPage >= lastMonthData.length}
      >
        <FaChevronRight />
      </button>
    </div>
  );
};

export default LastMonthStats;
