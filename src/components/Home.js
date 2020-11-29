import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import HomePageScrollEffects from "./HomePageScrollEffects";
import home_banner from "../img/home_banner.jpg";

export default function Home(props) {
  let products = [
    props.allProducts[2],
    props.allProducts[4],
    props.allProducts[8]
  ];

  const [bannerOpacity, setBannerOpacity] = useState(1);
  const [bannerPosition, setBannerPosition] = useState(0);
  const [imgHeight, setImgHeight] = useState();
  const imageRef = React.createRef();

  const [imgHover, setImgHover] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setBannerOpacity(1);
      } else {
        setBannerOpacity(
          (window.innerHeight - window.scrollY / 2) / window.innerHeight
        );
        setBannerPosition((bannerPosition - window.scrollY) / 20);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  useEffect(() => {
    const handleResize = () => {
      if (
        imageRef.current &&
        imageRef.current.getBoundingClientRect().height > 0
      ) {
        setImgHeight(imageRef.current.getBoundingClientRect().height);
      }
    };
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  const handleAddToCartClick = (product) => {
    let copyProduct = JSON.parse(JSON.stringify(product));
    // copyProduct.name = copyProduct.name + Math.random();
    copyProduct.qty = 1;
    props.handleAddToCartClick(copyProduct);
  };

  return (
    <div className="home">
      <div className="bannerContainer">
        <img
          src={home_banner}
          alt="Home Banner"
          className="homeBanner"
          style={{ opacity: bannerOpacity, top: `${bannerPosition}px` }}
        />
        <div className="homeHero">
          <div className="homeHeroText">
            <p>
              SPECIALIZING IN ALL SORTS OF COOL SHIT AND CAMERAS AND WHO KNOWS
              WHAT THE FUCK ELSE!
            </p>
          </div>
          <div className="homeHeroText">
            <p>BUY SOME SHIT FROM ME PLEASE!</p>
          </div>
        </div>
      </div>
      <div className="homeContent">
        <div className="homeTitle">Featured Products</div>
        <div className="categoryListingsWrapper">
          {Object.keys(products).map((product, i) => (
            <Link
              to="/product"
              onClick={() => props.handleProductClick(products[i])}
            >
              <div className="catProdListing" key={product.id}>
                <div
                  className="catImageContainer"
                  style={{ height: `${imgHeight}px` }}
                >
                  <img
                    src={products[product].image}
                    className="catProdImage"
                    alt={products[product].name}
                    ref={imageRef}
                    onMouseEnter={() => setImgHover([true, products[product]])}
                    onMouseLeave={() => setImgHover(false)}
                  ></img>
                  <Link
                    to="/viewcart"
                    onClick={() => handleAddToCartClick(products[product])}
                  >
                    <div
                      className="catAddToCart"
                      id={products[product].name}
                      onMouseEnter={() =>
                        setImgHover([true, products[product]])
                      }
                      onMouseLeave={() => setImgHover(false)}
                      style={
                        imgHover && imgHover[1] === products[product]
                          ? { transform: "translateY(-50px)" }
                          : { transform: "none" }
                      }
                    >
                      ADD TO CART +
                    </div>
                  </Link>
                </div>
                <div
                  className="catProdNameandPrice"
                  onMouseEnter={() => setImgHover([true, products[product]])}
                  onMouseLeave={() => setImgHover(false)}
                >
                  <div className="catProdName">{products[product].name}</div>
                  <div className="catProdPrice">${products[product].price}</div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <HomePageScrollEffects />
    </div>
  );
}
