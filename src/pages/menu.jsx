import React from "react";
import menu from "../images/Menu.jpg"; 
import "../App.css"; 
import Navbar from "../components/Navbar";


const Menu = () => {
  return (
    <div className="menu-page">
     

      <h1>Our Menu</h1>

      <img src={menu} alt="Menu" className="menu-image" />

      <p>Delicious biryani made with fresh ingredients!💖</p>
    </div>
  );
};

export default Menu;
