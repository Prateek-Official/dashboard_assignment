import { useState, useEffect } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import CountryDropDown from "../CountryDropDown/CountryDropDown";
import axios from "axios";
import { ThemeContext } from "../../../../ToggleTheme";
import { useContext } from "react";

const PhoneRecord = ({ mb, setPhones, index, phones, handleRemove }) => {
  const [countries, setCountries] = useState([]);
  const [displayList, setDisplayList] = useState(false);
  const [countryIndex, setCountryIndex] = useState(104);
  const { isLight } = useContext(ThemeContext);

  const handleDisplay = () => {
    setDisplayList(!displayList);
  };

  const countriesList = async () => {
    const response = await axios.get("https://restcountries.com/v3.1/all");
    const sortedData = response.data.sort((a, b) =>
      a.cca2.localeCompare(b.cca2)
    );
    // console.log(sortedData);
    setCountries(sortedData);
  };

  useEffect(() => {
    countriesList();
  }, []);

  return (
    <div className={`flex justify-between items-center gap-2 relative ${mb}`}>
      <div
        className={
          "flex-1 flex justify-around items-center py-[6px] px-[2px] rounded-lg border-2 shadow-xs " +
          (isLight ? "border-[#eeeff0]" : "border-[#192939]")
        }
      >
        <img
          src={countries[countryIndex]?.flags?.svg}
          className="w-[25px] rounded-xs"
        />
        <span className="text-[14px]">{countries[countryIndex]?.cca2}</span>
        <button onClick={handleDisplay}>
          {!displayList ? (
            <FaChevronDown className="mt-1 text-[12px]" />
          ) : (
            <FaChevronUp className="mt-1 text-[12px]" />
          )}
        </button>

        {displayList ? (
          <CountryDropDown
            countries={countries}
            setCountryIndex={setCountryIndex}
            setDisplayList={setDisplayList}
          />
        ) : (
          ""
        )}
      </div>
      <div className="flex-1">
        <input
          type="number"
          // value={email}
          onChange={() => handleEmail(e)}
          placeholder="(e.g. +91-9876543210)"
          className={
            "outline-none border-2 rounded-xl shadow-xs py-[6px] px-[12px] " +
            (isLight ? "border-[#eeeff0]" : "bg-[#152330] border-[#192939]")
          }
        />
      </div>
      <div className="flex-1">
        <button
          className="text-[#d27e85] border-2 border-[#d27e85] py-[6px] px-[6px] text-[12px] rounded-lg cursor-pointer"
          onClick={() => {
            handleRemove(index);
          }}
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default PhoneRecord;
