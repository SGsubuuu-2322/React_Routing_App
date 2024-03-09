// import React from 'react'

import { useNavigate, useParams } from "react-router-dom";

const UserDetail = () => {
  const { name } = useParams();
  const Navigate = useNavigate();

  const GoBackHandler = () => {
    // Navigate("/users");
    Navigate(-1);
  };
  return (
    <div className="w-1/2 mx-auto flex flex-col items-center mt-20">
      <h1 className="text-red-200 text-2xl font-semibold">User_Detail_Page</h1>
      <h1 className="text-3xl font-bold mt-3">Hey!!! {name}</h1>
      <button
        onClick={GoBackHandler}
        className="px-3 py-2 rounded-lg bg-red-300 mt-10 text-white"
      >
        Go Back
      </button>
    </div>
  );
};

export default UserDetail;
