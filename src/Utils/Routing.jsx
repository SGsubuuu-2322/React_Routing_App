// import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Components/Home";
import Users from "../Components/Users";
import About from "../Components/About";
import UserDetail from "../Components/UserDetail";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/users" element={<Users />} />
      <Route path="/users/:name" element={<UserDetail />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
};

export default Routing;
