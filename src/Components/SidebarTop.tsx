import { signOut } from "firebase/auth";
import React from "react";
import { auth } from "../firebase.init";

const SidebarTop = () => {
  return (
    <div className="w-full h-20 bg-gray-700">
      <div className="w-full h-full flex items-center justify-between">
        <span className="text-white text-2xl ml-5">name</span>
        <span className="cursor-pointer text-white" onClick={() => signOut(auth)}>Logout</span>
      </div>
    </div>
  );
};

export default SidebarTop;
