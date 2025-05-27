import { ThemeContext } from "../../../../../../../ToggleTheme";
import { useContext } from "react";

const CategoriesList = ({ categoriesList, setValue, setBoolean }) => {
  const handleValue = (e, setValue, setBoolean) => {
    setValue(e.target.value);
    setBoolean(false);
  };
  const { isLight } = useContext(ThemeContext);

  return (
    <div
      className={
        "absolute top-full w-full mt-[4px] text-left gap-[4px] border-2 p-1 rounded-md z-10 " +
        (isLight
          ? "bg-white border-[#e3e6e7] text-black"
          : "bg-[#010d19] border-[#192939] text-white ")
      }
    >
      {categoriesList.map((category) => {
        return (
          <button
            key={Math.random()}
            className="w-full hover:bg-[#e3e6e7]"
            value={category}
            onClick={(e) => handleValue(e, setValue, setBoolean)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default CategoriesList;
