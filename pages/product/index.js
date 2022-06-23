import styles from "../../styles/Home.module.css";
// import Button from "../../components/base/button";
import MyLayout from "../../components/layout/MyLayout";
import { useRouter } from "next/router";

const Product = ({ children }) => {
  const router = useRouter();

  return (
    <>
      <MyLayout title="product - tokoku">
        <div className={styles.container}>
          <h1>page product</h1>
          <button className="btn btn-primary" onClick={() => router.push("/home")}>
            pindah ke home
          </button>
        </div>
        {children}
      </MyLayout>
    </>
  );
};

export default Product;
