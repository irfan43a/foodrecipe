import Head from "next/head";
import MyLayout from "../../components/layout/MyLayout";
import { useRouter } from "next/router";
import axios from "axios";
import styles from "../../styles/Product.module.css";
import { useEffect } from "react";
import Router from "next/router";
import Image from "next/image";

const Product = ({ name, products, children }) => {
  const router = useRouter();
  // const handleDelete = (id) => {
  //   axios
  //     .delete(`${process.env.api_recipefood}/v1/recipe/${id}`, { withCredentials: true })
  //     .then((res) => {
  //       alert("success");
  //     })
  //     .catch((err) => {
  //       alert("error");
  //     });
  // };
  return (
    <>
      <MyLayout title="product - tokoku">
        <div className={styles.container}>
          <h1>page product</h1>
          <div className={styles.cards}>
            {products?.map((item) => (
              <div className={styles.card} key={item.idrecipe}>
                {/* <Image key={item.id} id={item.id} src={item.img} layout="fill" objectFit="cover" /> */}
                <h4 className="text-center" key={item.idrecipe}>
                  {item.title}
                </h4>
                <p>{item.ingre}</p>
                <button onClick={() => router.push(`/product/${item.id}`)}>detail</button>
                {/* <button onClick={() => handleDelete(item.id)}>delete</button> */}
              </div>
            ))}
          </div>
        </div>
        {children}
      </MyLayout>
    </>
  );
};
export async function getServerSideProps(context) {
  const cookie = context.req.headers.cookie;
  // if (!cookie) {
  //   context.res.writeHead(302, {
  //     Location: `http://localhost:3000/login`,
  //   });
  //   return {};
  // }
  const { data: RespData } = await axios.get(`${process.env.api_recipefood}/v1/recipe`, {
    withCredentials: true,
    // headers: {
    //   Cookie: cookie,
    // },
  });
  // console.log(data);
  // const name = "irfan";
  return {
    props: {
      products: RespData.data,
    },
  };
}

// Product.getInitialProps = async (ctx) => {
//   const { data: RespData } = await axios.get(`${process.env.api_recipefood}/v1/products`, {withCredentials: true});
//   return { products: RespData.data }
// }

export default Product;
