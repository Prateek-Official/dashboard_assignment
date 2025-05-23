import OrderHeading from "./OrderHeading/OrderHeading";
import OrderStats from "./OrderStats/OrderStats";

const OrderStatus = () => {
  return (
    <div className="flex-1 bg-[#eeeff0] border-2 border-[#e3e6e7] rounded-2xl">
      <OrderHeading />
      <OrderStats />
    </div>
  );
};

export default OrderStatus;
