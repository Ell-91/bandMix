import React, { useState } from "react";
import { GiBandit } from "react-icons/gi";
import "./navbar.css";
import { IoMdCloseCircle } from "react-icons/io";
import { TbGridDots } from "react-icons/tb";

const Navbar = () => {
  const [active, setActive] = useState("navBar");

  const showNav = () => {
    setActive("navBar activeNavbar");
  };

  const removeNavbar = () => {
    setActive("navBar");
  };

  return (
    <section className="navBarSection">
      <header className="header flex">
        <div className="logoDiv">
          <a href="#" className="logo flex">
            <h1>
              <GiBandit className="icon" />
              Band Finder.
            </h1>
          </a>
        </div>

        <div className={active}>
          <ul className="navLists flex">
            <li className="navItems">
              <a href="#" className="navLink">
                Home
              </a>
            </li>

            <li className="navItems">
              <a href="#" className="navLink">
                Find a Band
              </a>
            </li>

            <li className="navItems">
              <a href="#" className="navLink">
                Join a Band
              </a>
            </li>

            <li className="navItems">
              <a href="#" className="navLink">
                Book Talent
              </a>
            </li>

            <li className="navItems">
              <a href="#" className="navLink">
                About
              </a>
            </li>

            <button className="btn">
              <a href="#"> FIND NOW</a>
            </button>
          </ul>

          <div onClick={removeNavbar} className="closeNavBar">
            <IoMdCloseCircle className="icon" />
          </div>
        </div>

        <div onClick={showNav} className="toggleNavbar">
          <TbGridDots className="icon" />
        </div>
      </header>
    </section>
  );
};
export default Navbar;
