import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import { BrowserRouter, Route, Link } from "react-router-dom";
// import Nav from "./Nav";
// import TopLinks from "./TopLinks";

export default function Home(props) {
  let products = [
    props.allProducts[2],
    props.allProducts[4],
    props.allProducts[8]
  ];

  const [imgHeight, setImgHeight] = useState();
  const imageRef = React.createRef();

  const [imgHover, setImgHover] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (imageRef.current) {
        setImgHeight(imageRef.current.getBoundingClientRect().height);
      }
    };
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  // const handleAddToCartClick = (product) => {
  //   product.qty = 1;
  //   // console.log(product);
  //   props.handleAddToCartClick(product);
  // };

  return (
    <div className="home">
      <img
        src="https://erichkopp.github.io/eCommerceStore/wallpaper1.jpg"
        alt="Home Banner"
        className="homeBanner"
      />
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
                    src={`https://erichkopp.github.io/eCommerceStore/${products[product].image}`}
                    className="catProdImage"
                    alt={products[product].name}
                    ref={imageRef}
                    onMouseEnter={() => setImgHover([true, products[product]])}
                    onMouseLeave={() => setImgHover(false)}
                  ></img>
                  <Link
                    to="/viewcart"
                    // onClick={() => handleAddToCartClick(products[product])}
                    onClick={() =>
                      props.handleAddToCartClick(products[product])
                    }
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
                {/* <div className="catProdDescription">
                {products[product].description}
              </div> */}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
