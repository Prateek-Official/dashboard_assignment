import React from "react";

const InitialsLogo = () => {
  return (
    <div className="w-[50px] h-[50px] relative">
      <div className="bg-[#523ccd] rounded-full text-white relative inline-block overflow-hidden w-full h-full">
        <div className="w-full h-full rounded-full bg-[#523ccd] flex justify-center items-center">
          TG
        </div>
        <button className="absolute bottom-0 w-full text-center bg-[#8374db] text-[10px] text-white rounded-b-full">
          Edit
        </button>
      </div>
      <span className="absolute top-0 right-0 block w-4 h-4 rounded-full bg-[#23c55e] border-2 border-white"></span>
    </div>
  );
};

export default InitialsLogo;
