import React from "react";
import { Chart } from "react-google-charts";
import { useEffect, useState } from "react";
import CardAdmin from "../Components/Fragment/CardAdmin";

const Admin = () => {
  const [karyawan, setKaryawan] = useState([]);
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const getTotalProduct = async () => {
      const resnpone = await fetch("http://localhost:2134/product");
      console.log(resnpone);
      const data = await resnpone.json();
      setProduct(data[1]);
    };
    getTotalProduct();
  }, []);

  const getDataKaryawan = async () => {
    try {
      const response = await fetch("http://localhost:2134/allKaryawan");
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      setKaryawan(data.data[1]);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    getDataKaryawan();
  }, []);

  const barista = karyawan.filter((karyawan) => karyawan.role === "barista");
  const waiters = karyawan.filter((karyawan) => karyawan.role === "waiter");
  const chef = karyawan.filter((karyawan) => karyawan.role === "chef");
  const cashier = karyawan.filter((karyawan) => karyawan.role === "cashier");
  const manager = karyawan.filter((karyawan) => karyawan.role === "manager");

  const data = [
    ["barista", "Density", { role: "style" }],
    ["barista", barista.length, "#4F46E5"],
    ["waiter", waiters.length, "#84CC16"],
    ["chef", chef.length, "red"],
    ["cashier", cashier.length, "#F97316"],
    ["manager", manager.length, "grey"],
  ];

  const options = {
    title: "Data Karyawan",
    legend: { position: "none" },
    animation: {
      duration: 500,
      easing: "inAndOut",
    },
  };

  const owner = localStorage.getItem("nama");
  const date = new Date();
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const dayName = days[date.getDay()];
  console.log(dayName); // Example: "Wednesday"

  return (
    <div className="flex flex-col justify-center w-full h-full gap-4 p-5">
      <div className="flex flex-wrap justify-center gap-5">
        <CardAdmin data={dayName} />
        <CardAdmin title={"Total Product"} data={product.length} />
        <CardAdmin title={"Total Karyawan"} data={karyawan.length} />
        <CardAdmin title={"haloo 👋"} data={owner} style={"flex gap-2"} />
      </div>
      <div className="w-full h-full">
        <Chart
          chartType="ColumnChart"
          width="100%"
          height="100%"
          data={data}
          options={options}
        />
      </div>
    </div>
  );
};

export default Admin;
