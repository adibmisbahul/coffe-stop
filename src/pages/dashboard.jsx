import axios from "axios";
import { useState, useEffect } from "react";
// #====================================================#
import SideBar from "../Components/Fragment/Sidebar";
import CardMenu from "../Components/Fragment/CardMenu";
import CardCart from "../Components/Fragment/CardCart";
// #====================================================#
const Dashboard = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const getProdcut = async () => {
      const response = await axios.get("http://localhost:2134/product");
      const data = response.data[1];
      setProducts(data);
    };
    getProdcut();
  }, []);

  console.log(products);
  const handleAddToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  const handleRemoveFromCart = (product) => {
    setCart((prevCart) => {
      const index = prevCart.findIndex((item) => item.id === product.id);
      if (index !== -1) {
        return [...prevCart.slice(0, index), ...prevCart.slice(index + 1)];
      }
      return prevCart;
    });
  };

  const calculateTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price, 0);
  };

  return (
    <div className="flex items-center justify-start w-full p-2 overflow-hidden max-h-sreen bg-slate-50">
      <SideBar />
      <div
        className="flex flex-wrap p-5 w-[70%] justify-center gap-5 h-[97vh] overflow-x-auto [&::-webkit-scrollbar]:w-2 
  [&::-webkit-scrollbar-track]:bg-gray-100 
  [&::-webkit-scrollbar-thumb]:bg-gray-300
  dark:[&::-webkit-scrollbar-track]:bg-inherit 
  dark:[&::-webkit-scrollbar-thumb]:bg-blue-600 [&::-webkit-scrollbar-thumb]:rounded-xl "
      >
        {products.map((item) => {
          console.log("item:", item);
          return (
            <CardMenu
              key={item.id}
              image={item.image}
              title={item.title}
              price={Intl.NumberFormat("id-ID", {
                style: "currency",
                currency: "IDR",
              }).format(item.price)}
              click={() => handleAddToCart(item)}
            />
          );
        })}
      </div>
      <div className="w-[25%] h-[97vh] flex flex-col items-center ">
        <h1 className="font-bold">Invoice</h1>
        {cart.map((item) => {
          return (
            <CardCart
              key={item.id}
              image={item.image}
              title={item.title}
              price={item.price}
              click={() => handleRemoveFromCart(item)}
            />
          );
        })}
        <h2>Total Price: {calculateTotalPrice()}</h2>
      </div>
    </div>
  );
};

export default Dashboard;
