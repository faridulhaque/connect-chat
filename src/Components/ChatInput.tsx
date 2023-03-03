import React, { useEffect } from "react";
import { FaRegPaperPlane } from "react-icons/fa";

type chatInputTypes = {
  handleSend: () => void;
  setText: (value: string) => void;
  text: string;
};

const ChatInput = ({ handleSend, setText, text }: chatInputTypes) => {
  useEffect(():any => {
    const keyDownHandler =  (event: KeyboardEvent) => {
      if (event.key === "Enter") {
        event.preventDefault();
        // do something when "Enter" is pressed
        handleSend()
      }
    };


    document.addEventListener("keydown", keyDownHandler);
    return () => {
      document.removeEventListener("keydown", keyDownHandler);
    };
  }, [handleSend]);



  return (
    <div className="w-full xl:h-20 pc:h-20 notebook:h-20 tablet:h-[10vh] mobile:h-[10vh] micro:h-[10vh] border-t-2 border-black bg-gray-400 relative">
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
