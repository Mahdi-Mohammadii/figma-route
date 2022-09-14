import React from "react";
import { Link } from "react-router-dom";
import TopSection from "../topSection";

const Menu = () => {
  return (
    <>
      <nav className="header__nav">
        <img src="/assets/image/logo.svg" alt="Logo" />
        <ul className="header__nav__ul">
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/">POPULAR</Link>
          </li>
          <li>
            <Link to="/">NEWCOMMER</Link>
          </li>
          <li>
            <Link to="/">ABOUT</Link>
          </li>
        </ul>
        <button className="header__nav__button">
          <Link to="/login">Login</Link>
        </button>
        <i className="fa fa-bars fa-2x header__nav__i"></i>
      </nav>
      <TopSection />

    </>

  );
};

export default Menu;
