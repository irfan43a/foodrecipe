import axios from "axios";
import { useRouter } from "next/router";
import Footer from "../../components/base/footer/index.js";
import MyLayout from "../../components/layout/MyLayout.js";
import Image from "next/image";
import styles from "./detail.module.css";
const ProductDetail = ({ product }) => {
  const router = useRouter();
  return (
    <MyLayout>
      <div className={styles.container}>
        <div className={styles.main}>
          <div className={styles.mainvid}>
            <video width={810} controls>
              <source src={product.vid} type="video/mp4"></source>
            </video>
          </div>
          <h2>{product.title}</h2>
          <h2>{product.ingre}</h2>
        </div>
        <div className={styles.sub}>
          <h6>Next</h6>
          <div className={styles.nextvid}>
            <div className={styles.vid}>
              <video width={319} height={160} controls>
                <source src={product.vid} type="video/mp4"></source>
              </video>
            </div>
            <p>
              {product.title} - {product.ingre}
            </p>
          </div>
          <div className={styles.nextvid}>
            <div className={styles.vid}>
              <video width={319} height={160} controls>
                <source src={product.vid} type="video/mp4"></source>
              </video>
            </div>
            <p>
              {product.title} - {product.ingre}
            </p>
          </div>
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
