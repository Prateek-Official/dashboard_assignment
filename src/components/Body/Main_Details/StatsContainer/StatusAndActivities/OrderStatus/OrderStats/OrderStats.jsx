import React from "react";
import OrderData from "./OrderData/OrderData";
import OrderGraph from "./OrderGraph/OrderGraph";

const OrderStats = () => {
  return (
    <div className="flex">
        <OrderData />
        <OrderGraph />
    </div>
  );
};

export default OrderStats;
