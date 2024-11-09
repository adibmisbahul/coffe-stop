import React from "react";
import { Chart } from "react-google-charts";
import { useEffect, useState } from "react";

const Admin = () => {
  const [karyawan, setKaryawan] = useState([]);

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
  return (
    <div className="w-[100%] h-[90vh]">
      <Chart
        chartType="ColumnChart"
        width="100%"
        height="100%"
        data={data}
        options={options}
      />
    </div>
  );
};

export default Admin;
