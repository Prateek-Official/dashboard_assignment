import React from "react";
import { FaArrowRight } from "react-icons/fa";

const MoreOrderDetails = () => {
  return (
    <div className="p-2 text-[14px] flex items-center justify-center gap-2 text-[#5240ba] cursor-pointer hover:underline">
      <p>View 256 More Order</p>
      <div className="bg-[#5240ba] text-white p-0.5 rounded-full">
        <FaArrowRight />
      </div>
    </div>
  );
};

export default MoreOrderDetails;
