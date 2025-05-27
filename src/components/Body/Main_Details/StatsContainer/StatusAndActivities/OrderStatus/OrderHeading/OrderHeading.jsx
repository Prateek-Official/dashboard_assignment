import OrderCandY from "./OrderCandY/OrderCandY";
import { years } from "../../../../../../../utils/constants";
import { useContext } from "react";
import { ThemeContext } from "../../../../../../ToggleTheme";

const OrderHeading = () => {
  const { isLight } = useContext(ThemeContext);
  return (
    <div
      className={
        "flex justify-between items-center px-[15px] py-4 border-b-2 " +
        (isLight ? "border-[#e3e6e7]" : "border-[#192939]")
      }
    >
      <h2 className="text-[20px] font-semibold flex-1">Order Status</h2>
      <div className="flex flex-1 gap-4 justify-end items-center text-[14px] font-semibold">
        <OrderCandY years={years} />
      </div>
    </div>
  );
};

export default OrderHeading;
