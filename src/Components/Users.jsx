// import React from 'react'
import { Link } from "react-router-dom";

const Users = () => {
  return (
    <div className="w-1/2 m-auto flex flex-col items-center mt-20">
      <h1 className="text-red-200 text-2xl font-semibold">Users_Page</h1>
      {/* <p className="text-sm font-semibold text-zinc-500">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis
        voluptatibus iure quod, unde quidem beatae ducimus numquam perferendis
        voluptas laudantium.
      </p>
      <button className="px-3 py-2 rounded-lg bg-red-200 mt-10 text-white">
        Know More
      </button> */}

      <div className="grid mt-4">
        <Link
          to="/users/john"
          className="bg-red-200 text-2xl rounded-md hover:bg-red-300 hover:text-white p-3 mb-4"
        >
          John
        </Link>
        <Link
          to="/users/lever"
          className="bg-red-200 text-2xl rounded-md hover:bg-red-300 hover:text-white p-3 mb-4"
        >
          Leverr
        </Link>
        <Link
          to="/users/happy"
          className="bg-red-200 text-2xl rounded-md hover:bg-red-300 hover:text-white p-3 mb-4"
        >
          Happy
        </Link>
      </div>
    </div>
  );
};

export default Users;
