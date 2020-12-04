import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../img/logo.jpg";
import img01 from "../img/homePageImages/img01.jpeg";

export default function NavDesktop(props) {
  const [cartQty, setCartQty] = useState(0);
  const [show, setShow] = useState(false);
  const [windowScroll, setWindowScroll] = useState(false);
  const [logoFadeIn, setLogoFadeIn] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setWindowScroll(true);
        setLogoFadeIn(false);
      } else {
        setWindowScroll(false);
        let timer = setTimeout(() => setLogoFadeIn(true), 1000);

        return () => {
          clearTimeout(timer);
        };
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const cartItems = (cart) => {
      let qty = 0;
      for (let i = 0; i < cart.length; i++) {
        qty += cart[i].qty;
      }
      setCartQty(qty);
    };
    cartItems(props.cart);
  });

  return (
    <>
      <nav
        className="navDesktop"
        style={{
          // boxShadow:
          //   windowScroll && !show ? "rgba(0, 0, 0, 0.3) 0 1px 15px" : "none",
          borderBottom: windowScroll ? "1px solid #e4e4e4" : "",
          height: windowScroll ? "50px" : ""
        }}
        // style={
        //   windowScroll
        //     ? { boxShadow: "rgba(0, 0, 0, 0.3) 5px 5px 15px", height: "50px" }
        //     : { borderBottom: "1px solid #ffffff" }
        // }
      >
        <div className="navLinks">
          <ul>
            <Link to="/">
              <li>Home</li>
            </Link>
            <li
              className="navShop"
              onMouseEnter={() => setShow(true)}
              onMouseLeave={() => setShow(false)}
            >
              Shop
              <i className="fas fa-chevron-down"></i>
            </li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>

        {logoFadeIn && (
          <Link
            to="/"
            style={{
              visibility: windowScroll ? "hidden" : "visible"
            }}
          >
            <img id="logo" src={logo} alt="Vintage Camera Stores Logo" />
          </Link>
        )}

        <div className="navBarRight">
          <ul>
            <li>Search</li>
            <Link to="/viewcart">
              <li>Cart ({cartQty})</li>
            </Link>
          </ul>
        </div>
      </nav>

      {/* SHOP HOVER MENU */}
      <div
        style={{
          marginTop: windowScroll ? "50px" : "120px",
          opacity: show ? "1" : "0",
          visibility: show ? "" : "hidden"
        }}
        className="shopCategories"
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
        <div className="shopCategoriesImage">
          <img src={img01} alt="Menu" />
        </div>
      </div>
    </>
  );
}
