import Main_Details from "./Main_details/Main_Details";
import User_Details from "./User_Details/User_Details";
import { ThemeContext } from "../ToggleTheme";
import { useContext } from "react";

const Body = () => {
  const { isLight } = useContext(ThemeContext);
  
  return (
    <div className={"flex px-[7.5px] py-[16px] " + (isLight ? "bg-[#f7f8fa]" : "bg-[#010d19]")}>
      <User_Details />
      <Main_Details />
    </div>
  );
};

export default Body;
