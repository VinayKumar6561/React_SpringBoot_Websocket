import React, { useContext } from "react";
import "../styles/Navbar.css";
import { useSelector, useDispatch } from 'react-redux';
import { toggleVisible } from "../redux/toggleSlice";


export default function Navbar() {

   const visible = useSelector((state) => state.toggle_visible.visible);
  const dispatch = useDispatch();

  return (
    <nav className="navbar">
      <div className="nav-brand">MyApp</div>
      <ul className="nav-links">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
      <button
        className="login-btn"
        onClick={() => {
           dispatch(()=>dispatch(toggleVisible()));
        }}
      >
        {visible ? "Show Data" : "Login" }
      </button>
    </nav>
  );
}
