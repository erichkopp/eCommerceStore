import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Nav(props) {
  const [show, setShow] = useState(false);
  const [windowScroll, setWindowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 50 ? setWindowScroll(true) : setWindowScroll(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav
        id="mainNav"
        style={
          windowScroll
            ? { borderBottom: "1px solid #e4e4e4", height: "50px" }
            : { borderBottom: "1px solid #ffffff" }
        }
      >
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
          {/* <div id="logo">LOGO</div> */}
          <img
            id="logo"
            src="https://erichkopp.github.io/eCommerceStore/logo.jpg"
            alt="Vintage Camera Stores Logo"
            style={{
              opacity: windowScroll ? "0" : "1"
            }}
          />
        </Link>

        <div id="navBarRight">
          <ul>
            <li>Search</li>
            <Link to="/viewcart">
              <li>Cart ({props.cart.length})</li>
            </Link>
          </ul>
        </div>
      </nav>

      <div
        // style={
        //   show
        //     ? { display: "flex", opacity: 1 }
        //     : { visibility: "hidden", opacity: 0 }
        // }
        style={{
          marginTop: windowScroll ? "50px" : "120px",
          opacity: show ? "1" : "0",
          visibility: show ? "" : "hidden"
        }}
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
