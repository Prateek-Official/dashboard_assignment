import React from "react";
import { recentActivityMessages2 } from "../../../../../../../utils/constants";
import RecentActivityCards2 from "./RecentActivityCards2/RecentActivityCards2";

const RecentActivitiesBody2 = () => {
  const messages = { today: [], yesterday: [], "24 MAY 2025": [] };
  recentActivityMessages2.forEach((message, i) => {
    const { day } = message;
    if (day === "today") {
      messages.today.push(message);
    } else if (day === "yesterday") {
      messages.yesterday.push(message);
    } else {
      // messages.message.push(message);
      // messages[day] = []
      // console.log(i)
      // console.log(typeof day)
      messages[day].push(message);
      // console.log(day)
      // console.log(messages[day])
    }
  });
  // console.log(messages)

  return (
    <div className="px-[15px]">
      {/* <div></div> */}
      {/* <RecentActivityCards2 msg={messages.today} /> */}
      {Object.entries(messages).map(([day, msg]) => {
        // console.log(k, v)
        return <RecentActivityCards2 key={Math.random()} day={day} msg={msg} />;
      })}
    </div>
  );
};

export default RecentActivitiesBody2;
