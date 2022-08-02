import axios from "axios";
import { useRouter } from "next/router";
import Footer from "../../components/base/footer/index.js";
import MyLayout from "../../components/layout/MyLayout.js";
import Image from "next/image";
import styles from "./detail.module.css";
import { useState, useEffect } from "react";
const ProductDetail = () => {
  const router = useRouter();
  const id = router.query.id;
  const [data, setData] = useState();
  async function fetchData(id) {
    try {
      const result = await axios({
        method: "GET",
        baseURL: `${process.env.api_recipefood}`,
        url: `/v1/recipe/${id}`,
      });
      const recipes = result.data.result;
      setData(recipes);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchData(id);
  }, [id]);
  console.log("data food", data);
  return (
    <MyLayout>
      <div className={styles.container}>
        <div className={styles.main}>
          <div className={styles.mainvid}>
            <video width={810} controls>
              {/* <source src={data.vid ? data.vid : "/assets/food2.svg"} type="video/mp4"></source> */}
            </video>
          </div>
          {/* <h2>{data.title ? data.title : "data"}</h2> */}
          {/* <h2>{data.ingre ? data.ingre : <div>Loading..</div>}</h2> */}
        </div>
        <div className={styles.sub}>
          <h6>Next</h6>
          <div className={styles.nextvid}>
            <div className={styles.vid}>
              <video width={319} height={160} controls>
                {/* <source src={data.vid ? data.vid : "/assets/food2.svg"} type="video/mp4"></source> */}
              </video>
            </div>
            <p>{/* {data.title} - {data.ingre} */}</p>
          </div>
          <div className={styles.nextvid}>
            <div className={styles.vid}>
              <video width={319} height={160} controls>
                {/* <source src={data.vid ? data.vid : "/assets/food2.svg"} type="video/mp4"></source> */}
              </video>
            </div>
            <p>{/* {data.title} - {data.ingre} */}</p>
          </div>
        </div>
      </div>
      <Footer className="footer" />
    </MyLayout>
  );
};

// export const getServerSideProps = async (context) => {
//   try {
//     const { id } = context.params;
//     const { data: RespData } = await axios.get(`${process.env.api_recipefood}/v1/recipe/${id}`);
//     const result = RespData.result;
//     console.log(result);
//     return {
//       props: { product: RespData.result },
//     };
//   } catch (error) {}
// };

export default ProductDetail;
