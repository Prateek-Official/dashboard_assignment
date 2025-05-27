import { FiUser } from "react-icons/fi";
import { recentCustomerList } from "../../../../../../utils/constants";
import { ThemeContext } from "../../../../../ToggleTheme";
import { useContext } from "react";

const OrderDetails = () => {
  const { isLight } = useContext(ThemeContext);
  return (
    <>
      {recentCustomerList.map(
        ({ id, quantity, item, customer, channel, total, delivery }) => (
          <div
            key={Math.random()}
            className={
              "flex border-b-2 p-2 items-center text-[14px] " +
              (isLight ? "border-[#e3e6e7]" : "border-[#192939]")
            }
          >
            <div className="flex-1">{id}</div>
            <div className="flex-1 flex gap-3">
              <p>{quantity}</p>
              <p>{item}</p>
            </div>
            <div className="flex-1">
              <span
                className={
                  "border-2 inline-flex px-2 items-start rounded-lg shadow-md " +
                  (isLight
                    ? "border-[#e3e6e7] bg-[#e9edef]"
                    : "bg-[#0e1925] border-[#192939]")
                }
              >
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
