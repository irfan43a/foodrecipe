import axios from "axios";
import { useRouter } from "next/router";

const DetailStatic = ({ product }) => {
  const router = useRouter();
  if (router.isFallback) {
    return <h3>loading......</h3>;
  }
  return (
    <div>
      <h1>page detail static</h1>
      <ul>
        <li>nama product: {product.name} </li>
        <li>description product: {product.description}</li>
        <li>price product: {product.price}</li>
      </ul>
    </div>
  );
};

export async function getStaticPaths(context) {
  // const id = context.params.id
  const { data: RespData } = await axios.get(`http://localhost:4000/v1/products/`);
  const paths = RespData.data.map((item) => {
    return {
      params: {
        id: item.id + "",
      },
    };
  });
  console.log(paths);
  // data path dengan format [
  //   { params: { id: '3' } },
  //   { params: { id: '5' } },
  //   { params: { id: '6' } },
  //   { params: { id: '7' } },
  //   { params: { id: '8' } }
  // ]
  return {
    paths: paths,
    fallback: true, // false or 'blocking'
  };
}

export async function getStaticProps() {
  const id = context.params.id;
  const { data: RespData } = await axios.get(`http://localhost:4000/v1/products/${id}`);
  // setTimeout(()=>{
  return {
    props: {
      product: RespData.data,
    },
  };
  // }, 2000)
}
export default DetailStatic;
