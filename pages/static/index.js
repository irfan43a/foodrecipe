import axios from "axios";

const StaticPage = ({ data }) => {
  return (
    <div>
      <h1>halaman static</h1>
      <ul>
        {data.map((item) => {
          <li key={item.idrecipe}>{item.title}</li>;
        })}
      </ul>
    </div>
  );
};

export const getStaticProps = async () => {
  const { result: RespData } = await axios.get(`http://localhost:4000/v1/recipe/`);
  const result = RespData.result;
  console.log(result);
  return {
    props: { product: result },
  };
};

export default StaticPage;
