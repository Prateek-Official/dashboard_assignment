import React from "react";
import { BsChatDots } from "react-icons/bs";
import { monthsByIndex } from "../../../../../../../../utils/constants";

const RecentActivityCards = ({ day, msg }) => {
  const m = msg[1]
  console.log(m);

  function findDay(day) {
    if (day === "today" || day === "yesterday") {
      return day.toUpperCase();
    } else {
      return "OTHERS";
    }
  }

  return (
    <div className="">
      <div className="font-semibold">{findDay(day)}</div>
      <div>
        <div className="flex">
          <span className="font-bold bg-[#d56474] text-white p-1 rounded-full">
            <BsChatDots />
          </span>
          <div>
            {msg.map((m) => {
              //   console.log(m[0]);
              const [message, time] = m;
              const { id, sender, text, receiver } = message;
            //   console.log(sender);
              return (
                <React.Fragment key={id}>
                  <span className="cursor-pointer inline-block text-[#776fe4]">
                    {sender}
                  </span>
                </React.Fragment>
              );
            })}
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default RecentActivityCards;
