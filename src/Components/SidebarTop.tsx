import { signOut } from "firebase/auth";
import React from "react";
import { auth } from "../firebase.init";
import { RiShutDownLine } from "react-icons/ri";
import { GlobalContext } from "../AllContext";

const SidebarTop = () => {
  const { currentUser } = React.useContext(GlobalContext);
  return (
    <div className="w-full h-20 bg-gray-700">
      <div className="w-full h-full flex items-center justify-between">
        <p className="flex flex-col ml-5 notebook:mt-4">
          <span className="text-white text-2xl">
            {currentUser?.displayName}
          </span>
          <span className="text-white text-sm">
            {currentUser?.email}
          </span>
          
        </p>
        <RiShutDownLine
          className="cursor-pointer text-white text-3xl mr-2 notebook:mt-4"
          onClick={() => signOut(auth)}
        ></RiShutDownLine>
      </div>
    </div>
  );
};

export default SidebarTop;
