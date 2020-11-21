import React from "react";

export default function ViewCart(props) {
  return (
    <div className="viewCart">
      VIEW CART
      <div className="cartContents">
        {props.cart.map((item, i) => (
          <div key={item.id}>
            {item.name} {item.price} {item.qty} {(item.id = i)}
            <span onClick={() => props.handleRemoveItem(item)}>X</span>
          </div>
        ))}
      </div>
      <div id="clearCart" onClick={props.handleClearCart}>
        Clear Cart
      </div>
    </div>
  );
}
