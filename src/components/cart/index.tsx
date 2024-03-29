import React, { useContext } from "react";
import classes from "./Cart.module.css";
import { CartContext } from "@/store/shopping-cart-context";

const Cart = () => {
  const { items, updatedItem } = useContext(CartContext);
  const totalAmount = items
    .map((element: any) => element.price * element.quantity)
    .reduce((a: number, b: number) => a + b, 0)
    .toFixed(2);

  return (
    <div className={classes.container}>
      <h2>YOUR CART</h2>
      <ul>
        {items?.map((element: any) => {
          return (
            <li key={element.id}>
              <div>
                {element.name}
                <span>(${element.price})</span>
              </div>
              <div>
                <button onClick={() => updatedItem(element.id, -1)}>-</button>
                <span>{element.quantity}</span>
                <button onClick={() => updatedItem(element.id, 1)}>+</button>
              </div>
            </li>
          );
        })}
      </ul>
      <div className={classes.totalContainer}>
        Cart Total: <span>${totalAmount}</span>
      </div>
    </div>
  );
};

export default Cart;
