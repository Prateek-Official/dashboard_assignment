import OrderHeading from "./OrderHeading/OrderHeading";
import OrderStats from "./OrderStats/OrderStats";
import { useContext } from "react";
import { ThemeContext } from "../../../../../ToggleTheme";

const OrderStatus = () => {
  const { isLight } = useContext(ThemeContext);

  return (
    <div
      className={
        "flex-1 border-2 rounded-2xl " +
        (isLight
          ? "bg-[#eeeff0] border-[#e3e6e7] text-black"
          : "bg-[#010d19] border-[#192939] text-white")
      }
    >
      <OrderHeading />
      <OrderStats />
    </div>
  );
};

export default OrderStatus;
