import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.jpg";

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/">
        <img src={logo} alt="logo" className="logo" />
      </Link>

      <ul>
        <li><Link to="/menu">MENU</Link></li>
        <li><Link to="/about">ABOUT</Link></li>
        <li><Link to="/contact">CONTACT</Link></li>
      </ul>

      <Link to="/login">
        <button className="btn1">LOGIN</button>
      </Link>
    </div>
  );
};

export default Navbar;
