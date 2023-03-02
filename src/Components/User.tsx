import React from "react";

type searchTypes = {
  searchedUser: any;
  handleOpenChat: () => void;
  setSearchedUser:(value: string) =>void;
}

const User = ({searchedUser, handleOpenChat, setSearchedUser}:searchTypes) => {



  return (
    <div onClick={handleOpenChat} className="w-full h-20 flex py-2 bg-blue-100 cursor-pointer">
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
        <p className="mt-3 text-2xl text-gray-700">{searchedUser?.displayName}</p>
        <small className="text-sm mt-3 text-gray-600">{searchedUser?.email}</small>
      </div>
    </div>
  );
};

export default User;
