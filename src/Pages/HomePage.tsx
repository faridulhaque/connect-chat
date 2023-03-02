import React from "react";
import { GlobalContext } from "../AllContext";
import ChatBox from "../Components/ChatBox";

import Sidebar from "../Components/Sidebar";

const HomePage = () => {
  const { openChatValues } = React.useContext(GlobalContext);
  const chatId = openChatValues?.state?.chatId;

  return (
    <div className="w-full h-screen flex items-center justify-center">
      {/* homepage for pc, ipad and notebook view */}

      <div className="rounded-md bg-white pc:w-3/4 ipad:w-full notebook:w-full pc:h-[500px] xl:h-[650px] mx-auto  relative pc:flex notebook:flex ipad:flex tablet:hidden mobile:hidden micro:hidden">
        <Sidebar></Sidebar>
        <ChatBox></ChatBox>
      </div>

      {/* homepage for mobile view */}
      <div className="rounded-md bg-white w-full pc:hidden notebook:hidden ipad:hidden tablet:block mobile:block micro:block mx-auto h-[100vh]">
        {!chatId ? <Sidebar></Sidebar> : <ChatBox></ChatBox>}
      </div>
    </div>
  );
};

export default HomePage;
