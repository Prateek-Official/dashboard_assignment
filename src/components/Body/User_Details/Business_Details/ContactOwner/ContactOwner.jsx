import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { emailList } from "../../../../../utils/constants";
import { ThemeContext } from "../../../../ToggleTheme";
import { useContext } from "react";

const ContactOwner = () => {
  const [openList, setOpenList] = useState(false);
  const [emailIndex, setEmailIndex] = useState(0);
  const { isLight } = useContext(ThemeContext);

  const handleOpen = () => {
    setOpenList(!openList);
  };

  const handleOpenList = (e) => {
    setOpenList(false);
    setEmailIndex(e.target.value);
  };

  return (
    <div
      className={
        "flex flex-col py-[10px] border-b-2 " +
        (isLight ? "border-[#eeeff0]" : "border-[#192939]")
      }
    >
      <label className="text-[12px] mb-[5px] font-semibold">
        Contact Owner
      </label>
      <div
        className={
          "border-2 rounded-xl shadow-xs py-[6px] px-[12px] flex items-center justify-between relative " +
          (isLight ? "border-[#eeeff0]" : "bg-[#152330] border-[#192939]")
        }
      >
        <span>{emailList[emailIndex]}</span>
        <button className="cursor-pointer" onClick={handleOpen}>
          {!openList ? (
            <FaChevronDown className="mt-1 text-[12px]" />
          ) : (
            <FaChevronUp className="mt-1 text-[12px]" />
          )}
        </button>
        {openList ? (
          <div
            className={
              "w-full h-[80px] overflow-y-auto border-2 flex flex-col absolute top-full p-[8px] rounded-lg z-10 mt-[6px] ml-[-12px] " +
              (isLight ? "border-[#eeeff0]" : "bg-[#152330] border-[#192939]")
            }
          >
            {emailList.map((email, i) => {
              return (
                <button
                  key={email}
                  className="text-left cursor-pointer"
                  value={i}
                  onClick={(e) => handleOpenList(e)}
                >
                  {email}
                </button>
              );
            })}
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default ContactOwner;
