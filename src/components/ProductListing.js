import React from "react";
import { Link } from "react-router-dom";

export default function ProductListing(props) {
  console.log(props.product.category);
  return (
    <div className="productListing">
      <div className="breadcrumbs">
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
