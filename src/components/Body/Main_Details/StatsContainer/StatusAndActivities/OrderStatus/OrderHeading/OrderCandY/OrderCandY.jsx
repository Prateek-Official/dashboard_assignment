import { useState } from "react";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import { MdCalendarMonth } from "react-icons/md";
import { categories } from "../../../../../../../../utils/constants";
import CategoriesList from "../CategoriesList/CategoriesList";

const OrderCandY = ({ years }) => {
  const [openCategory, setOpenCategory] = useState(false);
  const [openCalendar, setOpenCalendar] = useState(false);
  const [categoryValue, setCategoryValue] = useState(categories[0]);
  const [calendarValue, setCalendarValue] = useState(years[years.length - 1]);

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
        className="flex justify-center items-center border p-2 rounded-lg bg-white shadow-md gap-[4px] cursor-pointer relative w-[130px]"
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
        className="flex justify-center items-center border p-2 rounded-lg bg-white shadow-md gap-[4px] cursor-pointer relative"
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
