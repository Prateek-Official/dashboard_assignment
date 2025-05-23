import { paths } from "../../../utils/constants";
import { ThemeContext } from "../../ToggleTheme";
import { useContext } from "react";

const Path = () => {
  const { isLight } = useContext(ThemeContext);
  return (
    <div
      className={
        "flex min-h-[65px] px-[20px] border-b-2 border-[#eeeff0] " +
        (isLight
          ? "bg-white border-[#eeeff0]"
          : "bg-[#152330] border-[#192939] text-white")
      }
    >
      <div className="flex items-center">
        {paths.map((path, i) => {
          const isLast = i === paths.length - 1;
          return (
            <span key={path}>
              {isLast ? (
                <span className="font-bold">{path}</span>
              ) : (
                <span>
                  <a href="/">{path}</a>
                  <span>&nbsp;/&nbsp;</span>
                </span>
              )}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default Path;
