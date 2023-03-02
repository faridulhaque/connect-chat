import React from 'react';
type chatBoxTopType = {
    displayName: string
}

const ChatBoxTop = ({displayName}:chatBoxTopType) => {
   
    return (
        <div className="h-20 w-full bg-gray-700 flex items-center">
            <p className="text-white text-2xl ml-3">{displayName}</p>
        </div>
    );
};

export default ChatBoxTop;