import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Nav(props) {
  const [show, setShow] = useState(false);

  // const menuHover = (e) => {
  //   setShow(!show);
  // };

  return (
    <>
      <nav id="mainNav">
        <div id="navLinks">
          <ul>
            <Link to="/">
              <li>Home</li>
            </Link>
            <li
              onMouseEnter={() => setShow(true)}
              onMouseLeave={() => setShow(false)}
            >
              Shop
            </li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>

        <Link to="/">
          <div id="logo">LOGO</div>
        </Link>

        <div id="navBarRight">
          <ul>
            <li>Search</li>
            <li>Cart ({props.cart.length})</li>
          </ul>
        </div>
      </nav>

      <div
        style={
          show
            ? { display: "flex", opacity: 1 }
            : { visibility: "hidden", opacity: 0 }
        }
        id="shopCategories"
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
      >
        {Object.keys(props.productCategories).map((cat) => (
          <ul>
            <li
              className="categoryHeader"
              key={cat.id}
              id={cat}
              onClick={() => setShow(false)}
            >
              <Link to="/category" onClick={props.handleCategoryClick} id={cat}>
                {cat}
              </Link>
            </li>
            {props.productCategories[cat].map((subCat) => (
              <li
                className="subCategoryLinks"
                key={subCat.id}
                onClick={() => setShow(false)}
              >
                <Link
                  to="/category"
                  onClick={props.handleCategoryClick}
                  id={cat}
                >
                  {subCat}
                </Link>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </>
  );
}
