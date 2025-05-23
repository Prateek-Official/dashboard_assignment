import { useState } from "react";
import PhoneRecord from "../PhoneRecord/PhoneRecord";
import { ThemeContext } from "../../../../ToggleTheme";
import { useContext } from "react";

const PhoneDetails = () => {
  const [phones, setPhones] = useState([
    { id: Math.random(), number: "", country: "IN" },
    { id: Math.random(), number: "", country: "IN" },
  ]);

  const { isLight } = useContext(ThemeContext);

  const handleAdd = () => {
    setPhones((prev) => [
      ...prev,
      { id: Math.random(), number: "", country: "IN" },
    ]);
  };

  const handleRemove = (index) => {
    setPhones((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div
      className={
        "flex flex-col py-[10px] border-b-2 " +
        (isLight ? "border-[#eeeff0]" : "border-[#192939]")
      }
    >
      <div className="flex justify-between items-center h-[25px]">
        <label className="text-[12px] font-semibold">Phone Number</label>
        <button
          className="text-[22px] text-[#5d51a9] font-semibold cursor-pointer hover:text-[24px]"
          onClick={handleAdd}
        >
          +
        </button>
      </div>

      {phones.map((phone, index) => (
        <PhoneRecord
          key={phone.id}
          mb={index !== phones.length - 1 ? "mb-[8px]" : ""}
          setPhones={setPhones}
          phones={phones}
          index={index}
          handleRemove={handleRemove}
        />
      ))}
    </div>
  );
};

export default PhoneDetails;
