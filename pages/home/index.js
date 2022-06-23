import MyLayout from "../../components/layout/MyLayout";
import Image from "next/image";
const home = () => {
  return (
    <>
      <MyLayout title="home">
        <h1>Page home</h1>
        <img src="/assets/omurice.jpg" alt="image" />
        <button type="button" className="btn btn-primary">
          Primary
        </button>
        <hr />
        <Image src="/assets/nugget.jpg" width={300} height={200} alt="image2" />
      </MyLayout>
    </>
  );
};

export default home;
