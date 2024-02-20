import React, { useContext } from "react";
import classes from "./card.module.css";
import Image, { StaticImageData } from "next/image";
import { CartContext } from "@/store/shopping-cart-context";

interface Props {
  img: string | StaticImageData;
  title: string;
  price: number;
  description: string;
  id: string;
}

const Card = (props: Props) => {
  const { addItemToCart } = useContext(CartContext);
  return (
    <div className={classes.container}>
      <div className={classes.imgContainer}>
        <Image
          className={classes.img}
          src={props.img}
          width={350}
          height={350}
          alt="img"
          priority
        />
      </div>
      <div className={classes.content}>
        <h4>{props.title}</h4>
        <p className={classes.price}>${props.price}</p>
        <p className={classes.description}>{props.description}</p>
        <button className={classes.btn} onClick={() => addItemToCart(props.id)}>
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default Card;
