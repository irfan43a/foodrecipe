import React from "react";
import styles from "./Cardprev.module.css";
import Image from "next/image";
import axios from "axios";
import { useRouter } from "next/router";
import Router from "next/router";

const Card = ({ title, src, id, alt }) => {
  const router = useRouter();
  const deleteRecipe = (id) => {
    axios.delete(`http://localhost:4000/v1/recipe/${id}`, { withCredentials: true }).then(() => {
      alert("data berhasil di hapus");
      Router.replace("/profile");
    });
  };
  return (
    <div className={styles.container}>
      <div className={styles.button}>
        <button onClick={() => router.push("/editRecipe")}>Edit</button>
        <button onClick={() => deleteRecipe(id)}>X</button>
      </div>
      <div className={styles.card}>
        <Image src={src} layout="fill" objectFit="cover" alt={alt} />
        <h2>{title}</h2>
      </div>
    </div>
  );
};

export default Card;
