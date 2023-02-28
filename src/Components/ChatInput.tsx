import React from 'react';
import {FaRegPaperPlane} from "react-icons/fa"

const ChatInput = () => {
    return (
        <div className="w-full h-20 border-t-2 border-black bg-gray-400 relative">
            <input type="text" className='w-10/12 h-full bg-gray-400 outline-none text-black px-3'/>
            <FaRegPaperPlane className='text-2xl absolute bottom-0 top-0 my-auto right-3 cursor-pointer'></FaRegPaperPlane>
        </div>
    );
};

export default ChatInput;