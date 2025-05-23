import OrderDataCard from "./OrderDataCard/OrderDataCard";
import { orderData } from "../../../../../../../../utils/constants";
import { orderIcons } from "../../../../../../../../utils/icons";

const OrderData = () => {
  const left = orderData.slice(0, 3);
  const right = orderData.slice(3);
  const cards = [];

  for (let i = 0; i < 3; i++) {
    cards.push(
      <OrderDataCard
        key={Math.random()}
        left={left[i]}
        right={right[i]}
        leftIcon={orderIcons[left[i]?.icon]}
        rightIcon={orderIcons[right[i]?.icon]}
      />
    );
  }

  return <div className="flex-1">{cards}</div>;
};

export default OrderData;
