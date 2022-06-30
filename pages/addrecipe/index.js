import { useState } from "react";
import axios from "axios";
import Button from "../../components/base/button";
import MyLayout from "../../components/layout/MyLayout";
import styles from "./addrecipe.module.css";
import Input from "../../components/base/input";
import Footer from "../../components/base/footer";
import { useRouter } from "next/router";
const AddRecipe = () => {
  const router = useRouter();
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
      url: `http://localhost:4000/v1/recipe/`,
      withCredentials: true,
      data: bodyFormData,
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then((res) => {
        alert("produk berhasil di tambah");
        router.push("/");
        console.log(res);
      })
      .catch((e) => {
        alert(e.response.data.message);
        router.push("/login");
      });
  };
  return (
    <MyLayout title="| add Recipe">
      <div>
        <form onSubmit={handleUpload} className={styles.container}>
          <div className={styles.photo}>
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
          <Button title="Add Recipe" color="yellow" btn="post" />
        </form>
      </div>
      <Footer className="footer" />
    </MyLayout>
  );
};

export default AddRecipe;
