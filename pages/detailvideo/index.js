import React from "react";
import MyLayout from "../../components/layout/MyLayout";
import styles from "./detailvideo.module.css";

const detailVideo = () => {
  return (
    <MyLayout>
      <div className={styles.container}>
        <div className={styles.main}>
          <div className={styles.mainvid}>
            <img src="/assets/Rectangle 329.svg" alt="" />
          </div>
          <h2>Beef Steak with Curry Sauce - [Step 4]</h2>
          <h2>Cut the condiment and then mix it</h2>
        </div>
        <div className={styles.sub}>
          <h6>Next</h6>
          <div className={styles.nextvid}>
            <div className={styles.vid}>
              <img src="/assets/Rectangle 90.svg" alt="" />
            </div>
            <p>Beef Steak with Curry Sauce - [Step 5] Saute condiments together until turn brown</p>
          </div>
          <div className={styles.nextvid}>
            <div className={styles.vid}>
              <img src="/assets/Rectangle 90.svg" alt="" />
            </div>
            <p>Beef Steak with Curry Sauce - [Step 5] Saute condiments together until turn brown</p>
          </div>
          <div className={styles.nextvid}>
            <div className={styles.vid}>
              <img src="/assets/Rectangle 90.svg" alt="" />
            </div>
            <p>Beef Steak with Curry Sauce - [Step 5] Saute condiments together until turn brown</p>
          </div>
        </div>
      </div>
    </MyLayout>
  );
};

export default detailVideo;
