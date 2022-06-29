// import axios from "axios";
// import { useRouter } from "next/router";
// const StaticPage = ({ recipe }) => {
//   const router = useRouter();
//   return (
//     <div>
//       <h1>halaman static</h1>
//       <ul>
//         {recipe.map((item) => (
//           <li key={item.idrecipe} onClick={() => router.push(`/static/${item.id}`)}>
//             {item.title} - id: {item.idrecipe}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };
// export const getStaticProps = async () => {
//   const { data: RespData } = await axios.get(`http://localhost:4000/v1/recipe/`);
//   // const result = RespData.data;
//   // console.log(RespData.data);
//   return {
//     props: { recipe: RespData.data },
//   };
// };

// export default StaticPage;
