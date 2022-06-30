import React from "react";
import styles from "./Card.module.css";
import Image from "next/image";

const Card = ({ title, src, alt, onClick }) => {
  return (
    <div className={styles.card}>
      <Image src={src} layout="fill" objectFit="cover" alt={alt} />
      <h2 onClick={onClick}>{title}</h2>
    </div>
  );
};

export default Card;
