import React from "react";
import { Link } from "react-router-dom";

export default function TopNav(props) {
  return (
    <nav id="topNav">
      <div id="topNavLinks">
        <li>About</li>
        <li>Contact</li>
        <li>Account</li>
        <Link to="/viewcart">
          <li>Cart {props.cart.length}</li>
        </Link>
      </div>
    </nav>
  );
}
