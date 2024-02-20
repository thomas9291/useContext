import React, { useContext } from "react";
import classes from "./shoppingCard.module.css";
import { CartContext } from "@/store/shopping-cart-context";

interface Props {
  onClick: () => void;
}

const ShoppingCard = (props: Props) => {
  const { items } = useContext(CartContext);
  const totalQuantity = items
    .map((element: any) => element.quantity)
    .reduce((a: any, b: any) => a + b, 0);
  return (
    <button className={classes.container} onClick={props.onClick}>
      Cart({totalQuantity})
    </button>
  );
};

export default ShoppingCard;
