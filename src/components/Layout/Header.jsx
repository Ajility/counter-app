import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <h2>
        Theo<small>dora.</small>
      </h2>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="counter">Counter</NavLink>
          </li>
          <li>
            <NavLink to="*">404</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
