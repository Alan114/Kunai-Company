import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Temple from "../assets/temple.svg";
import { useLogout } from "../hooks/useLogout";

function Navbar() {
  const { logout, isPending } = useLogout();

  return (
    <div className="navbar">
      <ul>
        <li className="logo">
          <img src={Temple} alt="dojo logo" />
          <span>Kunai company</span>
        </li>

        <li>
          <Link to="/login">Login</Link>
          <Link to="/signup">Signup</Link>
        </li>
        <li>
          {!isPending && (
            <button className="btn" onClick={logout}>
              Logout
            </button>
          )}
          {isPending && (
            <button className="btn" disabled>
              Logging out...
            </button>
          )}
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
