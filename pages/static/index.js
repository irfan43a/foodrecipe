import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import Button from "../../components/base/button";
import Footer from "../../components/base/footer";
import Input from "../../components/base/input";
import MyLayout from "../../components/layout/MyLayout";
import Card from "../../components/module/card";
import Image from "next/image";
import styles from "../landing/landing.module.css";
const StaticPage = ({ recipe }) => {
  const router = useRouter();
  return (
    // <div>
    //   <h1>halaman static</h1>
    //   <ul>
    //     {recipe.map((item) => (
    //       <li key={item.idrecipe} onClick={() => router.push(`/static/${item.idrecipe}`)}>
    //         {item.title} - id: {item.idrecipe}
    //       </li>
    //     ))}
    //   </ul>
    // </div>
    <MyLayout title="| Home Static">
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
          {recipe?.map((recipe) => (
            <Card key={recipe.id} title={recipe.title} id={recipe.id} src={recipe.img} onClick={() => router.push(`/static/${recipe.idrecipe}`)} />
          ))}
        </div>
      </div>
      <Footer className="footer" />
    </MyLayout>
  );
};
export const getStaticProps = async () => {
  const { data: RespData } = await axios.get(`http://localhost:4000/v1/recipe/`);
  // const result = RespData.data;
  // console.log(RespData.data);
  return {
    props: { recipe: RespData.data },
  };
};

export default StaticPage;
