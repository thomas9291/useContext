import React from "react";
import classes from "./shoppingCard.module.css";

interface Props {
  onClick: () => void;
  quantity: number;
}

const ShoppingCard = (props: Props) => {
  return (
    <button className={classes.container} onClick={props.onClick}>
      Cart({props.quantity})
    </button>
  );
};

export default ShoppingCard;
