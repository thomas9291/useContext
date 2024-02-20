import React from "react";
import classes from "./Cart.module.css";
interface Props {
  items:
    | [
        {
          id: string;
          name: string;
          price: number;
          quantity: number;
        }
      ]
    | any;
  onUpdatedItems: (productId: string, amount: number) => void;
}

const Cart = (props: Props) => {
  const totalAmount = props.items
    .map((element: any) => element.price * element.quantity)
    .reduce((a: number, b: number) => a + b, 0)
    .toFixed(2);
  console.log("total amount form cart: ", totalAmount);
  return (
    <div className={classes.container}>
      <h2>YOUR CART</h2>
      <ul>
        {props.items?.map((element: any) => {
          return (
            <li key={element.id}>
              <div>
                {element.name}
                <span>(${element.price})</span>
              </div>
              <div>
                <button onClick={() => props.onUpdatedItems(element.id, -1)}>
                  -
                </button>
                <span>{element.quantity}</span>
                <button onClick={() => props.onUpdatedItems(element.id, 1)}>
                  +
                </button>
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
