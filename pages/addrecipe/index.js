import { useState } from "react";
import axios from "axios";
import Button from "../../components/base/button";
import MyLayout from "../../components/layout/MyLayout";
import styles from "./addrecipe.module.css";
import Input from "../../components/base/input";

const addRecipe = () => {
  // const [recipe, setRecipe] = useState({
  //   title: "",
  //   ingre: "",
  //   vid: "",
  //   photo: "",
  // });
  // const handleChange = (e) => {
  //   setRecipe({
  //     ...recipe,
  //     [e.target.name]: e.target.value,
  //   });
  // };
  return (
    <MyLayout>
      <div className={styles.container}>
        <div className={styles.photo}>
          <input type="file" />
        </div>
        <div>
          <Input type="text" className="inputrecipe" placeholder="Title" />
        </div>
        <div>
          <textarea className={styles.ingre} name="ingredients" id="" cols="105" rows="10" placeholder="Ingredients" />
        </div>
        <div>
          <input type="file" />
        </div>
        <Button title="Post" color="yellow" btn="post" />
      </div>
    </MyLayout>
  );
};

export default addRecipe;
