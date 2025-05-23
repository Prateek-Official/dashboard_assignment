import Heading from "./Heading/heading";
import UserInput from "./UserInput/UserInput";
import ContactOwner from "./ContactOwner/ContactOwner";
import { ThemeContext } from "../../../ToggleTheme";
import { useContext } from "react";

const Business_Details = () => {
  const { isLight } = useContext(ThemeContext);
  return (
    <div
      className={
        "w-[390px] rounded-2xl p-[15px] " +
        (isLight
          ? "bg-white border-[#eeeff0]"
          : "bg-[#152330] border-[#192939] text-white")
      }
    >
      <Heading />
      <UserInput />
      <ContactOwner />
    </div>
  );
};

export default Business_Details;
