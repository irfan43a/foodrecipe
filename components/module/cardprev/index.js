import React from "react";
import styles from "./Cardprev.module.css";
import Image from "next/image";
import axios from "axios";
import { useRouter } from "next/router";
import Router from "next/router";
import swal from "sweetalert";

const Card = ({ title, src, id, alt, onClick }) => {
  const router = useRouter();
  const deleteRecipe = (id) => {
    axios
      .delete(`${process.env.api_recipefood}/v1/recipe/${id}`, { withCredentials: true })
      .then((result) => {
        swal({
          title: "Good job!",
          text: `${result.data.message}`,
          icon: "success",
        });
        Router.replace("/");
      })
      .catch((error) => {
        swal({
          title: "Oops!",
          text: `${error.response.data.message}`,
          icon: "error",
        });
        router.push("/login");
      });
  };
  return (
    <div className={styles.container}>
      <div className={styles.button}>
        <button onClick={() => router.push(`/editRecipe/${id}`)}>Edit</button>
        <button onClick={() => deleteRecipe(id)}>X</button>
      </div>
      <div className={styles.card}>
        <Image src={src} layout="fill" objectFit="cover" alt={alt} />
        <h2 onClick={onClick}>{title}</h2>
      </div>
    </div>
  );
};

export default Card;
