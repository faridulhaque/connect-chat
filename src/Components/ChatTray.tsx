import React from "react";
import Message from "./Message";
type chatTrayTypes = {
  messages: any;
};

const ChatTray = ({ messages }: chatTrayTypes) => {
  return (
    <div className="pc:h-[340px] xl:h-[490px] bg-gray-400 w-full overflow-x-scroll">
      <div className="w-[98%] mx-auto h-full">
        {messages.map((m: any) => (
          <Message key={m?.id} message={m}></Message>
        ))}
      </div>
    </div>
  );
};

export default ChatTray;
