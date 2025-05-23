import OrderCandY from "../../StatusAndActivities/OrderStatus/OrderHeading/OrderCandY/OrderCandY";
import { months } from "../../../../../../utils/constants";
import { revenueTabs } from "../../../../../../utils/constants";
import RevenueTabs from "./RevenueTabs/RevenueTabs";

const RevenueChartHead = () => {
  return (
    <div className="flex border-b-2 border-[#e3e6e7] px-2 py-4">
      <RevenueTabs revenueTabs={revenueTabs} />

      <div className="flex flex-1 gap-4 justify-end items-center text-[14px] font-semibold">
        <OrderCandY years={months} />
      </div>
    </div>
  );
};

export default RevenueChartHead;
