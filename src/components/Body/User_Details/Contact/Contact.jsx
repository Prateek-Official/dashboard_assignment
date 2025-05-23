import { iconList } from "../../../../utils/iconList";
import { ThemeContext } from "../../../ToggleTheme";
import { useContext } from "react";

const Contact = () => {
  const { isLight } = useContext(ThemeContext);
  return (
    <div
      className={
        "w-[390px] rounded-2xl py-[18px] flex my-[16px] " +
        (isLight
          ? "bg-white border-[#eeeff0]"
          : "bg-[#152330] border-[#192939] text-white")
      }
    >
      {iconList.map(({ name, icon: Icon }, i) => {
        const isLast = i === iconList.length - 1;
        return (
          <div
            key={name}
            className={`flex-1 flex flex-col justify-center items-center ${
              !isLast ? "border-r-[#eeeff0] border-r-2" : ""
            }`}
          >
            <Icon size={18} />
            <p className="text-[14px]">{name}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Contact;
