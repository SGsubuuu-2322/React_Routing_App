// import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Users from "./Components/Users";

function App() {
  return (
    <div>
      <nav className="text-xl font-semibold flex justify-center gap-10 mt-10 bg-red-200">
        <Link to="/">Home</Link>
        <Link to="/users">Users</Link>
        <Link to="/about">About</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
