import { FiUser } from "react-icons/fi";
import { recentCustomerList } from "../../../../../../utils/constants";

const OrderDetails = () => {
  return (
    <>
      {recentCustomerList.map(
        ({ id, quantity, item, customer, channel, total, delivery }) => (
          <div
            key={Math.random()}
            className="flex border-b-2 border-[#e3e6e7] p-2 items-center text-[14px]"
          >
            <div className="flex-1">{id}</div>
            <div className="flex-1 flex gap-3">
              <p>{quantity}</p>
              <p>{item}</p>
            </div>
            <div className="flex-1">
              <span className="border-2 border-[#e3e6e7] inline-flex px-2 items-start rounded-lg bg-[#e9edef] shadow-md">
                {customer}
              </span>
            </div>
            <div className="flex-1 flex items-center gap-1.5">
              <div className="border rounded-full h-[20px] w-[20px] flex justify-center items-end text-[16px]">
                <FiUser />
              </div>
              <span>{channel}</span>
            </div>
            <div className="flex-1">$&nbsp;{total}</div>
            <div className="flex-1">{delivery}</div>
          </div>
        )
      )}
    </>
  );
};

export default OrderDetails;
