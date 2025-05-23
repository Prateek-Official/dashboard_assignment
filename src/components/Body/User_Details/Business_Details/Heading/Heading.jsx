import { FaSave } from "react-icons/fa";

const Heading = () => {
  return (
    <div className="flex justify-between">
        <p className="font-bold">Business Details</p>
        <div className="text-[#5cb57c] flex items-center">
            <FaSave size={16} color="#5cb57c"/>
            <button className="text-[14px] font-semibold ml-[8px] cursor-pointer">Save and Close</button>
        </div>
    </div>
  )
}

export default Heading