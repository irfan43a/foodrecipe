import axios from "axios";
import { useRouter } from "next/router";
import Landing from "./index.js";
const ProductDetail = ({ product }) => {
  const router = useRouter();
  return (
    <Landing>
      <h1>product detail</h1>
      <ul>
        <li>name: {product.name}</li>
        <li>description: {product.description}</li>
        <li>price: {product.price}</li>
      </ul>
      <p>dengan id : {router.query.id} </p>
      <p>filter : {router.query.filter}</p>
      <p>{JSON.stringify(router.query)}</p>
    </Landing>
  );
};

export const getServerSideProps = async (context) => {
  try {
    const { id } = context.params;
    const { data: RespData } = await axios.get(`http://localhost:4000/v1/recipe/${id}`);
    const result = RespData.result;
    console.log(result);
    return {
      props: { product: RespData.result },
    };
  } catch (error) {}
};

export default ProductDetail;
