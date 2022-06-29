import React from "react";
import { useRouter } from "next/router";
import Product from "./index";
import axios from "axios";

const ProductDetail = ({ product }) => {
  // const router = useRouter();

  return (
    <Product>
      <h1>product detail</h1>
      <ul>
        <li>name: {product.title}</li>
        <li>description: {product.ingre}</li>
      </ul>
    </Product>
  );
};

export const getServerSideProps = async (context) => {
  try {
    const { id } = context.params;
    console.log(id);
    const { data: RespData } = await axios.get(`http://localhost:4000/v1/recipe/${id}`);
    const result = RespData.result;
    console.log(result);
    return {
      props: { product: result },
    };
  } catch (error) {
    return {
      props: {
        product: {},
      },
    };
  }
};

export default ProductDetail;
