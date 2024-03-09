// import React from 'react'
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="text-xl font-semibold flex justify-center gap-10 mt-10 bg-red-200">
      <Link to="/">Home</Link>
      <Link to="/users">Users</Link>
      <Link to="/about">About</Link>
    </nav>
  );
};

export default Nav;
