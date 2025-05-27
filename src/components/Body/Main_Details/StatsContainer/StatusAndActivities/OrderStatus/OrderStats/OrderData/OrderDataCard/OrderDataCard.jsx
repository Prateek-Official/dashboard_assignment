import { ThemeContext } from "../../../../../../../../ToggleTheme";
import { useContext } from "react";

const OrderDataCard = ({ left, right, leftIcon, rightIcon }) => {
  const { isLight } = useContext(ThemeContext);
  return (
    <div className="flex">
      <div
        className={
          "flex px-[15px] py-[35px] border-r-2 flex-1 " +
          (left.marginBot ? "border-b-2 " : "") +
          (isLight ? "border-[#e3e6e7]" : "border-[#192939]")
        }
      >
        <div className="text-[24px] flex items-start">{leftIcon}</div>
        <div className="flex flex-col justify-between gap-[1px] ml-2">
          <p className="text-[14px]">{left.heading}</p>
          <p className="text-[24px] font-semibold">{left.data}</p>
        </div>
      </div>

      <div
        className={
          "flex px-[15px] py-[35px] flex-1 " +
          (right.marginBot ? "border-b-2 " : "") +
          (isLight ? "border-[#e3e6e7]" : "border-[#192939]")
        }
      >
        <div className="text-[24px] flex items-start">{rightIcon}</div>
        <div className="flex flex-col justify-between gap-[1px] ml-2">
          <p className="text-[14px]">{right.heading}</p>
          <p className="text-[24px] font-semibold">{right.data}</p>
        </div>
      </div>
    </div>
  );
};

export default OrderDataCard;
