import React from "react";
import MyLayout from "../../components/layout/MyLayout";
import Image from "next/image";

const detailVideo = ({ product }) => {
  return (
    <MyLayout>
      <div className={styles.container}>
        <div className={styles.main}>
          <div className={styles.mainvid}>
            <Image src="/assets/Rectangle 329.svg" alt="" width={850} height={400} />
          </div>
          <video width={400} height={300} controls>
            <source src={product.vid} type="video/mp4"></source>
          </video>
          <h2>Beef Steak with Curry Sauce - [Step 4]</h2>
          <h2>Cut the condiment and then mix it</h2>
        </div>
        <div className={styles.sub}>
          <h6>Next</h6>
          <div className={styles.nextvid}>
            <div className={styles.vid}>
              <Image src="/assets/Rectangle 90.svg" alt="" width={319} height={160} />
            </div>
            <p>Beef Steak with Curry Sauce - [Step 5] Saute condiments together until turn brown</p>
          </div>
          <div className={styles.nextvid}>
            <div className={styles.vid}>
              <Image src="/assets/Rectangle 90.svg" alt="" width={319} height={160} />
            </div>
            <p>Beef Steak with Curry Sauce - [Step 5] Saute condiments together until turn brown</p>
          </div>
          <div className={styles.nextvid}>
            <div className={styles.vid}>
              <Image src="/assets/Rectangle 90.svg" alt="" width={319} height={160} />
            </div>
            <p>Beef Steak with Curry Sauce - [Step 5] Saute condiments together until turn brown</p>
          </div>
        </div>
      </div>
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
export default detailVideo;
