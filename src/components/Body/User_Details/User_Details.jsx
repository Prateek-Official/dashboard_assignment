import User from "./User/User";
import Contact from "./Contact/Contact";
import Business_Details from "./Business_Details/Business_Details";

const User_Details = () => {
  return (
    <div className="w-[420px] flex justify-center">
      <div>
        <User />
        <Contact />
        <Business_Details />
      </div>
    </div>
  );
};

export default User_Details;
