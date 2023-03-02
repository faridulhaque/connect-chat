import React from "react";
import Message from "./Message";
type chatTrayTypes = {
  messages: any;
};

const ChatTray = ({ messages }: chatTrayTypes) => {
  return (
    <div className="pc:h-[340px] xl:h-[490px] tablet:h-[80vh] mobile:h-[80vh] micro:h-[80vh] bg-gray-400 w-full overflow-x-scroll">
      <div className="w-[98%] mx-auto h-full">
        {messages.length ? (
          messages.map((m: any) => <Message key={m?.id} message={m} />)
        ) : (
          <p className="text-center mx-auto w-3/4 text-md text-gray-700 mt-20">
            To chat with your friends, search for your friend's inbox using their
            email in the top corner search bar. 
            <br></br>
            To chat with the developer,
            search for their for their inbox using this email address-
            <br />
            <b>faridmurshed9@gmail.com</b>
          </p>
        )}
      </div>
    </div>
  );
};

export default ChatTray;
