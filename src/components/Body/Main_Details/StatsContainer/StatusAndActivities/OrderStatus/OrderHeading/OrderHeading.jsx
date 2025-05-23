import OrderCandY from "./OrderCandY/OrderCandY";
import { years } from "../../../../../../../utils/constants";

const OrderHeading = () => {
  return (
    <div className="flex justify-between items-center px-[15px] py-4 border-b-2 border-[#e3e6e7]">
      <h2 className="text-[20px] font-semibold flex-1">Order Status</h2>
      <div className="flex flex-1 gap-4 justify-end items-center text-[14px] font-semibold">
        <OrderCandY years={years} />
      </div>
    </div>
  );
};

export default OrderHeading;
