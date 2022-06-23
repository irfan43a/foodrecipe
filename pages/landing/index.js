import React from "react";
import styles from "./landing.module.css";
const LandingPage = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.menu}>
          <h1>Discover Recipe & Delicious Food</h1>
        </div>
        <div className={styles.bg}>
          <div className={styles.white}>putih</div>
          <div className={styles.yellow}>kuning</div>
        </div>
      </div>
      <div className={styles.container2}>
        <div>Popular For You !</div>
        <div>
          <div>
            <img src="" alt="" />
          </div>
          <div>
            <p>Healthy Bone Broth Ramen (Quick & Easy)</p>
          </div>
        </div>
      </div>
      <div className={styles.container3}>
        <div>New Recipe</div>
        <div>
          <img src="" alt="" />
          <img src="" alt="" />
        </div>
      </div>
      <div className={styles.container2}>
        <div>Popular Recipe</div>
        <div>
          <div>
            <img src="" alt="" />
          </div>
          <div>
            <p>Healthy Bone Broth Ramen (Quick & Easy)</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
