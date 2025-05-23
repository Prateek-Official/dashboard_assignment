import React from 'react'
import OrderStatus from './OrderStatus/OrderStatus';
import RecentActivities from './RecentActivites/RecentActivities';

const StatusAndActivities = () => {
  return (
    <div className="flex mt-[15px] gap-[8px]">
      <OrderStatus />
      <RecentActivities />
    </div>
  )
}

export default StatusAndActivities