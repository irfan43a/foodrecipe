import axios from "axios";
import { useRouter } from "next/router";
import Button from "../../components/base/button/index.js";
import Footer from "../../components/base/footer/index.js";
import MyLayout from "../../components/layout/MyLayout.js";
import Landing from "./index.js";
import Image from "next/image";
import styles from "./detail.module.css";
const ProductDetail = ({ product }) => {
  const router = useRouter();
  return (
    // <Landing>
    //   <h1>product detail</h1>
    //   <ul>
    //     <li>name: {product.name}</li>
    //     <li>description: {product.description}</li>
    //     <li>price: {product.price}</li>
    //   </ul>
    //   <p>dengan id : {router.query.id} </p>
    //   <p>filter : {router.query.filter}</p>
    //   <p>{JSON.stringify(router.query)}</p>
    // </Landing>
    <MyLayout>
      <div className={styles.container}>
        <h1>{product.title}</h1>
        <div className={styles.mainimg}>
          <Image src={product.img} width={400} height={300} alt="" />
        </div>
        <div className={styles.inggrediens}>
          <h3>Ingredients</h3>
          <p>{product.ingre}</p>
        </div>
        <div className={styles.vid}>
          <h3>Video Step</h3>
          <Button btn="btnVid" color="yellow" title="D" onClick={() => router.push(`/detailvideo/${product.idrecipe}`)} />
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

export const getServerSideProps = async (context) => {
  try {
    const { id } = context.params;
    const { data: RespData } = await axios.get(`${process.env.api_recipefood}/v1/recipe/${id}`);
    const result = RespData.result;
    console.log(result);
    return {
      props: { product: RespData.result },
    };
  } catch (error) {}
};

export default ProductDetail;
