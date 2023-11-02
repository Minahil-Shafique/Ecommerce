import React from "react";
import { Link } from "react-router-dom";
import Cart from "./Cart";

function Header() {
  return (
    <nav className="header">
      <div className="flex">
        <Link className="home" to="/">
          Home
        </Link>
        <Link to="/shop">Shop</Link>

        <Cart />
      </div>
    </nav>
  );
}

export default Header;
