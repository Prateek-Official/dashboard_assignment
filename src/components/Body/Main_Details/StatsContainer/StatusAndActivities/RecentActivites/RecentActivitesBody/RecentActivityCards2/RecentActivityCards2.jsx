import React from "react";
import RecentActivityMessage from "./RecentActivityMessage/RecentActivityMessage";

const RecentActivityCards2 = ({ day, msg }) => {
  //   console.log(msg);
  return (
    <div>
      <div className="font-semibold mt-3.5">{day.toUpperCase()}</div>

      <RecentActivityMessage msg={msg} type="message" />

      {/* {msg.map((m) => {
        const { id, sender, text, receiver, timeStamp, replies } = m;
        return (
          <RecentActivityMessage
            key={id}
            sender={sender}
            text={text}
            receiver={receiver}
            timeStamp={timeStamp}
            replies={replies}
          />
        );
      })} */}
    </div>
  );
};

export default RecentActivityCards2;
