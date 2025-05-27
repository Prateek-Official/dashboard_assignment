import { recentOrderHeadDetails } from "../../../../../../utils/constants";
import { ThemeContext } from "../../../../../ToggleTheme";
import { useContext } from "react";

const RecentOrdersHeading = () => {
  const { isLight } = useContext(ThemeContext);

  return (
    <div className="overflow-hidden">
      <h2
        className={
          "text-[20px] font-semibold border-b-2 px-2 py-4 " +
          (isLight ? "border-[#e3e6e7]" : "border-[#192939]")
        }
      >
        Recent Orders
      </h2>
      <div
        className={
          "flex text-[12px] overflow-hidden p-2 border-b-2 " +
          (isLight
            ? "bg-white border-[#e3e6e7]"
            : "bg-[#152330] border-[#192939]")
        }
      >
        {recentOrderHeadDetails.map((order) => {
          return (
            <div key={Math.random()} className="flex-1">
              {order}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RecentOrdersHeading;
