import React from "react";
import { Link, Redirect } from "react-router-dom";

export default function ViewCart(props) {
  return props.cart.length > 0 ? (
    <div className="viewCart">
      <div className="viewCartTitle">Shopping Cart</div>
      <table className="viewCartTable">
        <thead>
          <tr>
            <th className="viewCartTableProduct">PRODUCT</th>
            <th>PRICE</th>
            <th>QTY</th>
            <th>TOTAL</th>
          </tr>
        </thead>
        <tbody>
          {props.cart.map((item) => (
            <tr key={item.id}>
              <th className="viewCartTableProduct">
                <Link
                  to="/product"
                  onClick={() => props.handleProductClick(item)}
                >
                  <img
                    className="viewCartImages"
                    src={item.image}
                    alt={item.image}
                  />
                  {item.name}
                </Link>
              </th>
              <th>${item.price}</th>
              <th>{item.qty}</th>
              <th>${(item.price * item.qty).toFixed(2)}</th>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="viewCartButtons">
        <div className="clearCart btn" onClick={props.handleClearCart}>
          CLEAR CART
        </div>
        <div className="checkout btn">CHECKOUT</div>
      </div>
    </div>
  ) : (
    <Redirect to="/" />
  );
}
