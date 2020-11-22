import React, { useState, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";

export default function ProductListing(props) {
  const [prodQty, setProdQty] = useState(1);
  const [imgHeight, setImgHeight] = useState("500");
  const imageRef = React.createRef();

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

  const handleAddToCartClick = () => {
    props.product.qty = prodQty;
    props.handleAddToCartClick(props.product);
  };

  return props.product ? (
    <div className="productListing">
      <div className="breadcrumbs">
        <Link to="/">{"Home / "}</Link>
        <Link
          to="/category"
          onClick={props.handleCategoryClick}
          id={props.product.category}
        >
          {props.product.category}
        </Link>
        {" / "}
        <Link
          to="/category"
          onClick={props.handleCategoryClick}
          id={props.product.category}
        >
          {props.product.subcategory}
        </Link>
      </div>

      <div className="prodListingWrapper">
        {props.product && (
          <div className="prodListingLeft" style={{ height: `${imgHeight}px` }}>
            <div>
              <div className="prodPageTitle">{props.product.name}</div>
              <div>$ {props.product.price}</div>
            </div>

            <div
              className="prodDescription"
              dangerouslySetInnerHTML={{ __html: props.product.description }}
            ></div>

            <div>
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
                onClick={() => handleAddToCartClick(props.product)}
                // onClick={() => {
                //   (props.product.qty = prodQty),
                //     props.handleAddToCartClick(props.product)props.handleAddToCartClick(props.product);
                // }}
              >
                <div className="addToCartBtn">ADD TO CART +</div>
              </Link>
            </div>
          </div>
        )}

        <div className="prodListingRight">
          <img
            src={`https://erichkopp.github.io/eCommerceStore/${props.product.image}`}
            alt={props.product.image}
            ref={imageRef}
          />
        </div>
      </div>
    </div>
  ) : (
    <Redirect to="/" />
  );
}
