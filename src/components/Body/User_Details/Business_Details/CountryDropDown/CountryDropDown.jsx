import { ThemeContext } from "../../../../ToggleTheme";
import { useContext } from "react";

const CountryDropDown = ({ countries, setCountryIndex, setDisplayList }) => {
  const { isLight } = useContext(ThemeContext);
  const handleClick = (e) => {
    setCountryIndex(e.target.value);
    setDisplayList(false);
  };

  return (
    <div
      className={
        "w-[70px] h-[80px] overflow-y-auto border-2 flex flex-col absolute top-full p-[4px] text-[12px] rounded-lg z-10 " +
        (isLight ? "border-[#eeeff0] bg-white" : "bg-[#152330] border-[#192939]")
      }
    >
      {countries.map((country, i) => {
        return (
          <button
            key={country.cca2}
            value={i}
            className="cursor-pointer"
            onClick={(e) => handleClick(e)}
          >
            {country.cca2}
          </button>
        );
      })}
    </div>
  );
};

export default CountryDropDown;
