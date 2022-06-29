import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Footer from "../../components/base/footer";
import MyLayout from "../../components/layout/MyLayout";
import Card from "../../components/module/cardprev";
import styles from "./profile.module.css";

const Profile = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:4000/v1/recipe/", { withCredentials: true })
      .then((res) => {
        console.log(res);
        setData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <MyLayout title="| Profile">
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
            {/* <div className={styles.recipeimg}>
              <img src="/assets/Rectangle 327.svg" alt="" />
            </div> */}
            {data.map((recipe) => (
              <Card key={recipe.id} title={recipe.title} id={recipe.idrecipe} src={recipe.img} />
            ))}
          </div>
        </div>
      </div>
      <Footer className="footer" />
    </MyLayout>
  );
};

export default Profile;
