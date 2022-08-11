import { useState } from "react";
import axios from "axios";
import Button from "../../components/base/button";
import MyLayout from "../../components/layout/MyLayout";
import styles from "./editrecipe.module.css";
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
  const [file, setFile] = useState({
    file: null,
    priview: "",
  });
  const [video, setVideo] = useState({
    file: null,
    priview: "",
  });

  const handleUploadChange = (e) => {
    // console.log(e.target.files[0]);
    let upload = e.target.files[0];
    console.log("data image", upload);
    setFile(upload);
  };
  const handlevideoUploadChange = (e) => {
    // console.log(e.target.files[0]);
    let upload = e.target.files[0];
    console.log("data Video", upload);
    let preview = URL.createObjectURL(e.target.files[0]);
    setVideo(upload);
  };

  const handleChange = (e) => {
    setDataRecipe({
      ...dataRecipe,
      [e.target.name]: e.target.value,
    });
  };
  const handleUpload = async (e) => {
    console.log("dataupload", dataRecipe);
    e.preventDefault();
    let bodyFormData = new FormData();
    bodyFormData.append("title", dataRecipe.title);
    bodyFormData.append("ingre", dataRecipe.ingre);
    bodyFormData.append("img", file);
    bodyFormData.append("vid", video);

    await axios({
      method: "PUT",
      url: `${process.env.api_recipefood}/v1/recipe/${router.query.id}`,
      data: bodyFormData,
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then((res) => {
        // alert("produk berhasil di tambah");
        swal({
          title: "Good job!",
          text: `${res.data.message}`,
          icon: "success",
        });
        router.push("/profile");
        console.log(res);
        console.log(res);
      })
      .catch((e) => {
        // alert(e.response.data.message);
        swal({
          title: "Oops!",
          text: `${e.response.data.message}`,
          icon: "error",
        });
      });
  };
  return (
    <MyLayout title="| edit Recipe">
      <div>
        <form onSubmit={handleUpload} className={styles.container}>
          <div className={styles.photo}>
            <input type="file" name="img" value={dataRecipe.img} onChange={handleUploadChange} />
          </div>
          <div>
            <input type="text" name="title" className={styles.inputrecipe} placeholder="Title" value={dataRecipe.title} onChange={handleChange} />
          </div>
          <div>
            <textarea className={styles.ingre} name="ingre" id="" cols="105" rows="10" placeholder="Ingredients" value={dataRecipe.ingre} onChange={handleChange} />
          </div>
          <div>
            <input type="file" name="vid" value={dataRecipe.vid} onChange={handlevideoUploadChange} />
          </div>
          <Button title="Edit Recipe" color="yellow" btn="post" />
        </form>
      </div>
      <Footer className="footer" />
    </MyLayout>
  );
};

export default AddRecipe;
