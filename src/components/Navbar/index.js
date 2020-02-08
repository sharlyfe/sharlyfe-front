import React, { useState } from "react";
import "./style.css";
import { NavLink } from "react-router-dom";

/**
 * @author
 * @function Navbar
 **/

const Navbar = props => {
  const [search, setsearch] = useState(false);

  const onSubmit = e => {
    e.preventDefault();
    alert("searched");
  };

  const openSearch = () => {
    setsearch(true);
  };

  const searchClass = search ? "searchinput active" : "searchinput";
  return (
    <div className="navbar">
      <ul className="navbarMenu">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about-us">About Us</NavLink>
        </li>
        <li>
          <NavLink to="/post">Posts</NavLink>
        </li>
        <li>
          <NavLink to="contact-us">Contact Us</NavLink>
        </li>
      </ul>
      <div className="search">
        <form onSubmit={onSubmit}>
          <input type="text" className={searchClass} placeholder="Search" />
          <img
            onClick={openSearch}
            className="searchicon"
            src={require("../../assets/icons/search.png")}
            alt="search"
          />
        </form>
      </div>
    </div>
  );
};

export default Navbar;
