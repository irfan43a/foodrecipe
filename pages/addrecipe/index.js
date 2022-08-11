import { useState } from "react";
import axios from "axios";
import Button from "../../components/base/button";
import MyLayout from "../../components/layout/MyLayout";
import styles from "./addrecipe.module.css";
import Footer from "../../components/base/footer";
import { useRouter } from "next/router";
import swal from "sweetalert";
const AddRecipe = () => {
  const router = useRouter();
  const [dataRecipe, setDataRecipe] = useState({
    title: "",
    ingre: "",
    img: "",
    vid: "",
  });
  const [imagePriview, setImagePriview] = useState("");

  const [file, setFile] = useState({
    file: null,
    priview: "",
  });
  const [video, setVideo] = useState({
    file: null,
    priview: "",
  });

  const handleUploadChange = (e) => {
    console.log(e.target.files[0]);
    let upload = e.target.files[0];
    let preview = URL.createObjectURL(e.target.files[0]);
    setFile(upload);
    setImagePriview(preview);
  };
  const handlevideoUploadChange = (e) => {
    console.log(e.target.files[0]);
    let upload = e.target.files[0];
    let preview = URL.createObjectURL(e.target.files[0]);
    setVideo(upload);
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
    bodyFormData.append("vid", video);

    axios({
      method: "POST",
      url: `${process.env.api_recipefood}/v1/recipe/`,
      withCredentials: true,
      data: bodyFormData,
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then((res) => {
        swal({
          title: "Good job!",
          text: `${res.data.message}`,
          icon: "success",
        });
        router.push("/profile");
        console.log(res);
      })
      .catch((e) => {
        swal({
          title: "Oops!",
          text: `${e.response.data.message}`,
          icon: "error",
        });
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
            <input type="file" value={dataRecipe.vid} onChange={handlevideoUploadChange} />
          </div>
          <Button title="Add Recipe" color="yellow" btn="post" />
        </form>
      </div>
      <Footer className="footer" />
    </MyLayout>
  );
};

export default AddRecipe;
