import { useState, useEffect } from "react";
import { recentActivityMessages } from "../../../../../../../utils/constants";
import RecentActivityCard from "./RecentActivityCard/RecentActivityCards";

const RecentActivitesBody = () => {
  const [allMessages, setAllMessages] = useState({});

  const messages = {
    today: [],
    yesterday: [],
    others: [],
  };

  const calculateTime = (timeStamp, arr) => {
    const now = new Date();
    const given = new Date(timeStamp);
    const diff = Math.floor((now - given) / (1000 * 60));
    if (diff < 1) {
      arr.push("Just Now");
    } else if (diff === 1) {
      arr.push("1 min ago");
    } else if (diff > 1 && diff < 60) {
      arr.push(`${diff} mins ago`);
    } else {
      const hours = Math.floor(diff / 60);
      arr.push(`${hours} hours ago`);
    }
  };

  function getTime(timeStamp, arr) {
    const time = timeStamp.slice(0, 5);
    const ampm = timeStamp.slice(-2);
    const timeOutput = time + ampm.toUpperCase();
    arr.push(timeOutput);
  }

  useEffect(() => {
    recentActivityMessages.forEach((msg) => {
      const [datePart, timePart] = msg?.timeStamp.split(",");
      const todayDate = new Date();
      const inputDate = new Date(datePart.trim());
      const arr = [msg];

      if (
        inputDate.getDate() === todayDate.getDate() &&
        inputDate.getMonth() === todayDate.getMonth() &&
        inputDate.getYear() === todayDate.getYear()
      ) {
        calculateTime(msg.timeStamp, arr);
        messages.today.push(arr);
      } else if (
        inputDate.getDate() === todayDate.getDate() - 1 &&
        inputDate.getMonth() === todayDate.getMonth() &&
        inputDate.getYear() === todayDate.getYear()
      ) {
        getTime(timePart.trim(), arr);
        messages.yesterday.push(arr);
      } else {
        getTime(timePart.trim(), arr);
        messages.others.push(arr);
      }
    });
    setAllMessages(messages);
  }, []);

  return (
    <div className="px-[15px] py-3.5">
        {Object.entries(allMessages).map(([day, msg]) => {
          // console.log(k, v)
          return <RecentActivityCard key={Math.random()} day ={day} msg={msg} />})}
    </div>
  );
};

export default RecentActivitesBody;
