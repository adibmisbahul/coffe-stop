import axios from "axios";
import { useState, useEffect } from "react";
import SideBar from "../Components/Fragment/Sidebar";

import CardMenu from "../Components/Fragment/CardMenu";

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
    <div className="p-2 flex items-center justify-start w-full h-[99.7vh] bg-gray-100 ">
      <SideBar />
      <div className="flex flex-wrap p-5 w-[70%] gap-5">
        {products.map((item) => {
          console.log("item:", item);
          return (
            <CardMenu
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
      <div className="w-[20%] h-[90vh] ">
        {cart.map((item) => {
          return (
            <div className="" key={item.id}>
              <h1>{item.title}</h1>
              <h1>{item.price}</h1>
              <button onClick={() => handleRemoveFromCart(item)}>-</button>
            </div>
          );
        })}
        <h2>Total Price: {calculateTotalPrice()}</h2>
      </div>
    </div>
  );
};

export default Dashboard;
