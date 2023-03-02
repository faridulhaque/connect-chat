import React from "react";
import { GlobalContext } from "../AllContext";
type messageTypes = {
  message: any;
};

const Message = ({ message }: messageTypes) => {
  const { currentUser } = React.useContext(GlobalContext);
  return (
    <div
      className={`w-full h-auto flex align-top mt-5 ${
        message.senderId === currentUser.uid ? "justify-end" : "justify-start"
      }`}
    >
      {message.senderId === currentUser.uid ? (
        <>
          <p
            className="text-sm bg-blue-400 px-3 py-2 max-w-full mr-2 text-white
          rounded-tr-lg rounded-bl-lg rounded-br-lg rounded-none
          "
          >
            {message?.text}
          </p>
          <img
            src={"https://i.ibb.co/6YK1cXs/avatar.jpg"}
            alt="avatar"
            className="w-[40px] h-[35px] rounded-full"
          />
        </>
      ) : (
        <>
          <img
            src={"https://i.ibb.co/6YK1cXs/avatar.jpg"}
            alt="avatar"
            className="w-[40px] h-[35px] rounded-full"
          />
          <p className="text-sm bg-blue-400 px-3 py-2 max-w-full ml-2 text-white rounded-tl-lg rounded-bl-lg rounded-br-lg rounded-none">
            {message?.text}
          </p>
        </>
      )}
    </div>
  );
};

export default Message;
