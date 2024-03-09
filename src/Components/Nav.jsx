// import React from 'react'
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="text-xl font-semibold flex justify-center gap-10 mt-10 bg-red-200">
      <NavLink to="/">
        {(e) => {
          return (
            <span
              className={[
                e.isActive ? "text-red-400" : "",
                e.isActive ? "font-bold" : "",
              ].join(" ")}
            >
              Home
            </span>
          );
        }}
      </NavLink>
      <NavLink
        className={(e) => {
          return [
            e.isActive ? "text-red-400" : "",
            e.isActive ? "font-bold" : "",
          ].join(" ");
        }}
        to="/users"
      >
        Users
      </NavLink>
      <NavLink
        style={(e) => {
          return {
            color: e.isActive ? "Tomato" : "",
            fontWeight: e.isActive ? "bold" : "",
          };
        }}
        to="/about"
      >
        About
      </NavLink>
    </nav>
  );
};

export default Nav;
