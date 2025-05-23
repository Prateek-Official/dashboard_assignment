import LastMonthStats from "./LastMonthStats/LastMonthStats";
import StatusAndActivities from "./StatusAndActivities/StatusAndActivities";
import RecentOrders from "./RecentOrders/RecentOrders";
import Revenue from "./Revenue/Revenue";

const StatsContainer = () => {
  return (
    <div className="bg-white rounded-b-xl border-2 border-[#eeeff0] border-t-0 px-2 py-4">
        <LastMonthStats />
        <StatusAndActivities />
        <RecentOrders />
        <Revenue />
    </div>
  )
}

export default StatsContainer