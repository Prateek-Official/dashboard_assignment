import { useState, useContext } from "react";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import { MdCalendarMonth } from "react-icons/md";
import { categories } from "../../../../../../../../utils/constants";
import CategoriesList from "../CategoriesList/CategoriesList";
import { ThemeContext } from "../../../../../../../ToggleTheme";

const OrderCandY = ({ years }) => {
  const [openCategory, setOpenCategory] = useState(false);
  const [openCalendar, setOpenCalendar] = useState(false);
  const [categoryValue, setCategoryValue] = useState(categories[0]);
  const [calendarValue, setCalendarValue] = useState(years[years.length - 1]);
  const { isLight } = useContext(ThemeContext);

  const handleCategory = () => {
    setOpenCategory(!openCategory);
    setOpenCalendar(false);
  };

  const handleCalendar = () => {
    setOpenCalendar(!openCalendar);
    setOpenCategory(false);
  };

  return (
    <>
      <div
        className={
          "flex justify-center items-center border-2 p-2 rounded-lg shadow-md gap-[4px] cursor-pointer relative w-[130px]" +
          (isLight
            ? "bg-white border-[#e3e6e7] text-black"
            : "bg-[#010d19] border-[#192939] text-white ")
        }
        onClick={handleCategory}
      >
        <p>{categoryValue}</p>
        {!openCategory ? <FaChevronDown /> : <FaChevronUp />}
        {openCategory ? (
          <CategoriesList
            categoriesList={categories}
            setValue={setCategoryValue}
            setBoolean={setOpenCategory}
          />
        ) : (
          ""
        )}
      </div>
      <div
        className={
          "flex justify-center items-center border p-2 rounded-lg shadow-md gap-[4px] cursor-pointer relative " +
          (isLight
            ? "bg-white border-[#e3e6e7] text-black"
            : "bg-[#010d19] border-[#192939] text-white ")
        }
        onClick={handleCalendar}
      >
        <p>{calendarValue}</p>
        <MdCalendarMonth />
        {!openCalendar ? <FaChevronDown /> : <FaChevronUp />}
        {openCalendar ? (
          <CategoriesList
            categoriesList={years}
            setValue={setCalendarValue}
            setBoolean={setOpenCalendar}
          />
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default OrderCandY;
