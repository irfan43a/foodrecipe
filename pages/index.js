import MyLayout from "../components/layout/MyLayout";
import styles from "./landing/landing.module.css";
import Button from "../components/base/button";
import { useRouter } from "next/router";
import Link from "next/link";
import Footer from "../components/base/footer";
import Input from "../components/base/input";
import { useState, useEffect } from "react";
import axios from "axios";
import Card from "../components/module/card";
import Router from "next/router";
import Image from "next/image";
const PageIndex = ({ data }) => {
  const router = useRouter();
  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   axios
  //     .get("http://localhost:4000/v1/recipe/", { withCredentials: true })
  //     .then((res) => {
  //       console.log(res);
  //       setData(res.data.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);
  return (
    <MyLayout title="| Home">
      <div className={styles.container}>
        <div className={styles.menu}>
          <h1>
            Discover Recipe <br />& Delicious Food
          </h1>
          <Input className="landing" placeholder="Seacrh Resstourant Food" />
        </div>
        <div className={styles.bg}>
          <div className={styles.mainimg}>
            <Link href="detailvideo">
              <Image src="/assets/delicious.svg" alt="" layout="fill" objectFit="cover" />
            </Link>
          </div>
          <div className={styles.white}></div>
          <div className={styles.yellow}></div>
        </div>
      </div>
      <div className={styles.container2}>
        <h1>Popular For You !</h1>
        <div className={styles.popular}>
          <div className={styles.popularimg}>
            <Image src="/assets/food2.svg" alt="" width={400} height={380} />
          </div>
          <div className={styles.popularimg}>
            <Image src="/assets/food3.svg" alt="" width={400} height={380} />
          </div>
        </div>
      </div>
      <div className={styles.container3}>
        <div className={styles.new}>
          <h1>New Recipe</h1>
          <div className={styles.newimg}>
            <Image src="/assets/food4.svg" alt="" width={450} height={450} />
          </div>
        </div>
        <div className={styles.titlenew}>
          <h1>Healthy Bone Broth Ramen (Quick & Easy)</h1>
          <h6>
            Quick + Easy Chicken Bone Broth Ramen-
            <br /> Healthy chicken ramen in a hurry? That’s right!
          </h6>
          <Button btn="btnlearn" title="Learn More" onClick={() => router.push("/detailrecipe")} />
        </div>
      </div>
      <div className={styles.container4}>
        <h1>Popular Recipe</h1>
        <div className={styles.popurecipe}>
          {data?.map((recipe) => (
            <Card key={recipe.id} title={recipe.title} id={recipe.id} src={recipe.img} />
          ))}
        </div>
      </div>
      <Footer className="footer" />
    </MyLayout>
  );
};

// export async function getServerSideProps(context) {
//   const cookie = context.req.headers.cookie;
//   if (!cookie) {
//     context.res.writeHead(302, {
//       Location: "http://localhost:3000/login",
//     });
//     return {};
//   }
//   const { data: RespData } = await axios.get("http://localhost:4000/v1/recipe/", { withCredentials: true, headers: { Cookie: cookie } });

//   const name = "irfan";
//   return { props: { name: name, data: RespData.data } };
// }

PageIndex.getInitialProps = async (context) => {
  const { data: RespData } = await axios.get("http://localhost:4000/v1/recipe/");
  return { data: RespData.data };
};

export default PageIndex;
