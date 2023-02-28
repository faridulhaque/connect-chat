import React from "react";

const User = () => {
  return (
    <div className="w-full h-20 flex py-2 bg-blue-100 cursor-pointer">
      <div className="w-[20%] flex items-center justify-center">
        {" "}
        <img
          className="w-[55%] h-[90%] rounded-full"
          src="https://i.ibb.co/X4GfPsW/man-todo.png"
          alt=""
        />
      </div>
      <div className="w-[80%] h-[98%]">
        <p className="mt-3 text-2xl text-gray-700">Faridul Haque</p>
      </div>
    </div>
  );
};

export default User;
