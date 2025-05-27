import { ThemeContext } from "../../../../../ToggleTheme";
import { useContext } from "react";

const RevenueChartYear = () => {
  const { isLight } = useContext(ThemeContext);
  return (
    <div className="flex justify-center items-center gap-1.5 my-[15px]">
      <div
        className={
          "h-1 w-1 rounded-full mt-1 " + (isLight ? "bg-black" : "bg-white")
        }
      ></div>
      <p className="text-[13px]">2023</p>
    </div>
  );
};

export default RevenueChartYear;
