import MyLayout from "../components/layout/MyLayout";
import styles from "./landing/landing.module.css";
import Button from "../components/base/button";
import { useRouter } from "next/router";
const PageIndex = () => {
  const router = useRouter();
  return (
    <MyLayout>
      <div className={styles.container}>
        <div className={styles.menu}>
          <h1>
            Discover Recipe <br />& Delicious Food
          </h1>
        </div>
        <div className={styles.bg}>
          <div className={styles.mainimg}>
            <img src="/assets/delicious.svg" alt="" />
          </div>
          <div className={styles.white}></div>
          <div className={styles.yellow}></div>
        </div>
      </div>
      <div className={styles.container2}>
        <h1>Popular For You !</h1>
        <div className={styles.popular}>
          <div className={styles.popularimg}>
            <img src="/assets/food2.svg" alt="" />
          </div>
          <div className={styles.popularimg}>
            <img src="/assets/food3.svg" alt="" />
          </div>
        </div>
      </div>
      <div className={styles.container3}>
        <div className={styles.new}>
          <h1>New Recipe</h1>
          <div className={styles.newimg}>
            <img src="/assets/food4.svg" alt="" />
          </div>
        </div>
        <div className={styles.titlenew}>
          <h1>Healthy Bone Broth Ramen (Quick & Easy)</h1>
          <h6>
            Quick + Easy Chicken Bone Broth Ramen-
            <br /> Healthy chicken ramen in a hurry? That’s right!
          </h6>
          <Button btn="btnlearn" title="Learn More" onClick={() => router.push("/detailrecipe")}></Button>
        </div>
      </div>
      <div className={styles.container4}>
        <h1>Popular Recipe</h1>
        <div className={styles.popurecipe}>
          <div className={styles.recipeimg}>
            <img src="/assets/Rectangle 314.svg" alt="" />
          </div>
          <div className={styles.recipeimg}>
            <img src="/assets/Rectangle 315.svg" alt="" />
          </div>
          <div className={styles.recipeimg}>
            <img src="/assets/Rectangle 316.svg" alt="" />
          </div>
          <div className={styles.recipeimg}>
            <img src="/assets/Rectangle 317.svg" alt="" />
          </div>
          <div className={styles.recipeimg}>
            <img src="/assets/Rectangle 318.svg" alt="" />
          </div>
          <div className={styles.recipeimg}>
            <img src="/assets/Rectangle 319.svg" alt="" />
          </div>
        </div>
      </div>
    </MyLayout>
  );
};

export default PageIndex;
