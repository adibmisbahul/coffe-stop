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
  const [modal, showModal] = useState(false);

  useEffect(() => {
    const getProdcut = async () => {
      const response = await axios.get("http://localhost:2134/use/coffe");
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

  const [selectedValue, setSelectedValue] = useState("");

  const handleSelection = (event) => {
    const value = event.target.value;
    setSelectedValue(value);
    console.log("Metode pembayaran yang dipilih:", value);
  };

  const ModalInvoice = () => {
    return (
      <div className="w-[100%] min-h-full backdrop-blur-sm flex items-center justify-center absolute ">
        <div className="w-[60vw] h-[80vh] bg-white border shadow p-3 rounded-md ">
          <button
            onClick={() => showModal(false)}
            className="w-6 text-white bg-blue-600 rounded-full"
          >
            X
          </button>
          <div class="relative overflow-x-auto ">
            <table class="w-full text-sm text-left rtl:text-right text-black ">
              <thead class="text-xs text-gray-900 uppercase ">
                <tr>
                  <th scope="col" class="px-6 py-3">
                    Product name
                  </th>
                  <th scope="col" class="px-6 py-3">
                    price
                  </th>
                  <th scope="col" class="px-6 py-3">
                    jumlah
                  </th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item) => {
                  return (
                    <tr class="bg-white ">
                      <th
                        scope="row"
                        class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                      >
                        {item.title}
                      </th>
                      <td class="px-6 py-4">
                        {Intl.NumberFormat("id-ID", {
                          style: "currency",
                          currency: "IDR",
                        }).format(item.price)}
                      </td>
                      <td class="px-6 py-4">{item.id}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div className="flex">
            <h2 className="p-5 font-semibold">
              Total Price: {calculateTotalPrice()}
            </h2>
            <select
              name=""
              onChange={handleSelection}
              id="payment-method"
              value={selectedValue}
            >
              <option value="cash">cash</option>
              <option value="qris">qris</option>
            </select>
          </div>
          <button className="w-full px-3 text-white transition duration-500 bg-blue-600 rounded-md h-9 hover:bg-blue-700 active:bg-blue-800 focus:bg-blue-700">
            Confirm
          </button>
        </div>
      </div>
    );
  };

  const handleShowInvoice = () => {
    showModal(true);
  };

  // #====================================================#
  return (
    <>
      {modal && <ModalInvoice />}
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
          <h1 className="p-2 font-bold">Invoice</h1>
          <div className="w-full h-[78vh] flex flex-col items-center ">
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
          </div>
          <h2 className="p-2 font-semibold">
            Total Price: {calculateTotalPrice()}
          </h2>
          <button
            onClick={handleShowInvoice}
            className="w-[80%] px-3 text-white transition duration-500 bg-blue-600 rounded-md h-9 hover:bg-blue-700 active:bg-blue-800 focus:bg-blue-700"
          >
            Payment
          </button>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
