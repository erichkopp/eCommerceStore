import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import logo from "../img/logo.jpg";

export default function NavMobile(props) {
  const [showMenu, setShowMenu] = useState(false);
  const [showShop, setShowShop] = useState(false);
  const [showCategory, setShowCategory] = useState(false);
  const [cartQty, setCartQty] = useState(0);

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

  useEffect(() => {
    if (showMenu === false) {
      setShowShop(false);
      setShowCategory(false);
    }
  }, [showMenu, setShowShop, setShowCategory]);

  return (
    <>
      <div className="navMobile">
        <div className="mobileNavIconsLeft">
          <i
            onClick={() => setShowMenu(!showMenu)}
            class={
              !showMenu
                ? "hamburgerMenu mobileNavIcons fas fa-bars"
                : "exitBTN mobileNavIcons fas fa-times"
            }
          ></i>
        </div>

        <Link
          to="/"
          className="mobileNavLogo"
          onClick={() => setShowMenu(false)}
        >
          <img className="mobileNavLogo" src={logo} alt="Logo" />
        </Link>

        <div className="mobileNavIconsRight">
          <i class="mobileNavIcons fas fa-search"></i>

          <Link to="/viewcart">
            <i class="mobileNavIcons fas fa-shopping-cart"></i>
          </Link>
        </div>
        <div className="mobileNavCartQty">{cartQty !== 0 && cartQty}</div>
      </div>

      <CSSTransition
        in={showMenu}
        timeout={500}
        classNames="mobileMenu"
        unmountOnExit
      >
        <div className="mobileMenu">
          <ul>
            <li onClick={() => setShowMenu(false)}>
              <Link to="/">Home</Link>
            </li>

            <li>
              <div onClick={() => setShowShop(!showShop)}>
                Shop
                <span> {showShop ? "-" : "+"}</span>
              </div>

              {showShop && (
                <div className="shopMobileCats">
                  {Object.keys(props.productCategories).map((cat) => (
                    <div key={cat.id}>
                      <div
                        onClick={(e) =>
                          showCategory === e.target.id
                            ? setShowCategory(false)
                            : setShowCategory(e.target.id)
                        }
                        id={cat}
                      >
                        {cat} {showCategory === cat ? "-" : "+"}
                      </div>

                      {showCategory === cat && (
                        <div className="shopMobileSubcats">
                          {props.productCategories[cat].map((subCat) => (
                            <div onClick={() => setShowMenu(false)}>
                              <Link
                                to="/category"
                                key={subCat.id}
                                onClick={props.handleCategoryClick}
                                id={cat}
                              >
                                {subCat}
                              </Link>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </li>

            <li>About</li>

            <li className="mobileNavSocialLinks">
              <div>
                CONTACT:
                <p>Erich Kopp</p>
                <p>ekopp@3dcart.com</p>
              </div>
              {Object.keys(props.footerRightLinks).map((link) => (
                <a
                  href={props.footerRightLinks[link].url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i class={props.footerRightLinks[link].icon}></i>
                </a>
              ))}
            </li>
          </ul>
        </div>
      </CSSTransition>
    </>
  );
}
