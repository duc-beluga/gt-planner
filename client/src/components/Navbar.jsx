import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { logOut, currentUser } = useAuth();
  return (
    <div className="navbar shadow-2xl top-0 bg-white">
      <Link to="/" className="p-2">
        Home
      </Link>
      <Link to="/user" className="p-2">
        User
      </Link>
      {currentUser ? (
        <button onClick={logOut} className="p-2">
          Log Out
        </button>
      ) : (
        <Link to="/" className="p-2">
          Log In
        </Link>
      )}
    </div>
  );
};

export default Navbar;
