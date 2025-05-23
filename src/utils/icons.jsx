import {
  FaShoppingBag,
  FaWallet,
  FaDollarSign,
  FaStopwatch,
  FaSyncAlt,
} from "react-icons/fa";

import { RiLayoutGridFill } from "react-icons/ri";
import { MdCelebration, MdVerified, MdLocalShipping } from "react-icons/md";
import { AiFillCloseCircle } from "react-icons/ai";

export const icons = {
  bag: <FaShoppingBag size={28} />,
  wallet: <FaWallet size={28} />,
  dollar: <FaDollarSign size={28} />,
  watch: <FaStopwatch size={28} />,
  sync: <FaSyncAlt size={28} />,
};

export const orderIcons = {
  square: <RiLayoutGridFill color="#523ccd" />,
  watch: <FaStopwatch color="#523ccd" />,
  tick: <MdVerified color="#523ccd" />,
  party: <MdCelebration color="#523ccd" />,
  truck: <MdLocalShipping color="#523ccd" />,
  cancel: <AiFillCloseCircle color="#523ccd" />,
};
