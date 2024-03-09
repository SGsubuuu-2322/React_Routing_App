// import React from "react";
import { Routes, Route } from "react-router-dom";
import Nav from "./Components/Nav";
import Home from "./Components/Home";
import About from "./Components/About";
import Users from "./Components/Users";

function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
