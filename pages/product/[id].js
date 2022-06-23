import { useRouter } from "next/router";
import Product from "./index.js";
const ProductDetail = () => {
  const router = useRouter();
  return (
    <Product>
      <h1>ProductDetail</h1>
      <h1>hai</h1>
      <h1>hai</h1>
      <h1>hai</h1>
      <h1>hai</h1>
      <h1>hai</h1>
      <h1>hai</h1>
      <h1>hai</h1>
      <p>dengan id : {router.query.id}</p>
    </Product>
  );
};

export default ProductDetail;
