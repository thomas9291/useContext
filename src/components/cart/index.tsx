import React from "react";
import classes from "./Cart.module.css";

const Cart = () => {
  return (
    <div className={classes.container}>
      <h2>YOUR CART</h2>
      <ul>
        <li>
          <div>
            Product Name <span>($49.99)</span>
          </div>
          <div>
            <button>-</button>
            <span>4</span>
            <button>+</button>
          </div>
        </li>
      </ul>
      <div className={classes.totalContainer}>
        Cart Total: <span>$389.95</span>
      </div>
    </div>
  );
};

export default Cart;
