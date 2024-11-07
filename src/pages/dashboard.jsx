import axios from "axios";
import { useState, useEffect } from "react";
import CardProduct from "../Components/Fragment/CardProduct";
import SideBar from "../Components/Fragment/Sidebar";

const Dashboard = () => {
  const [products, setProdcuts] = useState([]);
  const getProdcut = async () => {
    const response = await axios.get("http://localhost:2134/product");
    const data = await response.data[1];
    setProdcuts(data);
  };

  useEffect(() => {
    getProdcut;
  }, []);

  console.log(products);

  return (
    <div className="p-2 flex items-center justify-start w-full h-[99.7vh] bg-gray-100 ">
      <SideBar />
    </div>
  );
};

export default Dashboard;

// {products.map((item) => {
//   return (
//     <CardProduct key={item.id}>
//       <CardProduct.Header image={item.image} />
//       <CardProduct.Body
//         name={item.title}
//         price={item.price.toLocaleString("IDR", {
//           style: "currency",
//           currency: "idr",
//         })}
//       />
//       <CardProduct.Footer
//         handleAddToCart={handleAddToCart}
//         id={products.id}
//       />
//     </CardProduct>
//   );
// })}
