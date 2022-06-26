import React from "react";
import Button from "../../components/base/button";
import Footer from "../../components/base/footer";
import Input from "../../components/base/input";
import MyLayout from "../../components/layout/MyLayout";
import styles from "./detail.module.css";

const DetailRecipe = () => {
  return (
    <MyLayout>
      <div className={styles.container}>
        <h1>Loream Sandwich</h1>
        <div className={styles.mainimg}>
          <img src="/assets/Rectangle 313.svg" alt="" />
        </div>
        <div className={styles.inggrediens}>
          <h3>Ingredients</h3>
          <p>- 2 Eggs</p>
          <p>- 2 tbsp</p>
          <p>- 3 slice</p>
        </div>
        <div className={styles.vid}>
          <h3>Video Step</h3>
          <Button btn="btnVid" color="yellow" title="D" />
          <Button btn="btnVid" color="yellow" title="D" />
          <Button btn="btnVid" color="yellow" title="D" />
        </div>
        <div className={styles.coment}>
          <div>
            <textarea className={styles.ingre} name="comment" id="" cols="105" rows="10" placeholder="Comment" />
          </div>
          <Button title="simpan" btn="login" color="yellow"></Button>
          <h3>Comment</h3>
        </div>
      </div>
      <Footer className="footer" />
    </MyLayout>
  );
};

export default DetailRecipe;
