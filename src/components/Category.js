import React, { useState, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";

export default function Category(props) {
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

  let products = [];

  for (let i = 0; i < props.allProducts.length; i++) {
    if (
      props.allProducts[i].category === props.category &&
      props.allProducts[i].subcategory === props.subCategory
    ) {
      products.push(props.allProducts[i]);
    } else if (
      props.allProducts[i].category === props.category &&
      props.category === props.subCategory
    ) {
      products.push(props.allProducts[i]);
    }
  }

  // const handleAddToCartClick = (product) => {
  //   product.qty = 1;
  //   // console.log(product);
  //   props.handleAddToCartClick(product);
  // };

  return props.category ? (
    <div className="category">
      <div className="catPageTitle">
        {props.subCategory ? props.subCategory : props.category}
      </div>

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
                  onClick={() => props.handleAddToCartClick(products[product])}
                >
                  <div
                    className="catAddToCart"
                    id={products[product].name}
                    onMouseEnter={() => setImgHover([true, products[product]])}
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
  ) : (
    <Redirect to="/" />
  );
}
