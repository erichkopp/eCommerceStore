import React from "react";
import { Link } from "react-router-dom";

export default function ProductListing(props) {
  return (
    <div className="productListing">
      Product listing
      {props.product && (
        <>
          <div>{props.product.name}</div>
          <div>{props.product.price}</div>
          <div>{props.product.description}</div>
          <Link
            to="/viewcart"
            onClick={() => props.handleAddToCartClick(props.product)}
          >
            <div className="addToCartBtn">Add to Cart</div>
          </Link>
        </>
      )}
    </div>
  );
}
