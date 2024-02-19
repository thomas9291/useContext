import React from "react";
import classes from "./cardModal.module.css";
import Cart from "../cart";
interface Props {
  onClick: () => void;
}

const CardModal = (props: Props) => {
  return (
    <dialog className={classes.container}>
      <Cart />
      <div className={classes.btnContainer}>
        <button onClick={props.onClick}>Close</button>
        <button>Checkout</button>
      </div>
    </dialog>
  );
};

export default CardModal;
