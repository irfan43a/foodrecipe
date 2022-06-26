import React from "react";
import styles from "./Card.module.css";
import Image from "next/image";

const Card = ({ title, src }) => {
  return (
    <div className={styles.card}>
      <Image src={src} layout="fill" objectFit="cover" />
      <h2>{title}</h2>
    </div>
  );
};

export default Card;
