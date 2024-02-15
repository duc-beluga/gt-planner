import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { logOut, currentUser } = useAuth();
  return (
    <div className="navbar shadow-2xl top-0 bg-white gap-x-4 px-4">
      <div className="navbar-start">
        <ul className="menu menu-horizontal rounded-box">
          <li>
            <Link to="/">Home</Link>
          </li>
          {currentUser && (
            <li>
              <Link to="/user">User</Link>
            </li>
          )}
          {currentUser && (
            <li>
              <Link to="/user">Saved</Link>
            </li>
          )}
        </ul>
      </div>
      <div className="navbar-end">
        <ul className="menu menu-horizontal rounded-box">
          {currentUser ? (
            <li>
              <button onClick={logOut}>Log Out</button>
            </li>
          ) : (
            <li>
              <Link to="/">Log In</Link>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
