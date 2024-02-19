import React from "react";
import classes from "./card.module.css";
import Image, { StaticImageData } from "next/image";

interface Props {
  img: string | StaticImageData;
  title: string;
  price: number;
  description: string;
  onClick: () => void;
}

const Card = (props: Props) => {
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
        <button className={classes.btn} onClick={props.onClick}>
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default Card;
