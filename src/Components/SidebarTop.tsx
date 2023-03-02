import { signOut } from "firebase/auth";
import React from "react";
import { auth } from "../firebase.init";
import {RiShutDownLine} from "react-icons/ri"
import { GlobalContext } from "../AllContext";

const SidebarTop = () => {
  const {currentUser} = React.useContext(GlobalContext)
  return (
    <div className="w-full h-20 bg-gray-700">
      <div className="w-full h-full flex items-center justify-between">
        <span className="text-white text-2xl ml-5">{currentUser?.displayName}</span>
        <RiShutDownLine className="cursor-pointer text-white text-3xl mr-2" onClick={() => signOut(auth)}></RiShutDownLine>
      </div>
    </div>
  );
};

export default SidebarTop;