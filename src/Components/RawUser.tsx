import React from "react";

type rawUser = {
  rawUser: any;
  handleSelectChat: (value: any) => void;
  selectedUid: string;
};

const RawUser = ({ rawUser, handleSelectChat, selectedUid }: rawUser) => {
  const { displayName } = rawUser?.userInfo;

  return (
    <div
      onClick={() => handleSelectChat(rawUser?.userInfo)}
      className={`w-full h-20 flex py-2  cursor-pointer border-b-2 border-gray-400 ${
        rawUser?.userInfo.uid === selectedUid ? "bg-blue-400" : "bg-white"
      }`}
    >
      <div className="w-[20%] flex items-center justify-center">
        {" "}
        <img
          className="w-[55%] h-[90%] rounded-full"
          // src={searchedUser.photoURL}
          src={"https://i.ibb.co/6YK1cXs/avatar.jpg"}
          alt="avatar"
        />
      </div>
      <div className="w-[80%] h-[98%]">
        <p className="mt-1 text-2xl text-gray-700 ">{displayName}</p>
        <small className="mt-3 text-sm text-gray-500">
          {rawUser?.lastMessage?.text.length < 20
            ? rawUser.lastMessage.text
            : rawUser.lastMessage.text.slice(0, 20) + " ..."}
        </small>
      </div>
    </div>
  );
};

export default RawUser;
