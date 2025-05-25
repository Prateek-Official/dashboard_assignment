import Logo from "../../../assets/quotient_logo.avif";
import { FaChevronDown, FaChevronUp, FaBell } from "react-icons/fa";
import { RiMoonLine } from "react-icons/ri";
import { ThemeContext } from "../../ToggleTheme";
import { useContext } from "react";

const Head = () => {
  const { isLight, toggleTheme } = useContext(ThemeContext);

  return (
    <div
      className={
        "min-h-[72px] flex w-full text-[14px] py-3 border-b-2 " +
        (isLight
          ? "bg-white border-[#eeeff0]"
          : "bg-[#152330] border-[#192939]")
      }
    >
      {/* <div className="hidden border flex-1">
        <i className="fa-solid fa-bars"></i>
      </div> */}

      <h1
        className={
          "flex-1 flex items-center px-5 cursor-pointer text-[36px] font-bold italic " +
          (isLight ? "text-black" : "text-white")
        }
      >
        Quotient
      </h1>

      <div className="flex-1 flex justify-center items-center">
        <div
          className={
            "w-full border flex items-center shadow-md p-3 rounded-lg " +
            (isLight ? "text-black border-[#eeeff0] " : "text-white border-[#010d19]")
          }
        >
          <i className="fa-solid fa-magnifying-glass p-2"></i>
          <input
            type="text"
            placeholder="Search"
            className={"flex-1 border-none outline-none text-inherit"}
          />
        </div>
      </div>

      <div className="flex-1 flex justify-end items-center">
        {isLight ? (
          <button
            className="h-[40px] w-[40px] text-[24px] flex justify-center items-center cursor-pointer"
            onClick={toggleTheme}
          >
            <RiMoonLine />
          </button>
        ) : (
          <button
            className="h-[40px] w-[40px] text-[24px] flex justify-center items-center cursor-pointer"
            onClick={toggleTheme}
          >
            <i class="fa-regular fa-sun text-white"></i>
          </button>
        )}

        <button className="mx-3 h-[40px] w-[40px] text-[20px] border border-gray-300 rounded-lg shadow-xl shadow-gray-200 flex justify-center items-center cursor-pointer">
          <FaBell />
        </button>

        <div
          className={
            "flex justify-center items-center" + (isLight ? "" : " text-white")
          }
        >
          <div className="mr-[8px] h-[40px] w-[40px] text-[20px] bg-[#523ccd] text-white flex justify-center items-center rounded-[50%] font-semibold">
            MS
          </div>
          <div>
            <p className={"font-semibold"}>Manoj Sharma</p>
            <p>Super Admin</p>
          </div>
          <button
            className={
              "mr-[24px] ml-[20px] h-[30px] w-[30px] font-semibold flex justify-center items-center cursor-pointer"
            }
          >
            <FaChevronDown color={"white"} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Head;
