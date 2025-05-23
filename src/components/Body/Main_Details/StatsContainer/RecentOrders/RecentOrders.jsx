import RecentOrdersHeading from './RecentOrdersHeading/RecentOrdersHeading';
import OrderDetails from './OrderDetails/OrderDetails';
import MoreOrderDetails from './MoreOrderDetails/MoreOrderDetails';

const RecentOrders = () => {
  return (
    <div className="my-[15px] bg-[#eeeff0] rounded-xl border-2 border-[#e3e6e7]">
      <RecentOrdersHeading />
      <OrderDetails />
      <MoreOrderDetails />
    </div>
  )
}

export default RecentOrders