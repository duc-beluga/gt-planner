import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex">
      <Link to="/" className="p-2">
        Home
      </Link>
      <Link to="/user" className="p-2">
        User
      </Link>
    </div>
  );
};

export default Navbar;
