import React from "react";
import { motion } from "motion/react";
import { Chart } from "react-google-charts";
import { useEffect, useState } from "react";

import CardAdmin from "../Components/Fragment/CardAdmin";
import SideBarAdmin from "../Components/Fragment/SideBarAdmin";

import peopleIcon from "../assets/image/fluent--people.svg";
import foodIcon from "../assets/image/food.svg";
import dollarIcon from "../assets/image/dollar.svg";
import transactionIcon from "../assets/image/transaction.svg";

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
    ["barista", barista.length, "#1E40AF"],
    ["waiter", waiters.length, "#1E40AF"],
    ["chef", chef.length, "#1E40AF"],
    ["cashier", cashier.length, "#1E40AF"],
    ["manager", manager.length, "#1E40AF"],
  ];

  const data1 = [
    ["barista", "Density", { role: "style" }],
    ["Januari", 2000000, "#1D4ED8"],
    ["Februari", 3000000, "#1D4ED8"],
    ["Maret", 1500000, "#1D4ED8"],
    ["April", 1700000, "#1D4ED8"],
    ["Mei", 1000000, "#1D4ED8"],
    ["Juni", 2300000, "#1D4ED8"],
    ["Juli", 2100000, "#1D4ED8"],
    ["Agustus", 1200000, "#1D4ED8"],
    ["September", 4000000, "#1D4ED8"],
    ["Oktober", 3100000, "#1D4ED8"],
    ["November", 3500000, "#1D4ED8"],
    ["Desember", 6000000, "#1D4ED8"],
  ];

  const options = {
    title: "Revenue",
    legend: { position: "none" },
    animation: {
      duration: 500,
      easing: "inAndOut",
    },
    bar: { groupWidth: "40%" },
    chartArea: { width: "70%", height: "70%" },
    legend: {
      position: "bottom",
      textStyle: {
        color: "#1a237e",
        fontSize: 14,
      },
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

  const today = new Date();
  const day = today.getDate();
  const monthIndex = today.getMonth() + 1;
  const year = today.getFullYear();

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

  const monthName = monthNames[monthIndex];

  return (
    <div className="flex w-auto h-[99.7vh]">
      <div className="basis-[20%]">
        <SideBarAdmin />
      </div>
      <div className="basis-[60%] flex justify-evenly mt-4">
        <CardAdmin
          title={"Total order"}
          data={120}
          color={"bg-fuchsia-400"}
          icon={foodIcon}
          detailText={"Total order hari ini"}
        />
        <CardAdmin
          title={"margin"}
          data={230000}
          color={"bg-blue-400"}
          icon={foodIcon}
          detailText={"margin hari ini"}
        />
        <CardAdmin
          title={"halo"}
          data={120}
          color={"bg-emerald-400"}
          icon={foodIcon}
          detailText={"Total order hari ini"}
        />
      </div>
      <div className="bg-green-200 basis-[20%]">juga</div>
    </div>
  );
};

export default Admin;
