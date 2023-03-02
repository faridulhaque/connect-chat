import React, { useContext } from "react";
import { FiSkipBack } from "react-icons/fi";
import { GlobalContext } from "../AllContext";
type chatBoxTopType = {
  displayName: string;
};

const ChatBoxTop = ({ displayName }: chatBoxTopType) => {
  const { openChatValues } = useContext(GlobalContext);
  const { dispatch } = openChatValues;

  return (
    <div className="xl:h-20 pc:h-20 notebook:h-20 tablet:h-[10vh] mobile:h-[10vh] micro:h-[10vh] w-full bg-gray-700 flex items-center">
      <p className="text-white text-2xl ml-3 flex items-center notebook:mt-4">
        {" "}
        <FiSkipBack
          onClick={() => dispatch({ type: "GO_BACK", payload: null })}
          className="mr-3 xl:hidden pc:hidden notebook:hidden"
        />{" "}
        {displayName}
      </p>
    </div>
  );
};

export default ChatBoxTop;
