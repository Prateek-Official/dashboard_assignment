import React from "react";
import { BsChatDots } from "react-icons/bs";
import { FaReply } from "react-icons/fa";

const RecentActivityMessage = ({
  //   sender,
  //   text,
  //   receiver,
  //   timeStamp,
  //   replies,
  msg,
  type,
}) => {
  // console.log(msg[0].replies);
  // console.log(msg)
  // console.log(type)
  //   if (type === "reply") {
  //     console.log(msg);
  //   }
  //   console.log(type);

  return (
    <>
      {msg.map((m) => {
        const { id, sender, text, receiver, timeStamp, replies } = m;
        console.log(replies);
        return (
          <div className="flex gap-1 mt-2.5" key={id}>
            <div className="flex ">
              <span className="font-bold bg-[#d56474] text-white p-1 rounded-full">
                {type === "message" ? <BsChatDots /> : <FaReply />}
              </span>
            </div>

            <div className="flex items-center">
              <span className="text-[#8478ff] hover:underline cursor-pointer">
                {sender}&nbsp;
              </span>
              <span>{text}&nbsp; </span>
              <span className="text-[#8478ff] hover:underline cursor-pointer">
                {receiver}
              </span>
            </div>

            <div className="flex items-center">
              <div className="h-1.5 w-1.5 bg-black rounded-full border border-white mt-1"></div>
            </div>

            <div className="flex items-center">
              <span>{timeStamp}</span>
            </div>

            {/* {replies.length > 0 && (
              <div className="ml-6 mt-1">
                <RecentActivityMessage msg={replies} type="reply" />
              </div>
            )} */}
          </div>
        );
      })}
    </>
  );
};

export default RecentActivityMessage;
