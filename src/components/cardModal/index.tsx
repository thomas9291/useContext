import React from "react";
import classes from "./cardModal.module.css";
import Cart from "../cart";
interface Props {
  onClick: () => void;
  items: [
    {
      id: string;
      name: string;
      price: number;
      quantity: number;
    }
  ];
  onUpdatedItems: (productId: string, amount: number) => void;
}

const CardModal = (props: Props) => {
  return (
    <dialog className={classes.container}>
      <Cart items={props.items} onUpdatedItems={props.onUpdatedItems} />
      <div className={classes.btnContainer}>
        <button onClick={props.onClick}>Close</button>
        <button>Checkout</button>
      </div>
    </dialog>
  );
};

export default CardModal;
