import axios from "axios";
import { useRouter } from "next/router";
import Button from "../../components/base/button";
import Footer from "../../components/base/footer";
import MyLayout from "../../components/layout/MyLayout";
import Image from "next/image";
import styles from "./detail.module.css";

const DetailStatic = ({ product }) => {
  const router = useRouter();
  if (router.isFallback) {
    return <h3>loading......</h3>;
  }
  return (
    // <div>
    //   <h1>page detail static</h1>
    //   <ul>
    //     <li>nama product: {product.title} </li>
    //     <li>description product: {product.ingre}</li>
    //   </ul>
    // </div>
    <MyLayout>
      <div className={styles.container}>
        <h1>{product.title}</h1>
        <div className={styles.mainimg}>
          <Image src={product.img} width={600} height={500} alt="" />
        </div>
        <div className={styles.inggrediens}>
          <h3>Ingredients</h3>
          <p>{product.ingre}</p>
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

export async function getStaticPaths(context) {
  const { data: RespData } = await axios.get(`http://localhost:4000/v1/recipe/`);
  //   console.log(data.RespData);
  const paths = RespData.data.map((item) => {
    return {
      params: {
        id: item.idrecipe + "",
      },
    };
  });
  console.log(paths);
  return {
    paths: paths,
    fallback: true, // false or 'blocking'
  };
}

export async function getStaticProps(context) {
  const id = context.params.id;
  console.log(id);
  const { data: RespData } = await axios.get(`http://localhost:4000/v1/recipe/${id}`);

  return {
    props: {
      product: RespData.result,
    },
  };
}
export default DetailStatic;
