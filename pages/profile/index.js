import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Footer from "../../components/base/footer";
import MyLayout from "../../components/layout/MyLayout";
import Card from "../../components/module/cardprev";
import styles from "./profile.module.css";
import Image from "next/image";
import Button from "../../components/base/button";

const Profile = () => {
  const router = useRouter();
  const [data, setData] = useState([]);
  const [page, setPage] = useState({
    currentPage: 1,
    limit: 5,
    sortBy: "",
    sort: "asc",
  });

  useEffect(() => {
    axios
      .get(
        `${process.env.api_recipefood}/v1/recipe/?page=${page.currentPage}&limit=${page.limit}
      ${page.sortBy ? "&sortBy=" + page.sortBy : ""}${page.sort ? "&sort=" + page.sort : ""}`,
        { withCredentials: true }
      )
      .then((res) => {
        console.log(res);
        setData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [page]);
  return (
    <MyLayout title="| Profile">
      <div className={styles.container}>
        <div className={styles.profile}>
          <div className={styles.profimg}>
            <Image src="/assets/Ellipse 127.svg" alt="image" width={100} height={100} />
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
          <div>
            <select
              name="sortBy"
              id="sortBy"
              value={page.sortBy}
              onChange={(e) => {
                setPage({ ...page, sortBy: e.target.value });
              }}
            >
              <option value="">Sort Berdasarkan</option>
              <option value="title">Nama</option>
              <option value="idrecipe">ID</option>
            </select>
            <Button title="1" className="pagination" onClick={() => setPage({ ...page, currentPage: 1 })} />
            <Button title="2" className="pagination" onClick={() => setPage({ ...page, currentPage: 2 })} />
            <Button title="3" className="pagination" onClick={() => setPage({ ...page, currentPage: 3 })} />
            <Button title="4" className="pagination" onClick={() => setPage({ ...page, currentPage: 4 })} />
            <Button title="5" className="pagination" onClick={() => setPage({ ...page, currentPage: 5 })} />
          </div>
          <div className={styles.recipe}>
            {/* <div className={styles.recipeimg}>
              <img src="/assets/Rectangle 327.svg" alt="" />
            </div> */}
            {data.map((recipe) => (
              <Card key={recipe.id} title={recipe.title} id={recipe.idrecipe} src={recipe.img} onClick={() => router.push(`/landing/${recipe.idrecipe}`)} />
            ))}
          </div>
        </div>
      </div>
      <Footer className="footer" />
    </MyLayout>
  );
};

export default Profile;
