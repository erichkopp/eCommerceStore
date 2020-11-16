import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

export default function Category(props) {
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

  return (
    <div className="category">
      <div className="breadcrumbs">
        {props.category}
        {" > "}
        {props.category === props.subCategory ? "All" : props.subCategory}
      </div>
      <br />
      <br />
      <div className="categoryListingsWrapper">
        {Object.keys(products).map((product, i) => (
          <Link
            to="/product"
            onClick={() => props.handleProductClick(products[i])}
          >
            <div className="catProdListing" key={product.id}>
              <div className="catProdImage">IMAGE</div>
              <div className="catProdName">{products[product].name}</div>
              <div className="catProdPrice">{products[product].price}</div>
              <div className="catProdDescription">
                {products[product].description}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
