import React from "react";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { AgCharts } from "ag-charts-react";

import CardAdmin from "../Components/Fragment/CardAdmin";
import SideBarAdmin from "../Components/Fragment/SideBarAdmin";

import peopleIcon from "../assets/image/fluent--people.svg";
import foodIcon from "../assets/image/food.svg";
import dollarIcon from "../assets/image/dollar.svg";
import transactionIcon from "../assets/image/transaction.svg";

const Admin = () => {
  const [karyawan, setKaryawan] = useState([]);
  const [product, setProduct] = useState([]);

  const getTotalProduct = async () => {
    const resnpone = await fetch("http://localhost:2134/product");
    console.log(resnpone);
    const data = await resnpone.json();
    setProduct(data[1]);
  };
  useEffect(() => {
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
      console.log("failed to fetch");
    }
  };
  useEffect(() => {
    getDataKaryawan();
  }, []);

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

  const getToday = new Date();
  const day = getToday.getDate();
  const monthIndex = getToday.getMonth();
  const year = getToday.getFullYear();
  const times = getToday.getTimezoneOffset();
  console.log({ times });

  const monthNames = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember",
  ];

  const [options, setOptions] = useState({
    data: [
      { month: "Jan", avgTemp: 2.3, iceCreamSales: 162000 },
      { month: "Mar", avgTemp: 6.3, iceCreamSales: 302000 },
      { month: "May", avgTemp: 16.2, iceCreamSales: 800000 },
      { month: "Jul", avgTemp: 22.8, iceCreamSales: 1254000 },
      { month: "Sep", avgTemp: 14.5, iceCreamSales: 950000 },
      { month: "Nov", avgTemp: 8.9, iceCreamSales: 200000 },
    ],
    series: [
      { type: "bar", xKey: "month", yKey: "iceCreamSales", cornerRadius: 15 },
    ],
  });

  const monthName = monthNames[monthIndex];

  return (
    <div className="flex w-auto h-[99.7vh] bg-[#EFF3F4]">
      <div className="basis-[20%]">
        <SideBarAdmin />
      </div>
      <div className="basis-[60%] p-5 ">
        <div className="pt-5">
          <h1 className="text-3xl font-semibold">Dashboard</h1>
          <h1 className="text-[#AAACAD]">{`${day} ${monthName} ${year}`}</h1>
        </div>
        <div className="flex mt-4 justify-around">
          <CardAdmin
            title={"Total order"}
            data={120}
            color={"bg-[#CDC3FE]"}
            icon={foodIcon}
            detailText={"Total order hari ini"}
          />
          <CardAdmin
            title={"margin"}
            data={230000}
            color={"bg-[#ABC8FF]"}
            icon={foodIcon}
            detailText={"margin hari ini"}
          />
          <CardAdmin
            title={"halo"}
            data={120}
            color={"bg-[#92E3B8]"}
            icon={foodIcon}
            detailText={"Total order hari ini"}
          />
        </div>
        <div className=" rounded-lg w-[100] h-[60vh]  flex-col items-center justify-center mt-2">
          <h1 className="font-semibold text-xl">Revenue</h1>
          <AgCharts
            options={options}
            style={{ width: "100%", height: "53vh" }}
          />
        </div>
      </div>
      <div className=" basis-[20%] flex flex-col gap-2 pr-3">
        <div className=" h-[15vh]">hhhhh</div>
        <div className="bg-white h-[40vh] rounded font-semibold p-2">
          Top most menu
        </div>
        <div className="bg-white h-[40vh] rounded-lg font-semibold p-2">
          My team
        </div>
      </div>
    </div>
  );
};

export default Admin;
