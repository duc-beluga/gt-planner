import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { logOut, currentUser, logInWithGoogle } = useAuth();

  return (
    <div className="navbar shadow-2xl bg-white">
      <div className="navbar-start">
        <ul className="menu menu-horizontal rounded-box font-semibold">
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
        {currentUser ? (
          <button onClick={logOut} className="btn">
            Log Out
          </button>
        ) : (
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost rounded-btn"
            >
              Login
            </div>
            <ul
              tabIndex={0}
              className="menu dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-52 mt-4"
            >
              <li>
                <button onClick={logInWithGoogle}>Login with Google</button>
              </li>
              <li>
                <Link to="/">Login with Github</Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
