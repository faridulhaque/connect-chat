import React from "react";
import ChatBoxTop from "./ChatBoxTop";
import ChatInput from "./ChatInput";
import ChatTray from "./ChatTray";

const ChatBox = () => {
  return (
    <div className="w-7/12 h-full bg-gray-500">
      <ChatBoxTop></ChatBoxTop>
      <ChatTray></ChatTray>
      <ChatInput></ChatInput>
    </div>
  );
};

export default ChatBox;