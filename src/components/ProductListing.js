import React, { useState, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
// import canon_at1 from "../img/canon_at1.jpg";

export default function ProductListing(props) {
  const [prodQty, setProdQty] = useState(1);
  const [imgHeight, setImgHeight] = useState("500");
  const imageRef = React.createRef();

  // Create immutable deep copy
  // let product = JSON.parse(JSON.stringify(props.product));
  let product = props.product;

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

  const handleAddToCartClick = (product) => {
    let copyProduct = JSON.parse(JSON.stringify(product));
    // copyProduct.name = copyProduct.name + Math.random();
    copyProduct.qty = prodQty;
    props.handleAddToCartClick(copyProduct);
  };

  return product ? (
    <div className="productListing">
      <div className="breadcrumbs">
        <Link to="/">{"Home / "}</Link>
        <Link
          to="/category"
          onClick={props.handleCategoryClick}
          id={product.category}
        >
          {product.category}
        </Link>
        {" / "}
        <Link
          to="/category"
          onClick={props.handleCategoryClick}
          id={product.category}
        >
          {product.subcategory}
        </Link>
      </div>

      <div className="prodListingWrapper">
        {product && (
          <div className="prodListingLeft" style={{ height: `${imgHeight}px` }}>
            <div>
              <div className="prodPageTitle">{product.name}</div>
              <div>${product.price}</div>
            </div>

            <div
              className="prodDescription"
              dangerouslySetInnerHTML={{ __html: product.description }}
            ></div>

            <div className="qtyCartBtnContainer">
              <div>Quantity:</div>
              <div className="prodQtyWrapper">
                <div className="prodQtyAmount">{prodQty}</div>
                <div className="qtyArrows">
                  <div
                    className="qtyArrowUp"
                    onClick={() => setProdQty(prodQty + 1)}
                  >
                    <i class="fas fa-caret-up"></i>
                  </div>
                  <div
                    className="qtyArrowDown"
                    onClick={() =>
                      prodQty - 1 <= 0 ? setProdQty(1) : setProdQty(prodQty - 1)
                    }
                  >
                    <i class="fas fa-caret-down"></i>
                  </div>
                </div>
              </div>

              <Link
                to="/viewcart"
                onClick={() => handleAddToCartClick(product)}
              >
                <div className="addToCartBtn btn">ADD TO CART +</div>
              </Link>
            </div>
          </div>
        )}

        <div className="prodListingRight">
          <img src={product.image} alt={product.image} ref={imageRef} />
        </div>
      </div>
    </div>
  ) : (
    <Redirect to="/" />
  );
}
