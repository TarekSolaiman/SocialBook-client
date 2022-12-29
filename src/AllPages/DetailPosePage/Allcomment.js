import React from "react";

const Allcomment = ({ com }) => {
  const { comment, userName, userPhoto } = com;
  return (
    <div className="flex items-center my-10 p-5 bg-gray-900 rounded-lg">
      <img src={userPhoto} className="w-12 h-12 rounded-full mr-3" alt="" />
      <div>
        <p className="font-semibold">{userName}</p>
        <p>{comment}</p>
      </div>
    </div>
  );
};

export default Allcomment;
