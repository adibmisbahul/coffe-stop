import axios from "axios";
const API_URL = "http://localhost:3000";

export const getProduct = async () => {
  const response = await axios.get(API_URL + "/detailtransaction/product");
  return response.data;
};

export const payment = async (paymen_method, amount, items) => {
  const response = await axios.post(API_URL + "/payment", {
    paymen_method,
    amount,
    items,
  });
  return response.data;
};

export const getDataTransaction = async () => {
  const response = await axios.get(API_URL + "/detailtransaction/transaction");
  return response.data;
};
