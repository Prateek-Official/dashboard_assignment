import { useContext } from "react";
import { MdTrendingUp, MdTrendingDown } from "react-icons/md";
import { ThemeContext } from "../../../../../ToggleTheme";

const LastMonthStatsCard = ({ last, pic }) => {
  const { heading, data, profitLoss, percent, update } = last;
  const { isLight } = useContext(ThemeContext);

  return (
    <div
      className={
        "w-[270px] rounded-2xl border-2 shadow-md overflow-hidden " +
        (isLight
          ? "bg-[#eeeff0] border-[#e3e6e7] text-black"
          : "bg-[#010d19] border-[#192939] text-white")
      }
    >
      <div className="flex flex-col min-h-[125px]">
        <div className="flex p-[20px] flex-1 items-center">
          <div className="border-2 border-[#b25f89] p-[5px] w-[60px] h-[60px] flex justify-center items-center rounded-lg text-[#b25f89]">
            {pic}
          </div>
          <div className="flex flex-col justify-between p-0 ml-[10px]">
            <p className="text-[14px]">{heading}</p>
            <p className="text-[24px] font-bold">{data}</p>
          </div>
        </div>
        <div
          className={
            "flex text-[12px] py-[8px] px-[20px] justify-between border-t-2 " +
            (isLight
              ? "bg-white border-[#e3e6e7]"
              : "bg-[#152330] border-[#192939]")
          }
        >
          <div
            className={
              "flex items-center gap-1 font-bold " +
              (profitLoss === "profit" ? "text-[#5cb57c]" : "text-[#832029]")
            }
          >
            {profitLoss === "profit" ? <MdTrendingUp /> : <MdTrendingDown />}
            <p>{percent}</p>
          </div>
          <p className="font-semibold">{update}</p>
        </div>
      </div>
    </div>
  );
};

export default LastMonthStatsCard;
