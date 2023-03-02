import React from "react";
import { FaRegPaperPlane } from "react-icons/fa";

type chatInputTypes = {
  handleSend: () => void;
  setText: (value: string) => void;
  text: string;
};

const ChatInput = ({ handleSend, setText, text }: chatInputTypes) => {
  return (
    <div className="w-full h-20 border-t-2 border-black bg-gray-400 relative">
      <input
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setText(e.target.value)
        }
        type="text"
        className="w-10/12 h-full bg-gray-400 outline-none text-black px-3"
        value={text}
        placeholder="Type your message here"
      />
      {/* {text && ( */}
      <button onClick={handleSend} disabled={!text}>
        <FaRegPaperPlane
          className={`text-2xl absolute bottom-0 top-0 my-auto right-3 cursor-pointer ${
            !text ? "opacity-50 cursor-not-allowed" : ""
          }`}
        ></FaRegPaperPlane>
      </button>

      {/* )} */}
    </div>
  );
};

export default ChatInput;
