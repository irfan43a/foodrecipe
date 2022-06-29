import { useState } from "react";
import axios from "axios";
import Button from "../../components/base/button";
import MyLayout from "../../components/layout/MyLayout";
import styles from "./editrecipe.module.css";
import Input from "../../components/base/input";
import Footer from "../../components/base/footer";

const AddRecipe = () => {
  const [dataRecipe, setDataRecipe] = useState({
    title: "",
    ingre: "",
    img: "",
  });
  const [file, setFile] = useState({
    file: null,
    priview: "",
  });

  const handleUploadChange = (e) => {
    console.log(e.target.files[0]);
    let upload = e.target.files[0];
    let preview = URL.createObjectURL(e.target.files[0]);
    setFile(upload);
  };

  const handleChange = (e) => {
    setDataRecipe({
      ...dataRecipe,
      [e.target.name]: e.target.value,
    });
  };
  const handleUpload = (e) => {
    e.preventDefault();

    let bodyFormData = new FormData();
    bodyFormData.append("title", dataRecipe.title);
    bodyFormData.append("ingre", dataRecipe.ingre);
    bodyFormData.append("img", file);

    axios({
      method: "POST",
      url: `http://localhost:4000/v1/recipe/${id}`,
      data: bodyFormData,
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then((res) => {
        alert("produk berhasil di tambah");
        console.log(res);
      })
      .catch((e) => {
        alert(e.response.data.message);
      });
  };
  return (
    <MyLayout title="| edit Recipe">
      <div>
        <form onSubmit={handleUpload} className={styles.container}>
          <div className={styles.photo}>
            <img src={handleUploadChange.preview} width="50px" alt="" />
            <input type="file" value={dataRecipe.img} onChange={handleUploadChange} />
          </div>
          <div>
            <input type="text" name="title" className={styles.inputrecipe} placeholder="Title" value={dataRecipe.title} onChange={handleChange} />
          </div>
          <div>
            <textarea className={styles.ingre} name="ingre" id="" cols="105" rows="10" placeholder="Ingredients" value={dataRecipe.ingre} onChange={handleChange} />
          </div>
          <div>
            <input type="file" />
          </div>
          <Button title="Post" color="yellow" btn="post" />
        </form>
      </div>
      <Footer className="footer" />
    </MyLayout>
  );
};

export default AddRecipe;
