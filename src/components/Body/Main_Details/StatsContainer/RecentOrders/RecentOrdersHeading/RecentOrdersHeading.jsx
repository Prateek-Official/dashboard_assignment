import { recentOrderHeadDetails } from "../../../../../../utils/constants";

const RecentOrdersHeading = () => {
  return (
    <div className="overflow-hidden">
      <h2 className="text-[20px] font-semibold border-b-2 border-[#e3e6e7] px-2 py-4">
        Recent Orders
      </h2>
      <div className="flex text-[12px] bg-white overflow-hidden p-2">
        {recentOrderHeadDetails.map((order) => {
          return (
            <div key={Math.random()} className="flex-1">
              {order}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RecentOrdersHeading;
