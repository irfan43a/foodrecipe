import Navbar from "../module/Navbar";
import Head from "next/head";

const MyLayout = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title || "Food recipe"}</title>
      </Head>
      <Navbar />
      {children}
    </>
  );
};

export default MyLayout;
