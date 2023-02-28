import React from "react";
import ChatBox from "../Components/ChatBox";

import Sidebar from "../Components/Sidebar";

const HomePage = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      {/* homepage for pc, ipad and notebook view */}

      <div className="rounded-md bg-white pc:w-3/4 ipad:w-11/12 notebook:w-10/12 pc:h-[500px] xl:h-[650px] mx-auto  relative pc:flex notebook:flex ipad:flex tablet:hidden mobile:hidden micro:hidden">
        <Sidebar></Sidebar>
        <ChatBox></ChatBox>
      </div>

      {/* homepage for mobile view */}
      <div className="rounded-md bg-white tablet:w-11/12 mobile:w-11/12 micro:w-11/12 pc:hidden notebook:hidden ipad:hidden tablet:block mobile:block micro:block mx-auto h-[90vh]"></div>
    </div>
  );
};

export default HomePage;
