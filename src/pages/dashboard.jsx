import { useState, useEffect } from "react";
import CardMenu from "../Components/Fragment/CardMenu";
import CardCart from "../Components/Fragment/CardCart";
import { getProduct } from "../services/services";
import { payment } from "../services/services";
import ModalInvoice from "../Components/Fragment/ModalInvoice";

const Dashboard = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [modal, showModal] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("");

  useEffect(() => {
    const getDataProduct = async () => {
      const result = await getProduct();
      setProducts(result);
    };
    getDataProduct();
  }, []);

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

  console.log(calculateTotalPrice());

  const handleSelection = (event) => {
    const value = event.target.value;
    setPaymentMethod(value);
    console.log("Metode pembayaran yang dipilih:", value);
  };

  const handlePayment = async () => {
    try {
      const paymentProces = await payment(
        paymentMethod,
        calculateTotalPrice(),
        cart.map((item) => ({
          product_id: item.id,
          quantity: 10,
        }))
      );

      console.log(`payment succes`, paymentProces);
    } catch (error) {
      console.log("payment invalid");
    }
  };

  const handleShowInvoice = () => {
    showModal(true);
  };

  return (
    <>
      {modal && (
        <ModalInvoice
          showModal={showModal}
          cart={cart}
          calculateTotalPrice={calculateTotalPrice}
          handleSelection={handleSelection}
          paymentMethod={paymentMethod}
          handlePayment={handlePayment}
        />
      )}
      <div className="flex items-center justify-start w-full p-2 overflow-hidden max-h-sreen bg-slate-50">
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
