import { useState } from "react";
import PhoneDetails from "../PhoneDetails/PhoneDetails";
import { ThemeContext } from "../../../../ToggleTheme";
import { useContext } from "react";

const UserInput = () => {
  const { isLight } = useContext(ThemeContext);
  const [name, setName] = useState("TRUCK GREAR");
  const [email, setEmail] = useState("Jillali@Onechanneladmin.Com");

  const handleName = (e) => {
    setName(e.target.value.toUpperCase());
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  return (
    <div>
      <div
        className={
          "flex flex-col py-[10px] border-b-2 " +
          (isLight ? "border-[#eeeff0]" : "border-[#192939]")
        }
      >
        <label className="text-[12px] mb-[5px] font-semibold">
          Account Name
        </label>
        <input
          type="text"
          value={name}
          onChange={(e) => handleName(e)}
          placeholder="Enter name"
          className={
            "outline-none border-2 rounded-xl shadow-xs py-[6px] px-[12px] " +
            (isLight ? "border-[#eeeff0]" : "border-[#192939]")
          }
        />
      </div>

      <div
        className={
          "flex flex-col py-[10px] border-b-2 " +
          (isLight ? "border-[#eeeff0]" : "border-[#192939]")
        }
      >
        <label className="text-[12px] mb-[5px] font-semibold">Email</label>
        <input
          type="email"
          value={email}
          onChange={() => handleEmail(e)}
          placeholder="Enter email"
          className={
            "outline-none border-2 rounded-xl shadow-xs py-[6px] px-[12px] " +
            (isLight ? "border-[#eeeff0]" : "border-[#192939]")
          }
        />
      </div>

      <PhoneDetails />
    </div>
  );
};

export default UserInput;
