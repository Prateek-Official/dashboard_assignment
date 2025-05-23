import InitialsLogo from "../InitialsLogo/InitialsLogo";
import { ThemeContext } from "../../../ToggleTheme";
import { useContext } from "react";

const User = () => {
  const { isLight } = useContext(ThemeContext);
  return (
    <div
      className={
        "w-[390px]  flex p-[15px] rounded-2xl justify-between " +
        (isLight
          ? "bg-white border-[#eeeff0]"
          : "bg-[#152330] border-[#192939] text-white")
      }
    >
      <InitialsLogo />

      <div>
        <div className="flex justify-between">
          <p className="font-semibold text-[18px]">Truck Grear</p>
          <div className="text-[#cc9756] bg-[#fcf4e8] rounded-xl text-[14px] px-2 py-0.5">
            Business
          </div>
        </div>
        <div className="text-[14px]">jillali@onechanneladmin.com</div>
      </div>

      <button className="text-[#5d51a9] text-[12px] flex items-start cursor-pointer hover:underline">
        Change Status
      </button>
    </div>
  );
};

export default User;
