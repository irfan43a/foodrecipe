import Link from "next/link";
import React from "react";
import MyLayout from "../../components/layout/MyLayout";
import styles from "./profile.module.css";

const profile = () => {
  return (
    <MyLayout>
      <div className={styles.container}>
        <div className={styles.profile}>
          <div className={styles.profimg}>
            <img src="/assets/Ellipse 127.svg" alt="" />
          </div>
          <h2>Garneta Sharina</h2>
        </div>
        <div>
          <div className={styles.link}>
            <Link href="">
              <a>My Recipe</a>
            </Link>
            <Link href="">
              <a>Saved Recipe</a>
            </Link>
            <Link href="">
              <a>Liked Recipe</a>
            </Link>
          </div>
          <div className={styles.recipe}>
            <div className={styles.recipeimg}>
              <img src="/assets/Rectangle 327.svg" alt="" />
            </div>
            <div className={styles.recipeimg}>
              <img src="/assets/Rectangle 328.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </MyLayout>
  );
};

export default profile;
