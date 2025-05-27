import RecentOrdersHeading from "./RecentOrdersHeading/RecentOrdersHeading";
import OrderDetails from "./OrderDetails/OrderDetails";
import MoreOrderDetails from "./MoreOrderDetails/MoreOrderDetails";
import { ThemeContext } from "../../../../ToggleTheme";
import { useContext } from "react";

const RecentOrders = () => {
  const { isLight } = useContext(ThemeContext);

  return (
    <div
      className={
        "my-[15px] rounded-xl border-2  " +
        (isLight
          ? "bg-[#eeeff0] border-[#e3e6e7] text-black"
          : "bg-[#010d19] border-[#192939] text-white")
      }
    >
      <RecentOrdersHeading />
      <OrderDetails />
      <MoreOrderDetails />
    </div>
  );
};

export default RecentOrders;
