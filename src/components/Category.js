import React, { useState, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";

export default function Category(props) {
  const [imgHeight, setImgHeight] = useState();
  const imageRef = React.createRef();

  const [imgHover, setImgHover] = useState(false);

  let allProducts = props.allProducts;

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

  let products = [];

  for (let i = 0; i < allProducts.length; i++) {
    if (
      allProducts[i].category === props.category &&
      allProducts[i].subcategory === props.subCategory
    ) {
      products.push(allProducts[i]);
    } else if (
      allProducts[i].category === props.category &&
      props.category === props.subCategory
    ) {
      products.push(allProducts[i]);
    }
  }

  const handleAddToCartClick = (product) => {
    let copyProduct = JSON.parse(JSON.stringify(product));
    copyProduct.qty = 1;
    props.handleAddToCartClick(copyProduct);
  };

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
            </div>
          </Link>
        ))}
      </div>
    </div>
  ) : (
    <Redirect to="/" />
  );
}
