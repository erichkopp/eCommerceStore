import React from "react";

export default function ViewCart(props) {
  return (
    <div className="viewCart">
      VIEW CART
      {props.cart.map((item, i) => (
        <div className="cartContents">
          <div>
            {item.name} {item.price} {(item.id = i)}
            <span onClick={() => props.handleRemoveItem(item)}>X</span>
          </div>
        </div>
      ))}
      <div id="clearCart" onClick={props.handleClearCart}>
        Clear Cart
      </div>
    </div>
  );
}
